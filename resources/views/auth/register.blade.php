<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - RuangJuang</title>

    @vite(['resources/css/auth/register.css', 'resources/js/auth/register.js'])

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="font-poppins min-h-screen flex items-center justify-center p-4 bg-gradient-animated">
    <div class="fixed -top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 animate-pulse-slow"></div>
    <div class="fixed bottom-10 right-10 w-40 h-40 rounded-full bg-accent/10 animate-bounce-slow"></div>
    <div class="fixed top-1/3 left-1/4 w-28 h-28 rounded-full bg-primary/20 animate-float"></div>
    
    <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden border border-white relative z-10">
        <div class="bg-gradient-to-br from-primary-dark to-primary-light text-white md:w-2/5 p-8 relative overflow-hidden flex flex-col justify-center items-center text-center">
            <div class="absolute inset-0 bg-pattern opacity-20"></div>
            
            <div class="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-accent/30 animate-pulse-slow"></div>
            <div class="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/30 animate-pulse-slow animation-delay-1000"></div>
            
            <div class="relative z-10">
                <div class="mb-4">
                   <img src="{{ asset('images/logo.jpg') }}" alt="Logo RuangJuang" class="h-16 mx-auto object-contain animate-float">
                </div>
                <h2 class="text-2xl font-bold mb-2">Selamat Datang di RuangJuang</h2>
                <p class="text-base text-white/90">Bergabunglah dan raih impian Anda bersama kami!</p>
            </div>
        </div>
        
        <div class="md:w-3/5 p-8 bg-white/80">
            <h2 class="text-3xl font-bold text-primary-dark mb-1">Buat Akun</h2>
            <p class="text-sm text-gray-600 mb-6">Daftarkan diri Anda untuk memulai perjalanan belajar</p>
            
            <form class="space-y-4" id="registerForm">
                <div class="space-y-1">
                    <label class="block text-gray-700 font-medium text-sm" for="fullName">
                        <i class="fas fa-user text-primary-light mr-1"></i>Nama Lengkap
                    </label>
                    <div class="relative">
                        <input 
                            id="fullName" 
                            type="text" 
                            placeholder="Nama Lengkap Anda" 
                            class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300 text-sm"
                            required
                        >
                        <i class="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    </div>
                </div>

                <div class="space-y-1">
                    <label class="block text-gray-700 font-medium text-sm" for="email">
                        <i class="fas fa-envelope text-primary-light mr-1"></i>Email
                    </label>
                    <div class="relative">
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Alamat email Anda" 
                            class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300 text-sm"
                            required
                        >
                        <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    </div>
                </div>

                <div class="space-y-1">
                    <label class="block text-gray-700 font-medium text-sm" for="phoneNumber">
                        <i class="fas fa-phone text-primary-light mr-1"></i>Nomor HP
                    </label>
                    <div class="relative">
                        <input 
                            id="phoneNumber" 
                            type="tel" 
                            placeholder="Nomor HP Anda" 
                            class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300 text-sm"
                            required
                        >
                        <i class="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    </div>
                </div>
                
                <div class="space-y-1">
                    <label class="block text-gray-700 font-medium text-sm" for="password">
                        <i class="fas fa-lock text-primary-light mr-1"></i>Password
                    </label>
                    <div class="relative">
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Buat kata sandi" 
                            class="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300 text-sm"
                            required
                        >
                        <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                        <button type="button" id="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>

                <div class="space-y-1">
                    <label class="block text-gray-700 font-medium text-sm" for="confirmPassword">
                        <i class="fas fa-lock text-primary-light mr-1"></i>Konfirmasi Password
                    </label>
                    <div class="relative">
                        <input 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="Ketik ulang kata sandi" 
                            class="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-300 text-sm"
                            required
                        >
                        <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                        <button type="button" id="toggleConfirmPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    class="w-full bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-base mt-6"
                    id="registerButton"
                >
                    <i class="fas fa-user-plus mr-2"></i> Daftar
                </button>
            </form>
            
            <div class="mt-4 text-center">
                <p class="text-gray-600 text-sm">Sudah punya akun? 
                   <a href="{{ route('login') }}" class="text-primary-light hover:text-primary-dark font-medium transition duration-300">Masuk di sini</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>