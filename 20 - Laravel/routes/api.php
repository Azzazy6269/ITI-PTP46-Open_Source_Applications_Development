<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Apis\TaskController;
use App\Http\Controllers\Apis\AuthController;
use App\Http\Resources\TaskResource;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post("/login", [AuthController::class, "login"])->name("api.login");
Route::get("/tasks", [TaskController::class, "index"])->middleware('auth:sanctum');
Route::get("/tasks/{id}", [TaskController::class, "show"])->middleware('auth:sanctum');
Route::post("/tasks/store", [TaskController::class, "store"])->middleware('auth:sanctum');
Route::put("/tasks/{id}/update", [TaskController::class, "update"])->middleware('auth:sanctum');
Route::delete("/tasks/{id}/delete", [TaskController::class, "destroy"])->middleware('auth:sanctum');

