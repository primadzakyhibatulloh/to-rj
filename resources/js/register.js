import gsap from 'gsap';

document.querySelectorAll('.animate-pulse').forEach((el, index) => {
    el.style.animationDelay = `${index * 500}ms`;
});

// Toggle password visibility for both password fields
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

function setupPasswordToggle(toggleButton, passwordInput) {
    if (!toggleButton || !passwordInput) return;
    toggleButton.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}

setupPasswordToggle(togglePassword, password);
setupPasswordToggle(toggleConfirmPassword, confirmPassword);

// Form submission animation
const registerForm = document.getElementById('registerForm');
const registerButton = document.getElementById('registerButton');

if (registerForm && registerButton) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate loading
        registerButton.innerHTML = '<i class="fas fa-spinner animate-spin-slow mr-2"></i> Memproses...';
        registerButton.disabled = true;
        
        // Animate form
        gsap.to(registerForm, {
            y: -10,
            duration: 0.3,
            ease: "power1.out"
        });
        
        setTimeout(() => {
            registerButton.innerHTML = '<i class="fas fa-check mr-2"></i> Pendaftaran Berhasil!';
            registerButton.classList.remove('bg-primary-light', 'hover:bg-primary-dark');
            registerButton.classList.add('bg-green-500');
            
            // Success animation
            gsap.to(registerButton, {
                scale: 1.05,
                duration: 0.5,
                yoyo: true,
                repeat: 1
            });
            
            // Reset after 2 seconds
            setTimeout(() => {
                registerButton.innerHTML = '<i class="fas fa-user-plus mr-2"></i> Daftar';
                registerButton.disabled = false;
                registerButton.classList.remove('bg-green-500');
                registerButton.classList.add('bg-primary-light', 'hover:bg-primary-dark');
                
                gsap.to(registerForm, {
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }, 2000);
        }, 1500);
    });
}

// Input focus animations
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            boxShadow: '0 0 0 3px rgba(88, 167, 33, 0.2)',
            duration: 0.3
        });
    });
    
    input.addEventListener('blur', () => {
        gsap.to(input, {
            boxShadow: 'none',
            duration: 0.3
        });
    });
});

// Animate elements on page load
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.bg-gradient-to-br', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out"
    });
    
    gsap.from('.bg-white', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3
    });
});