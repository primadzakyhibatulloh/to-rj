<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login');
})->name('login');

// Rute untuk halaman register
Route::get('/register', function () {
    return view('register');
})->name('register');
