<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - RuangJuang</title>

   @vite(['resources/css/login.css', 'resources/js/login.js'])

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
</head>
<body class="font-poppins min-h-screen flex items-center justify-center p-4 bg-gradient-animated">
    <div class="fixed -top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 animate-pulse-slow"></div>
    <div class="fixed bottom-10 right-10 w-40 h-40 rounded-full bg-accent/10 animate-bounce-slow"></div>
    <div class="fixed top-1/3 left-1/4 w-28 h-28 rounded-full bg-primary/20 animate-float"></div>
    
    <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden border border-white relative z-10">
        <div class="bg-gradient-to-br from-primary-dark to-primary-light text-white md:w-2/5 p-12 relative overflow-hidden">
            <div class="absolute inset-0 bg-pattern opacity-20"></div>
            
            <div class="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-accent/30 animate-pulse-slow"></div>
            <div class="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-accent/30 animate-pulse-slow animation-delay-1000"></div>
            <div class="absolute top-1/2 -right-10 w-28 h-28 rounded-full bg-white/20 animate-float"></div>
            
            <div class="relative z-10 flex flex-col justify-center h-full">
                <div class="mb-6 flex justify-center">
                    <img src="{{ asset('images/logo.jpg') }}" alt="Logo RuangJuang" class="h-20 object-contain animate-float">
                </div>
                <p class="text-xl mb-8 text-white/90 text-center">Tempat terbaik untuk mencapai impian dan tujuan Anda</p>
                
                <div class="space-y-4 mt-8">
                    <div class="flex items-center space-x-2 opacity-90">
                        <div class="w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center animate-pulse">
                            <i class="fas fa-graduation-cap text-white"></i>
                        </div>
                        <p>Platform belajar terintegrasi</p>
                    </div>
                    <div class="flex items-center space-x-2 opacity-90">
                        <div class="w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center animate-pulse animation-delay-500">
                            <i class="fas fa-book-open text-white"></i>
                        </div>
                        <p>Akses materi tanpa batas</p>
                    </div>
                    <div class="flex items-center space-x-2 opacity-90">
                        <div class="w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center animate-pulse animation-delay-1000">
                            <i class="fas fa-users text-white"></i>
                        </div>
                        <p>Komunitas pembelajaran</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="md:w-3/5 p-12 bg-white/80">
            <div class="py-4">
                <h2 class="text-4xl font-bold text-primary-dark mb-2">Selamat Datang</h2>
                <p class="text-gray-600 mb-10">Silakan masuk ke akun RuangJuang Anda</p>
                
                <form class="space-y-6" id="loginForm">
                    <div class="space-y-2">
                        <label class="block text-gray-700 font-medium" for="email">
                            <i class="fas fa-envelope text-primary-light mr-2"></i>Email
                        </label>
                        <div class="relative">
                            <input 
                                id="email" 
                                type="email" 
                                placeholder="Masukkan alamat email" 
                                class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300"
                                required
                            >
                            <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <label class="block text-gray-700 font-medium" for="password">
                                <i class="fas fa-lock text-primary-light mr-2"></i>Password
                            </label>
                            <a href="#" class="text-sm text-primary-light hover:text-primary-dark transition duration-300">Lupa password?</a>
                        </div>
                        <div class="relative">
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="Masukkan kata sandi" 
                                class="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300"
                                required
                            >
                            <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <button type="button" id="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex items-center">
                        <input 
                            id="remember" 
                            type="checkbox" 
                            class="h-4 w-4 text-primary-light focus:ring-primary-light border-gray-300 rounded"
                        >
                        <label for="remember" class="ml-2 block text-sm text-gray-700">Ingat saya</label>
                    </div>
                    
                    <button 
                        type="submit" 
                        class="w-full bg-primary-light hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                        id="loginButton"
                    >
                        <i class="fas fa-sign-in-alt mr-2"></i> Masuk
                    </button>
                </form>
                
                <div class="mt-8 text-center">
                    <p class="text-gray-600">Belum punya akun? 
                        <a href="{{ route('register') }}" class="text-primary-light hover:text-primary-dark font-medium transition duration-300">Daftar sekarang</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>