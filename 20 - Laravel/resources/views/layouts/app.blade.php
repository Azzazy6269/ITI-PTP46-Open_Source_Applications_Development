<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>

    <body class="font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

        <nav class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="{{ route('welcome') }}">
                        <x-application-logo class="w-10 h-10 fill-current text-primary" />
                    </a>
                    <div class="flex-shrink-0 flex items-center">
                    

                    <div class="flex items-center gap-6">
                        @include('layouts.navigation')
                    </div>

                </div>
            </div>
        </nav>

        <div class="min-h-screen">

            @isset($header)
                <header class="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-100 dark:border-slate-800">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-xl font-semibold leading-tight">
                            {{ $header }}
                        </h1>
                    </div>
                </header>
            @endisset

            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div class="animate-fade-in">
                    {{ $slot }}
                </div>
            </main>

        </div>

        <footer class="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div>
                        <h3 class="text-white font-bold text-lg mb-4 underline decoration-indigo-500 decoration-2 underline-offset-4">About the Platform</h3>
                        <p class="text-sm leading-relaxed opacity-80">
                            We provide integrated technical solutions built with the latest technologies to ensure the best user experience. Our goal is to simplify daily processes and provide a smart work environment.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-white font-bold text-lg mb-4 underline decoration-indigo-500 decoration-2 underline-offset-4">Quick Links</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-indigo-400 transition-colors">home</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition-colors">about us</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition-colors">contact us</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition-colors">privacy policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-white font-bold text-lg mb-4 underline decoration-indigo-500 decoration-2 underline-offset-4">Contact Us</h3>
                        <p class="text-sm opacity-80 mb-4">subscribe to our newsletter</p>
                        <div class="flex gap-2">
                            <input type="email" placeholder="Your Email" class="bg-slate-800 border-none rounded px-3 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500">
                            <button class="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-500 transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr class="border-slate-800 mb-8">

                <div class="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
                    <div>
                        © {{ date('Y') }} {{ config('app.name', 'Laravel') }}. Copyrights are deserved
                    </div>
                    <div class="mt-4 md:mt-0 flex items-center gap-4">
                        <span></span>
                    </div>
                </div>

            </div>
        </footer>

    </body>
</html>