<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Auth\SocialLoginController;

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::middleware('auth') -> group(function () {
    Route::get("/tasks", [TaskController::class, "index"])->name("tasks.index");
    Route::get("/tasks/deleted", [TaskController::class, "getDeleted"])->name("tasks.deleted");
    Route::get("/tasks/create", [TaskController::class, "create"])->name("tasks.create");
    Route::post("/tasks/store", [TaskController::class, "store"])->name("tasks.store");
    Route::get("/tasks/{task}", [TaskController::class, "show"])->name("tasks.show");
    Route::get("/tasks/{task}/edit", [TaskController::class, "edit"])->name("tasks.edit");
    Route::put("/tasks/{task}/update", [TaskController::class, "update"])->name("tasks.update");
    Route::get("/tasks/{task}/delete", [TaskController::class, "delete"])->name("tasks.delete");
    Route::delete("/tasks/{task}/destroy", [TaskController::class, "destroy"])->name("tasks.destroy");
    Route::patch("/tasks/{task}/restore", [TaskController::class, "restore"])->name("tasks.restore");
    Route::post("/comment/store", [CommentController::class, "store"])->name("comment.store");
    Route::get("/images/{id}/delete", [TaskController::class, "deleteImage"])->name("tasks.deleteImage");
    Route::delete("/tasks/{task}/force-delete", [TaskController::class, "forceDelete"])->name("tasks.forceDelete");
});

Route::get('/dashboard', function () {
    return redirect()->route('tasks.index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/auth/google/redirect', [SocialLoginController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [SocialLoginController::class, 'handleGoogleCallback']);


Route::get('/auth/github/redirect', [SocialLoginController::class, 'redirectToGithub'])->name('auth.github');
Route::get('/auth/github/callback', [SocialLoginController::class, 'handleGithubCallback']);


require __DIR__.'/auth.php';
