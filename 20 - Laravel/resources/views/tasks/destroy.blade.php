<x-app-layout>

<div class="flex justify-center">
    <div class="w-full max-w-md">

        <div class="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow">

            <div class="mb-6">
                <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="40"
                         height="40"
                         fill="currentColor"
                         viewBox="0 0 16 16">
                        <path d="M11.5 15a.5.5 0 0 1-.5-.5V2.707l1.354 1.357a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L10 2.707V14.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1h-3.5v10H10V15h1.5z"/>
                        <path d="M14 3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 2 3h12zM2 2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                    </svg>
                </div>
            </div>

            <h2 class="font-bold text-red-600 mb-3 text-xl">
                Are you sure?
            </h2>

            <h2 class="font-bold text-red-600 mb-6 text-xl">
                Don't worry, deleted tasks can be returned
            </h2>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">

                <form method="post"
                      action="{{ route("tasks.destroy",["task"=>$task]) }}"
                      class="inline">
                    @csrf
                    @method("DELETE")

                    <button type="submit"
                            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow">
                        Delete
                    </button>
                </form>

                <a href="{{ route("tasks.index") }}"
                   class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
                    Return to Dashboard
                </a>

            </div>

        </div>

    </div>
</div>

</x-app-layout>
