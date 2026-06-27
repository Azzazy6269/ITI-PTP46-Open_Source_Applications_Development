<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
class StoreTaskRequest extends FormRequest
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
        return [
            "title" => "required|string|min:3|max:255|unique:tasks,title",
            "user_id" => "exists:users,id",
            "priority" => "required|string|in:low,medium,high,urgent",
            "priority.in" => "The priority must be one of the following: low, medium, high, urgent.",
            "status" => "required|string",
            "due_date" => "required|date",
            "project_id" => "required|numeric",
            "board_column" => "required|string",
            "description" => "required|string|min:10|max:1000",
            "completed" => "required|boolean",
            "tags" => "required|string",
            "assigned_to" => "required|string",
            "labels" => "required|string",
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:10240',
        ];
    }

    public function messages(): array
    {
        return [
            "title.required" => "The title field is required.",
            "title.string" => "The title must be a string.",
            "title.min" => "The title must be at least 3 characters.",
            "title.max" => "The title must not exceed 255 characters.",
            "user_id.required" => "The user_id field is required.",
            "user_id.exists" => "The selected user_id is invalid.",
            "priority.required" => "The priority field is required.",
            "priority.string" => "The priority must be a string.",
            "status.required" => "The status field is required.",
            "status.string" => "The status must be a string.",
            "due_date.required" => "The due_date field is required.",
            "due_date.date" => "The due_date must be a valid date.",
            "project_id.required" => "The project_id field is required.",
            "project_id.exists" => "The selected project_id is invalid.",
            "board_column.required" => "The board_column field is required.",
            "board_column.string" => "The board_column must be a string.",
            "description.required" => "The description field is required.",
            "description.string" => "The description must be a string.",
            "description.min" => "The description must be at least 10 characters.",
            "description.max" => "The description must not exceed 1000 characters.",
            "completed.required" => "The completed field is required.",
            "completed.boolean" => "The completed field must be true or false.",
            "tags.required" => "The tags field is required.",
            "tags.string" => "The tags must be a string.",
            "assigned_to.required" => "The assigned_to field is required.",
            "assigned_to.string" => "The assigned_to must be a string.",
            "labels.required" => "The labels field is required.",
            "labels.string" => "The labels must be a string."
        ];
    }
}
