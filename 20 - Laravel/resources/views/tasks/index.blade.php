<x-app-layout>

<div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Tasks Dashboard
    </h1>

    <div class="flex gap-2">

        <a href="{{ route("tasks.create") }}"
           class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
            Create New Task
        </a>

        <a href="{{ route("tasks.deleted") }}"
           class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded shadow">
            Deleted Tasks
        </a>

    </div>
</div>

<div class="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden">

    <div class="overflow-x-auto">

        <table class="min-w-full text-sm">

            <thead class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">

                <tr>
                    <th class="text-left px-4 py-3">#ID</th>
                    <th class="text-left px-4 py-3">Title</th>
                    <th class="text-left px-4 py-3">Priority</th>
                    <th class="text-left px-4 py-3">Status</th>
                    <th class="text-left px-4 py-3">Due Date</th>
                    <th class="text-right px-4 py-3">Actions</th>
                </tr>

            </thead>

            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">

                @foreach($tasks as $task)
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">

                        <td class="px-4 py-3 font-bold text-gray-500">
                            {{ $task['id'] }}
                        </td>

                        <td class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">
                            {{ $task['title'] }}
                        </td>

                        <td class="px-4 py-3">
                            <span class="px-3 py-1 text-xs rounded-full border bg-gray-100 text-gray-700">
                                {{ $task['priority'] }}
                            </span>
                        </td>

                        <td class="px-4 py-3">

                            <span class="px-3 py-1 text-xs rounded-full
                                {{ $task['status'] == 'yes'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-yellow-100 text-yellow-700' }}">
                                {{ $task['status'] }}
                            </span>

                        </td>

                        <td class="px-4 py-3 text-gray-500">
                            {{ $task['due_date'] }}
                        </td>

                        <td class="px-4 py-3 text-right">

                            <div class="flex justify-end gap-2">

                                <a href="{{ route("tasks.show", ["task" =>$task]) }}"
                                   class="text-green-600 hover:underline">
                                    Show
                                </a>

                                <a href="{{ route("tasks.edit", ["task" =>$task]) }}"
                                   class="text-yellow-600 hover:underline">
                                    Edit
                                </a>

                                <a href="{{ route("tasks.delete", ["task" =>$task]) }}"
                                   class="text-red-600 hover:underline">
                                    Delete
                                </a>

                            </div>

                        </td>

                    </tr>
                @endforeach

            </tbody>

        </table>

    </div>

    <div class="flex justify-end p-4">
        {{ $tasks->links() }}
    </div>

</div>

</x-app-layout>