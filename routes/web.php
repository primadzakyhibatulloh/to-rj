<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('auth.login');
})->name('login');

// Rute untuk halaman register
Route::get('/register', function () {
    return view('auth.register');
})->name('register');


Route::get('/forgot-password', function () {
    return view('auth.reset-password');
})->name('password.request');

Route::get('/verify-otp', function () {
    return view('auth.verify-otp');
})->name('password.otp');


Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->name('password.reset');


Route::get('/new-password-dev', function () {
    return view('auth.new-password');
})->name('new-password.dev');