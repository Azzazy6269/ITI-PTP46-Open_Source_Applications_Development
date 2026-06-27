<x-app-layout>

<div class="flex justify-center">
    <div class="w-full max-w-4xl">

        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-green-600">
                Task Saved Successfully ✅
            </h1>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow rounded-xl p-6 border-t-4 border-green-500">

            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 pb-3 border-b border-gray-200">
                {{ $task['title'] }}
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Creator</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $creator['name'] }}
                    </span>
                </div>

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Assigned To</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $task['assigned_to'] ?? 'N/A' }}
                    </span>
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded mb-6">

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Priority</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $task['priority'] }}
                    </span>
                </div>

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Status</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $task['status'] }}
                    </span>
                </div>

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Completed</span>

                    <span class="px-3 py-1 text-xs rounded-full
                        {{ $task['completed'] ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700' }}">
                        {{ $task['completed'] ? 'Yes' : 'No' }}
                    </span>

                </div>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Board Column</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $task['board_column'] ?? 'N/A' }}
                    </span>
                </div>

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Project ID</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $task['project_id'] ?? 'N/A' }}
                    </span>
                </div>

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-1">Due Date</span>
                    <span class="text-gray-800 dark:text-gray-100 font-medium">
                        {{ $task['due_date'] }}
                    </span>
                </div>

            </div>

            <div class="mb-6">

                <span class="block text-xs uppercase text-gray-400 font-semibold mb-2">
                    Description
                </span>

                <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded text-gray-800 dark:text-gray-100">
                    {{ $task['description'] ?? 'No description' }}
                </div>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-gray-200 pb-6 mb-6">

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-2">Tags</span>

                    <div class="text-gray-800 dark:text-gray-100 font-medium">
                        @if(!empty($task['tags']))
                            {{ implode(', ', $task['tags']) }}
                        @else
                            <span class="text-gray-400 italic">No tags</span>
                        @endif
                    </div>
                </div>

                <div>
                    <span class="block text-xs uppercase text-gray-400 font-semibold mb-2">Labels</span>

                    <div class="text-gray-800 dark:text-gray-100 font-medium">
                        @if(!empty($task['labels']))
                            {{ implode(', ', $task['labels']) }}
                        @else
                            <span class="text-gray-400 italic">No labels</span>
                        @endif
                    </div>
                </div>

            </div>

            <!-- Comments -->
            <div class="mb-6">

                <span class="block text-xs uppercase text-gray-400 font-semibold mb-3">
                    Comments
                </span>

                @if(!empty($task['comments']))
                    <ul class="border rounded divide-y divide-gray-200 bg-gray-50">

                        @foreach($task['comments'] as $comment)
                            <li class="p-3 text-gray-800 dark:text-gray-100">
                                {{ $comment }}
                            </li>
                        @endforeach

                    </ul>
                @else
                    <p class="text-gray-400 italic">No comments</p>
                @endif

            </div>

            <!-- ACTIONS -->
            <div class="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-200">

                <a href="{{ route("tasks.index") }}"
                   class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                    Back
                </a>

                <a href="{{ route("tasks.show", $task) }}"
                   class="border border-blue-500 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                    View
                </a>

                <a href="{{ route("tasks.edit", $task) }}"
                   class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded shadow">
                    Edit
                </a>

            </div>

        </div>

    </div>
</div>

</x-app-layout>