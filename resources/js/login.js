import gsap from "gsap";

// Menambahkan delay untuk animasi
document.querySelectorAll('.animate-pulse').forEach((el, index) => {
    el.style.animationDelay = `${index * 500}ms`;
});

// Toggle password visibility
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

if (togglePassword && password) {
    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}

// Form submission animation
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

if (loginForm && loginButton) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            // Simulate loading
            loginButton.innerHTML = '<i class="fas fa-spinner animate-spin-slow mr-2"></i> Memproses...';
            loginButton.disabled = true;
            
            // Animate form
            gsap.to(loginForm, { y: -10, duration: 0.3, ease: "power1.out" });
            
            setTimeout(() => {
                loginButton.innerHTML = '<i class="fas fa-check mr-2"></i> Login Berhasil!';
                loginButton.classList.remove('bg-primary-light', 'hover:bg-primary-dark');
                loginButton.classList.add('bg-green-500');
                
                gsap.to(loginButton, { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1 });
                
                setTimeout(() => {
                    loginButton.innerHTML = '<i class="fas fa-sign-in-alt mr-2"></i> Masuk';
                    loginButton.disabled = false;
                    loginButton.classList.remove('bg-green-500');
                    loginButton.classList.add('bg-primary-light', 'hover:bg-primary-dark');
                    
                    gsap.to(loginForm, { y: 0, duration: 0.3, ease: "power1.out" });
                }, 2000);
            }, 1500);
        }
    });
}

// Input focus animations
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, { boxShadow: '0 0 0 3px rgba(88, 167, 33, 0.2)', duration: 0.3 });
    });
    
    input.addEventListener('blur', () => {
        gsap.to(input, { boxShadow: 'none', duration: 0.3 });
    });
});

// Animate elements on page load
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.bg-gradient-to-br', { duration: 1, x: -100, opacity: 0, ease: "power2.out" });
    gsap.from('.bg-white', { duration: 1, x: 100, opacity: 0, ease: "power2.out", delay: 0.3 });
});
