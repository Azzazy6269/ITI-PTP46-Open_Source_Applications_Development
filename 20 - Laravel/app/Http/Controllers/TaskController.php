<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\User;
use App\Models\Comment;
use App\Models\Image;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Requests\UploadImageRequest;
use Illuminate\Support\Facades\Storage;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::whereNull('deleted_at')->paginate(10);
        return view("tasks.index", ["tasks" => $tasks]);
    }

    public function show($slug)
    {
        $task = Task::with('user')->where('slug', $slug)->firstOrFail();
        $users = User::all();
        $comments = Comment::where(['commentable_id'=>$task->id, 'commentable_type'=>'App\Models\Task'])->with('user')->get();
        $images = Image::where('task_id', $task->id)->get();
        return view("tasks.show", ["task" => $task, "users" => $users, "comments" => $comments, "images" => $images]);
    }

    public function create()
    {
        $users = User::all();
        return view("tasks.create", ["users" => $users]);
    }

    public function store(StoreTaskRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = $request->user()->id;
        if (isset($validated['tags'])) {
            $validated['tags'] = explode(',', $validated['tags']);
        }
        if (isset($validated['labels'])) {
            $validated['labels'] = explode(',', $validated['labels']);
        }
        //create task with validated data except image
        $task = Task::create(
            collect($validated)->except('image')->toArray()
        );
        $this->uploadImage($request, $task->slug);
        return redirect()->route('tasks.show', $task);
    }

    public function edit($slug)
    {
        $task = Task::where('slug', $slug)->firstOrFail();
        $users = User::all();
        return view("tasks.edit", ["task" => $task], ["users" => $users]);
    }

    public function update(UpdateTaskRequest $request, $slug)
    {
        $task = Task::where('slug', $slug)->firstOrFail();
        $validated = $request->validated();
        if (isset($validated['tags'])) {
            $validated['tags'] = explode(',', $validated['tags']);
        }
        if (isset($validated['labels'])) {
            $validated['labels'] = explode(',', $validated['labels']);
        }
        Task::where("id", $task->id)->update(
        collect($validated)->except('image')->toArray()
        );
        //Task::where("id", $task->id)->update($validated);
        $this->uploadImage($request, $slug);
        return redirect()->route('tasks.show', $task);
    }

    public function delete($slug){
        $task = Task::where('slug', $slug)->firstOrFail();
        return view("tasks.destroy", ["task" => $task]);
    }

    public function destroy($slug){
        $task = Task::where('slug', $slug)->firstOrFail();
        $task->delete();
        return redirect()->route("tasks.index");
    }

    public function getDeleted(Request $request){
        $tasks = Task::onlyTrashed()->paginate(10);
        return view("tasks.deleted", ["tasks" => $tasks]);
    }
    
    public function restore($slug)
    {
        $task = Task::withTrashed()->where('slug', $slug)->firstOrFail();
        $task->restore();
        return redirect()->route('tasks.deleted');
    }

    public function forceDelete($slug)
    {
        $task = Task::withTrashed()->where('slug', $slug)->firstOrFail();
        foreach ($task->images as $image) {
            $this->deleteImage($image->id);
        }
        $task->forceDelete();
        return redirect()->route('tasks.deleted');
    }

    public function uploadImage(Request $request, $slug)
    {
        $task = Task::where('slug', $slug)->firstOrFail();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('images', 'public');
            $task->images()->create(['image_path' => $path]);
        }

        return;
    }

    public function deleteImage($id)
    {
        $image = Image::findOrFail($id);
        $task = $image->task;
        Storage::disk('public')->delete($image->image_path);
        $image->delete();
        return;
    }
}