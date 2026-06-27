<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-6" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}" class="space-y-6 ">
        @csrf

        <!-- Heading -->
        <div class="text-center">
            <h1 class="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                Welcome Back
            </h1>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Sign in to continue managing your tasks efficiently.
            </p>
        </div>

        <!-- Email Address -->
        <div>
            <x-input-label 
                for="email" 
                :value="__('Email')" 
                class="text-sm font-semibold text-gray-700 dark:text-gray-300"
            />

            <x-text-input 
                id="email"
                class="block mt-2 w-full rounded-xl border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                type="email"
                name="email"
                :value="old('email')"
                required
                autofocus
                autocomplete="username"
                placeholder="you@example.com"
            />

            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div>
            <div class="flex items-center justify-between mb-2">
                <x-input-label 
                    for="password" 
                    :value="__('Password')" 
                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                />

                @if (Route::has('password.request'))
                    <a class="text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition"
                       href="{{ route('password.request') }}">
                        {{ __('Forgot password?') }}
                    </a>
                @endif
            </div>

            <x-text-input 
                id="password"
                class="block w-full rounded-xl border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                placeholder="••••••••"
            />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center justify-between">
            <label for="remember_me" class="inline-flex items-center cursor-pointer">
                <input id="remember_me"
                       type="checkbox"
                       class="rounded border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:bg-gray-900"
                       name="remember">

                <span class="ms-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {{ __('Remember me') }}
                </span>
            </label>
        </div>

        <!-- Login Button -->
        <div>
            <x-primary-button class="w-full justify-center py-3 text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-all duration-200">
                {{ __('Log in') }}
            </x-primary-button>
        </div>

        <!-- Divider -->
        <div class="relative flex items-center">
            <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>

            <span class="mx-4 text-xs font-bold tracking-wider text-gray-400 uppercase">
                OR CONTINUE WITH
            </span>

            <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-1 gap-3">
            <a href="{{ route('auth.google') }}"
               class="group flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">

                <img src="https://www.svgrepo.com/show/355037/google.svg"
                     class="w-5 h-5 me-3 transition-transform group-hover:scale-110"
                     alt="Google Logo">

                {{ __('Login with Google') }}
            </a>

            <a href="{{ route('auth.github') }}"
               class="group flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-gray-900 dark:bg-gray-700 border border-transparent rounded-xl shadow-sm hover:bg-black dark:hover:bg-gray-600 hover:shadow-md transition-all duration-200">

                <img src="https://www.svgrepo.com/show/512317/github-142.svg"
                     class="w-5 h-5 me-3 invert dark:invert-0 transition-transform group-hover:scale-110"
                     alt="GitHub Logo">

                {{ __('Login with GitHub') }}
            </a>
        </div>
        <a href="{{ route('register') }}"
           class="block text-center text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition">
            {{ __("Don't have an account? Register") }}
    </form>
</x-guest-layout>