<div class="flex items-center gap-3">
<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" {{ $attributes }}>
    <!-- Gradient Background -->
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6366f1" />
            <stop offset="100%" stop-color="#4f46e5" />
        </linearGradient>
    </defs>

    <!-- Main Rounded Square -->
    <rect x="20" y="20" width="280" height="280" rx="70" fill="url(#bg)"/>

    <!-- Clipboard Shape -->
    <rect x="90" y="70" width="140" height="180" rx="20" fill="white" opacity="0.97"/>

    <!-- Clipboard Top -->
    <rect x="125" y="50" width="70" height="35" rx="12" fill="#e0e7ff"/>

    <!-- Task Checkboxes -->
    <rect x="115" y="115" width="18" height="18" rx="4" fill="#4f46e5"/>
    <path d="M119 124L124 129L132 119" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

    <rect x="115" y="155" width="18" height="18" rx="4" fill="#4f46e5"/>
    <path d="M119 164L124 169L132 159" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

    <rect x="115" y="195" width="18" height="18" rx="4" fill="#4f46e5" opacity="0.5"/>

    <!-- Task Lines -->
    <rect x="145" y="118" width="50" height="10" rx="5" fill="#6366f1"/>
    <rect x="145" y="158" width="40" height="10" rx="5" fill="#6366f1"/>
    <rect x="145" y="198" width="60" height="10" rx="5" fill="#a5b4fc"/>

    <!-- Floating Accent -->
    <circle cx="235" cy="95" r="12" fill="#c7d2fe" opacity="0.9"/>
</svg>
<span class="text-xl font-extrabold tracking-tight text-slate-900">tasks<span class="text-primary">Manager</span></span>

</div>