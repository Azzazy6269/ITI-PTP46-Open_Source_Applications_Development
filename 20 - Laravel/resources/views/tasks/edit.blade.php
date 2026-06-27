<x-app-layout>

<div class="flex justify-center">
    <div class="w-full max-w-5xl">

        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Edit Task <span class="text-blue-500 opacity-60">#{{ $task['id'] }}</span>
            </h1>

            <a href="{{ route("tasks.index") }}"
               class="border border-gray-300 text-gray-700 px-4 py-2 rounded shadow-sm hover:bg-gray-50">
                Cancel
            </a>
        </div>

        @if ($errors->any())
            <div class="bg-red-100 text-red-700 p-4 rounded mb-6">
                <ul class="list-disc ml-5">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-6 border-t-4 border-blue-500">

            <form method="post" action="{{ route("tasks.update", $task) }}" enctype='multipart/form-data'>
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <!-- Left -->
                    <div>

                        <h5 class="text-blue-600 font-bold mb-4">Task Overview</h5>

                        <div class="mb-4">
                            <label class="block text-sm text-gray-500 uppercase mb-1">Title</label>
                            <input type="text"
                                   class="w-full bg-gray-100 border-0 p-2 rounded"
                                   name="title"
                                   value="{{ $task['title'] }}" />
                                   @error('title')
                                        <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                      @enderror
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm text-gray-500 uppercase mb-1">Creator</label>

                            <select class="w-full bg-gray-100 border-0 p-2 rounded"
                                    name="user_id">

                                @foreach ($users as $user)
                                    <option value="{{ $user['id'] }}"
                                        {{ $task['user_id'] == $user['id'] ? 'selected' : '' }}>
                                        {{ $user['name'] }}
                                    </option>
                                @endforeach

                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm text-gray-500 uppercase mb-1">Assigned To</label>

                            <input type="text"
                                   class="w-full bg-gray-100 border-0 p-2 rounded"
                                   name="assigned_to"
                                   value="{{ $task['assigned_to'] }}" />
                                   @error('assigned_to')
                                        <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                      @enderror
                        </div>

                    </div>

                    <!-- Right -->
                    <div>

                        <h5 class="text-blue-600 font-bold mb-4">Configuration</h5>

                        <div class="grid grid-cols-2 gap-4 mb-4">

                            <div>

                                <label class="block text-sm text-gray-500 uppercase mb-1">Priority</label>
                                <select class="w-full bg-gray-100 border-0 p-2 rounded"
                                        name="priority">

                                    <option value="low" {{ $task['priority'] == 'low' ? 'selected' : '' }}>Low</option>
                                    <option value="medium" {{ $task['priority'] == 'medium' ? 'selected' : '' }}>Medium</option>
                                    <option value="high" {{ $task['priority'] == 'high' ? 'selected' : '' }}>High</option>
                                    <option value="urgent" {{ $task['priority'] == 'urgent' ? 'selected' : '' }}>Urgent</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm text-gray-500 uppercase mb-1">Status</label>
                                <input type="text"
                                       class="w-full bg-gray-100 border-0 p-2 rounded"
                                       name="status"
                                       value="{{ $task['status'] }}" />
                                        @error('status')
                                         <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                        @enderror
                            </div>

                        </div>

                        <div class="mb-4">
                            <label class="block text-sm text-gray-500 uppercase mb-1">Board Column</label>

                            <select class="w-full bg-gray-100 border-0 p-2 rounded"
                                    name="board_column">

                                <option value="To Do" {{ $task['board_column'] == 'To Do' ? 'selected' : '' }}>To Do</option>
                                <option value="In Progress" {{ $task['board_column'] == 'In Progress' ? 'selected' : '' }}>In Progress</option>
                                <option value="Done" {{ $task['board_column'] == 'Done' ? 'selected' : '' }}>Done</option>
                                <option value="Backlog" {{ $task['board_column'] == 'Backlog' ? 'selected' : '' }}>Backlog</option>

                            </select>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-4">

                            <div>
                                <label class="block text-sm text-gray-500 uppercase mb-1">Project ID</label>
                                <input type="number"
                                       class="w-full bg-gray-100 border-0 p-2 rounded"
                                       name="project_id"
                                       value="{{ $task['project_id'] }}" />
                                       @error('project_id')
                                        <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                       @enderror
                            </div>

                            <div>
                                <label class="block text-sm text-gray-500 uppercase mb-1">Due Date</label>
                                <input type="date"
                                       class="w-full bg-gray-100 border-0 p-2 rounded"
                                       name="due_date"
                                       value="{{ $task['due_date'] }}" />
                                       @error('due_date')
                                        <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                       @enderror
                            </div>

                        </div>

                    </div>

                </div>

                <hr class="my-6 border-gray-200">

                <div class="mb-4">
                    <label class="block text-sm text-gray-500 uppercase mb-1">Description</label>
                    <textarea class="w-full bg-gray-100 border-0 p-2 rounded"
                              name="description"
                              rows="3">{{ $task['description'] }}</textarea>
                                @error('description')
                                    <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                @enderror
                </div>

                <div class="grid md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label class="block text-sm text-gray-500 uppercase mb-1">Tags</label>

                        <input type="text"
                               class="w-full bg-gray-100 border-0 p-2 rounded"
                               name="tags"
                               value="{{ implode(',', $task['tags']) }}" />
                                @error('tags')
                                    <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                @enderror
                    </div>

                    <div>
                        <label class="block text-sm text-gray-500 uppercase mb-1">Labels</label>

                        <input type="text"
                               class="w-full bg-gray-100 border-0 p-2 rounded"
                               name="labels"
                               value="{{ implode(',', $task['labels']) }}" />
                                @error('labels')
                                    <span class="text-red-500 text-sm mt-1">{{ $message }}</span>
                                @enderror
                    </div>

                    <div class="w-40">
                        <label class="block text-sm text-gray-500 uppercase mb-1">Completed</label>

                        <select class="w-full bg-gray-100 border-0 p-2 rounded"
                                name="completed">

                            <option value="0" {{ !$task['completed'] ? 'selected' : '' }}>No</option>
                            <option value="1" {{ $task['completed'] ? 'selected' : '' }}>Yes</option>

                        </select>
                    </div>

                </div>

                 <div class="mb-4">
                    <label class="block text-sm text-gray-500 uppercase mb-1">Images</label>
                    @if($task->images->count() > 0)
                         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

                @foreach ($task->images as $image)
                    <div class="relative border border-gray-200 rounded-2xl overflow-hidden shadow bg-white">

                        <!-- Delete Button -->
                        <a href="{{ route('tasks.deleteImage', $image->id) }}"
                            class="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md transition">
                            ✕
                        </a>

                        <!-- Image -->
                        <img
                            src="{{ Storage::url($image->image_path) }}"
                            alt="Task Image"
                            class="w-full h-72 object-cover">
                    </div>
                        @endforeach

                            </div>
                        @else
                            <span class="text-gray-400 italic">No images</span>
                        @endif

                <input type="file"
                class="w-full bg-gray-100 border-0 p-2 rounded"
                name="image" /> 
                </div>

                <button type="submit"
                        class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded shadow">
                    Update Task Information
                </button>

            </form>

        </div>

    </div>
</div>

</x-app-layout>