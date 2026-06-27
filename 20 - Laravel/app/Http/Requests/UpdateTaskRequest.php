<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
     public function rules(): array
    {
        $taskSlug = $this->route('task');
        //dd($taskSlug);
        return [
            "title" => ["required","string","min:3","max:255",Rule::unique('tasks', 'title')->ignore($taskSlug,'slug')->whereNull('deleted_at')],
            "user_id" => "exists:users,id",
            "priority" => "string|min:1|in:low,medium,high,urgent",
            "status" => "string|min:1",
            "due_date" => "date",
            "project_id" => "numeric|min:1",
            "board_column" => "string|min:1",
            "description" => "string|min:10|max:1000",
            "completed" => "boolean",
            "tags" => "string",
            "assigned_to" => "string",
            "labels" => "string",
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:10240',
        ];
    }

    public function messages(): array
    {
        return [
            "title.string" => "The title must be a string.",
            "title.min" => "The title must be at least 3 characters.",
            "title.max" => "The title must not exceed 255 characters.",
            "user_id.exists" => "The selected user_id is invalid.",
            "priority.string" => "The priority must be a string.",
            "priority.in" => "The priority must be one of the following: low, medium, high, urgent.",
            "status.string" => "The status must be a string.",
            "due_date.date" => "The due_date must be a valid date.",
            "project_id.exists" => "The selected project_id is invalid.",
            "board_column.string" => "The board_column must be a string.",
            "description.string" => "The description must be a string.",
            "description.min" => "The description must be at least 10 characters.",
            "description.max" => "The description must not exceed 1000 characters.",
            "completed.boolean" => "The completed field must be true or false.",
            "tags.string" => "The tags must be a string.",
            "assigned_to.string" => "The assigned_to must be a string.",
            "labels.string" => "The labels must be a string."
        ];
    }
}
