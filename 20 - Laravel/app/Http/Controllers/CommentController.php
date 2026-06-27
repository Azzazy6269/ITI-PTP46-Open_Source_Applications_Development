<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Task;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $task = Task::findOrFail($request->commentable_id);

        $task->comments()->create([
            'user_id' => $request->user_id,
            'content' => $request->content,
            'commentable_type' => 'App\Models\Task',
            'commentable_id' => $request->commentable_id,
        ]);

        return back();
    }
}
