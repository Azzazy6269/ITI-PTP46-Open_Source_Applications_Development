<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>tasksManager - Ultimate Productivity Hub</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800&display=swap" rel="stylesheet" />
    
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#4f46e5',
                        'primary-hover': '#4338ca',
                    },
                    fontFamily: {
                        sans: ['Figtree', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-white text-slate-900 font-sans antialiased selection:bg-primary selection:text-white overflow-x-hidden">

    <div class="absolute top-0 left-0 right-0 h-[600px] overflow-hidden z-0 pointer-events-none">
        <div class="absolute top-[-100px] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px]"></div>
        <div class="absolute top-[150px] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-100/50 blur-[100px]"></div>
    </div>

    <header class="relative z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <x-application-logo class="w-12 h-12 fill-current text-white" />

            <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                <a href="#features" class="hover:text-primary transition">Features</a>
                <a href="#workflow" class="hover:text-primary transition">Workflow</a>
                <a href="#impact" class="hover:text-primary transition">Impact</a>
            </nav>

            <div class="flex items-center gap-4">
                @auth
                    <a href="{{ url('/tasks') }}" class="px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-sm transition">
                        Tasks Dashboard
                    </a>
                @else
                    <a href="{{ route('login') }}" class="text-sm font-bold text-slate-700 hover:text-primary transition">
                        Sign in
                    </a>
                    @if (Route::has('register'))
                        <a href="{{ route('register') }}" class="px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-md shadow-primary/10 transition hover:-translate-y-0.5">
                            Get Started
                        </a>
                    @endif
                @endauth
            </div>
        </div>
    </header>

    <section  class="relative pt-12 pb-20 lg:pt-10 lg:pb-32 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-5 text-center lg:text-left">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        Next-Gen Workspace
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Master Your Day.<br>
                        <span class="text-primary">Empower Your Team.</span>
                    </h1>
                    <p class="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Seamlessly organize projects, track daily sprints, and collaborate in real-time. Designed for high-performing teams who demand precision and absolute clarity.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a href="{{ route('register') }}" class="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 text-center">
                            Start Fast & Free
                        </a>
                        <a href="#features" class="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all text-center">
                            Explore Features
                        </a>
                    </div>
                    
                    <div class="mt-10 pt-8 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
                        <p class="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Instant Onboarding</p>
                        <div class="flex items-center justify-center lg:justify-start gap-3">
                            <a href="{{ route('auth.google') }}" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm text-xs font-bold text-slate-700 hover:text-slate-900 transition">
                                <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-4 h-4" alt="Google">
                                Google
                            </a>
                            <a href="{{ route('auth.github') }}" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-900 hover:bg-black shadow-sm text-xs font-bold text-white transition">
                                <img src="https://www.svgrepo.com/show/512317/github-142.svg" class="w-4 h-4 invert" alt="GitHub">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 relative">
                    <!--div class="absolute -top-4 -left-4 px-4 py-3 bg-white border border-slate-100 rounded-2xl shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-3 z-20 animate-bounce duration-1000">
                        <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div>
                            <p class="text-xs font-bold text-slate-900">Live API Verified</p>
                            <p class="text-[10px] text-slate-500">Secure Token Active</p>
                        </div>
                    </div-->

                    <div class="relative bg-slate-50 border border-slate-200 rounded-2xl shadow-2xl shadow-slate-300/50 overflow-hidden z-10">
                        <!--div class="bg-white px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                            <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                            <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                            <div class="ml-2 bg-slate-50 px-3 py-0.5 rounded-md border border-slate-100 text-[10px] text-slate-400 font-mono">tasksmanager.app/dashboard</div>
                        </div-->

                        <img 
                            src="{{ asset('premium_photo-1661378602224-c9a5e6e52ab6.avif') }}" 
                            alt="App Dashboard Showcase" 
                            class="w-full h-auto min-h-[200px] max-h-[350px] object-cover aspect-[4/3]"
                        >
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="features" class="py-24 bg-slate-50/50 border-y border-slate-100 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-xs font-bold text-primary uppercase tracking-widest mb-3">Engineered for Velocity</h2>
                <p class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Everything you need to ship projects faster</p>
                <p class="mt-4 text-slate-600 font-medium">Robust logic coupled with snappy UI reactivity gives your team the absolute upper hand in workflow oversight.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                
                <div class="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 transition-all hover:shadow-lg">
                    <div class="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-6">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Sanctum Protection</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">State-of-the-art token security allowing highly encrypted API handshake procedures across modern SPAs.</p>
                </div>

                <div class="md:col-span-2 relative rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden group">
                    <div class="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-8 sm:p-10">
                        <span class="text-xs font-bold text-primary bg-white px-3 py-1 rounded-full w-max mb-3 shadow">Task Sync View</span>
                        <h3 class="text-xl sm:text-2xl font-bold text-white">Visual Task Board Lifecycle</h3>
                        <p class="text-sm text-slate-200 mt-2 max-w-lg leading-relaxed">Drag, drop, and complete tasks with reactive visual status feedback updating instantly via secure background threads.</p>
                    </div>
                    <img 
                        src="istockphoto-2196870531-612x612.jpg" 
                        alt="Feature Interactive Showcase" 
                        class="w-full h-full object-cover min-h-[200px] max-h-[350px] group-hover:scale-105 transition duration-500"
                    >
                </div>

                <div class="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 transition-all hover:shadow-lg">
                    <div class="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 mb-6">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Socialite Mapping</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Frictionless unified accounts link seamlessly with Github/Google auto-resolving missing credentials automatically.</p>
                </div>

                <div class="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 transition-all hover:shadow-lg">
                    <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Advanced Rulesets</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Implicit model route bindings automatically filter active users scopes guaranteeing 100% database privacy enforcement.</p>
                </div>

                <div class="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 transition-all hover:shadow-lg">
                    <div class="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 mb-6">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Instant Updates</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">JSON resource maps deliver exactly needed UI fragments skipping unnecessary bloated nested query payload overhead.</p>
                </div>

            </div>
        </div>
    </section>

    <section id="workflow" class="py-24 bg-white relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-6 space-y-8">
                    <div>
                        <span class="text-xs font-bold text-primary uppercase tracking-widest">Process Architecture</span>
                        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight leading-tight">3 Simple steps to operational clarity</h2>
                    </div>

                    <div class="space-y-6">
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center font-bold text-primary">1</div>
                            <div>
                                <h4 class="text-base font-bold text-slate-900">Inject Authentication Tokens</h4>
                                <p class="text-sm text-slate-600 mt-1">Authenticate once via social platforms or direct registration. Tokens map dynamically to targeted headers.</p>
                            </div>
                        </div>
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-500">2</div>
                            <div>
                                <h4 class="text-base font-bold text-slate-900">Define Relationships</h4>
                                <p class="text-sm text-slate-600 mt-1">Tasks automatically inherit assignees and project scopes without writing single backend database lookup lines manually.</p>
                            </div>
                        </div>
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center font-bold text-sky-500">3</div>
                            <div>
                                <h4 class="text-base font-bold text-slate-900">Monitor Output Metrics</h4>
                                <p class="text-sm text-slate-600 mt-1">Fetch highly structured output directly reflecting user task completions and team performance indices.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="lg:col-span-6 space-y-6">
                    <div class="rounded-3xl border border-slate-100 bg-slate-50 p-3 shadow-sm overflow-hidden">
                        <img 
                            src="photo-1576267423429-569309b31e84.avif" 
                            alt="Process Integration View" 
                            class="w-full h-auto object-cover rounded-2xl aspect-[16/10]"
                        >
                    </div>

                    <div class="grid grid-cols-3 gap-4 text-center">
                        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <p class="text-2xl font-black text-primary">99.4%</p>
                            <p class="text-[10px] font-bold text-slate-500 uppercase mt-1">Uptime</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <p class="text-2xl font-black text-indigo-500">< 12ms</p>
                            <p class="text-[10px] font-bold text-slate-500 uppercase mt-1">Speed</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <p class="text-2xl font-black text-slate-900">Zero</p>
                            <p class="text-[10px] font-bold text-slate-500 uppercase mt-1">Friction</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="impact" class="py-24 bg-white relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-indigo-600 to-indigo-800 shadow-2xl shadow-primary/20">
                <div class="grid md:grid-cols-12 items-center">
                    
                    <div class="md:col-span-7 p-10 sm:p-14 text-center sm:text-left z-10">
                        <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                            Ready to supercharge your management?
                        </h2>
                        <p class="mt-4 text-indigo-100 text-sm sm:text-base leading-relaxed opacity-95 max-w-lg">
                            Get transparent workflow oversight with native authentication integrations today. Takes less than a minute to deploy.
                        </p>
                        <div class="mt-8 flex flex-col sm:flex-row items-center gap-4">
                            <a href="{{ route('register') }}" class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl shadow-lg transition text-center text-base">
                                Create Free Account
                            </a>
                            <span class="text-xs text-indigo-200 font-medium">No Credit Card required</span>
                        </div>
                    </div>

                    <div class="md:col-span-5 relative h-full min-h-[250px] hidden md:block bg-indigo-900/40">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" 
                            alt="Team Management Success" 
                            class="absolute inset-0 w-full h-full  object-cover mix-blend-overlay opacity-90 hover:scale-105 transition duration-500"
                        >
                    </div>

                </div>
            </div>

        </div>
    </section>

    <footer  class="border-t border-slate-100 bg-slate-50 py-12 text-sm text-slate-500 relative z-10">
        <div  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white text-xs font-bold shadow-md shadow-primary/20">t</div>
                <span class="text-slate-600 font-semibold text-xs">© {{ date('Y') }} tasksManager. Built with precise engineering.</span>
            </div>

            <div class="flex gap-8 text-xs font-bold text-slate-600">
                <a href="/api/documentation" class="hover:text-primary transition">API Specs</a>
                <a href="#" class="hover:text-primary transition">Privacy</a>
                <a href="#" class="hover:text-primary transition">Terms</a>
            </div>

        </div>
    </footer>

</body>
</html>