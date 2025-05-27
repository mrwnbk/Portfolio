<?php

use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\UtilisateurController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// UTILISATEUR
Route::get('/', [UtilisateurController::class, 'index']);
Route::get('/utilisateur/edit/{id}', [UtilisateurController::class, 'edit']);
Route::put('/utilisateur/update/{id}', [UtilisateurController::class, 'update']);

// PROJET
Route::get('/projet/create', [ProjetController::class, 'create']);
Route::post('/projet/post', [ProjetController::class, 'store']);
Route::get('/projet/edit/{id}', [ProjetController::class, 'edit']);
Route::put('/projet/update/{id}', [ProjetController::class, 'update']);
Route::delete('/projet/delete/{id}', [ProjetController::class, 'destroy']);

//Skill
Route::get('/skill/create', [SkillController::class, 'create']);
Route::post('/skill/post', [SkillController::class, 'store']);
Route::get('/skill/edit/{id}', [SkillController::class, 'edit']);
Route::put('/skill/update/{id}', [SkillController::class, 'update']);
Route::delete('/skill/delete/{id}', [SkillController::class, 'destroy']);

//Experience
Route::get('/experience/create', [ExperienceController::class, 'create']);
Route::post('/experience/post', [ExperienceController::class, 'store']);
Route::get('/experience/edit/{id}', [ExperienceController::class, 'edit']);
Route::put('/experience/update/{id}', [ExperienceController::class, 'update']);
Route::delete('/experience/delete/{id}', [ExperienceController::class, 'destroy']);

























Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
