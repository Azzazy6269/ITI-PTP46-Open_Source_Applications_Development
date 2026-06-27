<x-app-layout>

<div class="max-w-6xl mx-auto py-10 px-4">

    <div class="flex justify-between items-center mb-6">
        <div>
            <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                Create New Task
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
                Fill in the details below to create a task.
            </p>
        </div>

        <a href="{{ route("tasks.index") }}"
           class="bg-white border border-gray-200 shadow px-4 py-2 rounded-full text-gray-700 hover:bg-gray-50">
            Cancel
        </a>
    </div>

    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">

        <div class="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

        <div class="p-8">

            <form method="post" action="{{ route("tasks.store") }}" enctype="multipart/form-data">
                @csrf
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <!-- Left -->
                    <div>

                        <div class="mb-6">
                            <h5 class="font-bold text-blue-600 mb-1">Basic Information</h5>
                            <small class="text-gray-500">Main task information</small>
                        </div>

                        <div class="mb-5">
                            <label class="block font-semibold mb-2 text-gray-700">Title</label>
                            <input type="text"
                                   class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 "
                                   name="title"
                                   placeholder="Enter task title"
                                   value="{{ old('title') }}"
                                   required/>
                                   @error('title')
                                    <p class="text-red-500 text-sm mt-2">
                                    {{ $message }}
                                    </p>
                                    @enderror
                                   
                        </div>

                        <div class="mb-5">
                            <!--label class="block font-semibold mb-2 text-gray-700">Creator</label>

                            <select class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                    name="user_id">

                                @foreach ($users as $user)
                                    <option value="{{ $user['id'] }}"
                                        {{ old('user_id') == $user['id'] ? 'selected' : '' }}>
                                        {{ $user['name'] }}
                                    </option>
                                @endforeach

                            </select>
                        </div>

                        <div class="mb-5"-->
                            <label class="block font-semibold mb-2 text-gray-700">Assigned To</label>

                            <input type="text"
                                   class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                   name="assigned_to"
                                   placeholder="Assign task to"
                                   value="{{ old('assigned_to') }}"
                                   required
                                   />
                                   @error('assigned_to')
                                    <p class="text-red-500 text-sm mt-2">
                                    {{ $message }}
                                    </p>
                                    @enderror
                                    
                        </div>

                    </div>

                    <!-- Right -->
                    <div>

                        <div class="mb-6">
                            <h5 class="font-bold text-blue-600 mb-1">Task Details</h5>
                            <small class="text-gray-500">Manage task workflow</small>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-5">

                            <div>
                                <label class="block font-semibold mb-2 text-gray-700">Priority</label>
                                <select class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                        name="priority">
                                    <option value="low" {{ old('priority') == 'low' ? 'selected' : '' }}>Low</option>
                                    <option value="medium" {{ old('priority') == 'medium' ? 'selected' : '' }}>Medium</option>
                                    <option value="high" {{ old('priority') == 'high' ? 'selected' : '' }}>High</option>
                                    <option value="urgent" {{ old('priority') == 'urgent' ? 'selected' : '' }}>Urgent</option>
                                </select>
                            </div>

                            <div>
                                <label class="block font-semibold mb-2 text-gray-700">Status</label>

                                <input type="text"
                                       class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                       name="status"
                                       placeholder="Open / Closed"
                                       value="{{ old('status') }}"/>
                                       @error('status')
                                        <p class="text-red-500 text-sm mt-2">
                                        {{ $message }}
                                        </p>
                                        @enderror
                            </div>

                        </div>

                        <div class="mb-5">
                            <label class="block font-semibold mb-2 text-gray-700">Board Column</label>

                            <select class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                    name="board_column">

                                <option value="To Do" {{ old('board_column') == 'To Do' ? 'selected' : '' }}>To Do</option>
                                <option value="In Progress" {{ old('board_column') == 'In Progress' ? 'selected' : '' }}>In Progress</option>
                                <option value="Done" {{ old('board_column') == 'Done' ? 'selected' : '' }}>Done</option>
                                <option value="Backlog" {{ old('board_column') == 'Backlog' ? 'selected' : '' }}>Backlog</option>

                            </select>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mb-5">

                            <div>
                                <label class="block font-semibold mb-2 text-gray-700">Project ID</label>

                                <input type="number"
                                       class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                       name="project_id"
                                       placeholder="ID"
                                       value="{{ old('project_id') }}"
                                       required/>
                                       @error('project_id')
                                    <p class="text-red-500 text-sm mt-2">
                                    {{ $message }}
                                    </p>
                                    @enderror
                            </div>

                            <div>
                                <label class="block font-semibold mb-2 text-gray-700">Due Date</label>

                                <input type="date"
                                       class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                       name="due_date"
                                       value="{{ old('due_date') }}"
                                       required/>
                                       @error('due_date')
                                        <p class="text-red-500 text-sm mt-2">
                                        {{ $message }}
                                        </p>
                                    @enderror
                            </div>

                        </div>

                    </div>

                </div>

                <hr class="my-8 border-gray-200">

                <!-- Bottom -->
                <div>

                    <div class="mb-5">
                        <label class="block font-semibold mb-2 text-gray-700">Description</label>

                        <textarea class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                  name="description"
                                  rows="5"
                                  placeholder="Add some details...">{{ old('description') }}</textarea>
                                  @error('description')
                                    <p class="text-red-500 text-sm mt-2">
                                        {{ $message }}
                                    </p>
                                    @enderror
                    </div>

                    <div class="grid md:grid-cols-2 gap-6 mb-5">

                        <div>
                            <label class="block font-semibold mb-2 text-gray-700">Tags</label>

                            <input type="text"
                                   class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                   name="tags"
                                   placeholder="e.g. backend, api"
                                   value="{{ old('tags') }}"/>
                                   @error('tags')
                                    <p class="text-red-500 text-sm mt-2">
                                        {{ $message }}
                                    </p>
                                    @enderror

                            <small class="text-gray-400">Separate tags with commas</small>
                        </div>

                        <div>
                            <label class="block font-semibold mb-2 text-gray-700">Labels</label>

                            <input type="text"
                                   class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                   name="labels"
                                   placeholder="e.g. urgent, bug"
                                   value="{{ old('labels') }}"/>
                                   @error('labels')
                                    <p class="text-red-500 text-sm mt-2">
                                        {{ $message }}
                                    </p>
                                    @enderror   
                            <small class="text-gray-400">Separate labels with commas</small>
                        </div>

                    </div>

                    <div class="w-40 mb-6">

                        <label class="block font-semibold mb-2 text-gray-700">Completed</label>

                        <select class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                                name="completed">
                            <option  value="0" {{ old('completed') == 0 ? 'selected' : '' }}>No</option>
                            <option value="1" {{ old('completed') == 1 ? 'selected' : '' }}>Yes</option>

                        </select>

                    </div>

                    <div class="mb-5">
                        <label class="block font-semibold mb-2 text-gray-700">Image</label>

                        <input type="file"
                               class="w-full border border-gray-200 bg-gray-50 rounded-xl p-3"
                               name="image" value="{{ old('image') }}"/>


                </div>

                <button type="submit"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow transition">
                    Create Task
                </button>

            </form>

        </div>
    </div>
</div>

</x-app-layout>