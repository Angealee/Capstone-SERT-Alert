<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportHistoryController; // Ensure you import the correct controllers
use App\Http\Controllers\SERTManagementController;
use App\Http\Controllers\AdminManagementController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Route::middleware('auth', 'verified')->group(function () {

    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin-management', [AdminManagementController::class, 'index'])->name('admin-management.index');
    Route::get('/sert-management', [SERTManagementController::class, 'index'])->name('sert-management.index');

});

require __DIR__.'/auth.php';

require __DIR__.'/auth.php';
