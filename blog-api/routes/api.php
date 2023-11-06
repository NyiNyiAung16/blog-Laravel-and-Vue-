<?php

use App\Http\Controllers\Admin\EditPostController as AdminEditPostController;
use App\Http\Controllers\Admin\PostIndexController as AdminPostIndexController;
use App\Http\Controllers\Admin\PostPatchController as AdminPostPatchController;
use App\Http\Controllers\Admin\PostStoreController as AdminPostStoreController;
use App\Http\Controllers\PostIndexController;
use App\Http\Controllers\PostShowController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts',PostIndexController::class);
Route::get('/posts/{post:slug}',PostShowController::class);
Route::get('/admin/posts',AdminPostIndexController::class);
Route::post('/admin/store',AdminPostStoreController::class);
Route::get('/admin/posts/{post:slug}/edit',AdminEditPostController::class);
Route::patch('/admin/posts/{post:uuid}/update',AdminPostPatchController::class);
