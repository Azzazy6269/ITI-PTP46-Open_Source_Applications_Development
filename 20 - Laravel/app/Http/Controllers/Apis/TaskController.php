<?php

namespace App\Http\Controllers\Apis;

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
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::whereNull('deleted_at')->get();

        return TaskResource::collection($tasks);
    }

    public function show($id)
    {
        $task = Task::with('user')->where('id', $id)->firstOrFail();
        return new TaskResource($task);
    }

    public function store(StoreTaskRequest $request)
    {
        $users = User::all();
        $validated = $request->validated();
        $validated['user_id'] = $request->user()->id;
        if (isset($validated['tags'])) {
            $validated['tags'] = explode(',', $validated['tags']);
        }
        if (isset($validated['labels'])) {
            $validated['labels'] = explode(',', $validated['labels']);
        }
        $task = Task::create(
            collect($validated)->except('image')->toArray()
        );
        return response()->json(
            [
                "data" => new TaskResource($task),
                "message" => "Task created Successfully"
            ]
            , 201);
    }

    public function update(UpdateTaskRequest $request, $id)
    {
        $task = Task::findOrFail($id);
        $validated = $request->validated();
        if (isset($validated['tags'])) {
            $validated['tags'] = explode(',', $validated['tags']);
        }
        if (isset($validated['labels'])) {
            $validated['labels'] = explode(',', $validated['labels']);
        }
        $task->update(
            collect($validated)->except('image')->toArray()
        );
        return response()->json(
            [
                "data" => new TaskResource($task),
                "message" => "Task updated Successfully"
            ]
            , 200);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}