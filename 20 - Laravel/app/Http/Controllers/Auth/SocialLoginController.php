<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;


class SocialLoginController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
            
            $user = User::updateOrCreate([
                'email' => $googleUser->getEmail(),
            ], [
                'name' => $googleUser->getName(),
                'provider_name' => 'google',
                'provider_id' => $googleUser->getId(),
                'avatar' => $googleUser->getAvatar(),
                'password' => $user->password ?? bcrypt(Str::random(16)),
            ]);

            Auth::login($user);

            return redirect()->route('dashboard');

        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'Something went wrong!');
        }
    }

    public function redirectToGithub()
    {
        return Socialite::driver('github')->redirect();
    }

    public function handleGithubCallback()
    {
        try {
            $githubUser = Socialite::driver('github')->user();
            
            $user = User::updateOrCreate([
                'email' => $githubUser->getEmail(),
            ], [
                'name' => $githubUser->getName() ?? $githubUser->getNickname(),
                'provider_name' => 'github',
                'provider_id' => $githubUser->getId(),
                'avatar' => $githubUser->getAvatar(),
                'password' => $user->password ?? bcrypt(\Illuminate\Support\Str::random(16)),
            ]);

            Auth::login($user);

            return redirect()->intended('/dashboard');

        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'GitHub Login failed!');
        }
    }
}
