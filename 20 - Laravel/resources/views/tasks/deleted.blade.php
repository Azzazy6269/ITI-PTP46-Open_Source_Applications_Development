<x-app-layout>
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Deleted Tasks Dashboard
        </h1>

        <a href="{{ route('tasks.index') }}"
           class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
            Back
        </a>
    </div>

    

    <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div class="overflow-x-auto">
            <table class="min-w-full text-sm text-left">
                <thead class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <tr>
                        <th class="py-3 px-4">#ID</th>
                        <th class="py-3 px-4">Title</th>
                        <th class="py-3 px-4">Deleted At</th>
                        <th class="py-3 px-4">Priority</th>
                        <th class="py-3 px-4">Status</th>
                        <th class="py-3 px-4">Due Date</th>
                        <th class="py-3 px-4 text-right">Actions</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    @foreach($tasks as $task)
                        <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td class="py-3 px-4 font-semibold text-gray-600 dark:text-gray-300">
                                {{ $task['id'] }}
                            </td>

                            <td class="py-3 px-4 font-medium text-gray-800 dark:text-gray-100">
                                {{ $task['title'] }}
                            </td>

                            <td class="py-3 px-4 text-gray-500 dark:text-gray-400">
                                {{ $task['deleted_at'] }}
                            </td>

                            <td class="py-3 px-4">
                                <span class="px-2 py-1 text-xs rounded-full border bg-gray-100 text-gray-700">
                                    {{ $task['priority'] }}
                                </span>
                            </td>

                            <td class="py-3 px-4">
                                <span class="px-3 py-1 text-xs rounded-full
                                    {{ $task['status'] == 'yes'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700' }}">
                                    {{ $task['status'] }}
                                </span>
                            </td>

                            <td class="py-3 px-4 text-gray-500 dark:text-gray-400">
                                {{ $task['due_date'] }}
                            </td>

                            <td class="py-3 px-4 text-right">
                                <form method="post"
                                      action="{{ route('tasks.restore', ['task' => $task]) }}">
                                    @csrf
                                    @method('PATCH')

                                    <button type="submit"
                                            class="text-green-600 hover:text-green-800 font-medium">
                                        Restore
                                    </button>
                                </form>
                                <form method="post"
                                      action="{{ route('tasks.forceDelete', ['task' => $task]) }}">
                                    @csrf
                                    @method('DELETE')

                                    <button type="submit"
                                            class="text-red-600  hover:text-red-800 font-medium">
                                        permanently delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>

            </table>
        </div>
        <!--div class="flex justify-end p-4">
        </div-->
        <div class="flex justify-end p-4">
        {{ $tasks->links() }}
    </div>
    </div>
</x-app-layout>