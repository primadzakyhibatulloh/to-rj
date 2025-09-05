import gsap from "gsap";

document.querySelectorAll('.animate-pulse').forEach((el, index) => {
    el.style.animationDelay = `${index * 500}ms`;
});


const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}

const togglePasswordConfirmation = document.querySelector('#togglePasswordConfirmation');
const passwordConfirmationInput = document.querySelector('#password_confirmation');

if (togglePasswordConfirmation && passwordConfirmationInput) {
    togglePasswordConfirmation.addEventListener('click', function () {
        const type = passwordConfirmationInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordConfirmationInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}

// Form submission for new password
const resetPasswordForm = document.getElementById('resetPasswordForm');
const submitResetButton = document.getElementById('submitResetButton');

if (resetPasswordForm && submitResetButton) {
    resetPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = passwordInput.value;
        const passwordConfirmation = passwordConfirmationInput.value;

        if (password !== passwordConfirmation) {
            alert("Konfirmasi password tidak cocok!");
            return;
        }

        if (password.length >= 8) { // Contoh validasi sederhana
            // Simulasi proses reset password
            submitResetButton.innerHTML = '<i class="fas fa-spinner animate-spin-slow mr-2"></i> Mereset...';
            submitResetButton.disabled = true;
            
            gsap.to(resetPasswordForm, { y: -10, duration: 0.3, ease: "power1.out" });
            
            setTimeout(() => {
                // Tampilan setelah berhasil reset
                submitResetButton.innerHTML = '<i class="fas fa-check mr-2"></i> Password Berhasil Diubah!';
                submitResetButton.classList.remove('bg-primary-light', 'hover:bg-primary-dark');
                submitResetButton.classList.add('bg-green-500');
                
                gsap.to(submitResetButton, { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1 });
                
                // Opsional: Redirect ke halaman login setelah beberapa detik
                setTimeout(() => {
                    window.location.href = "{{ route('login') }}"; 
                }, 2000);
                
            }, 1500); // Simulasi durasi proses
        } else {
            alert("Password minimal harus 8 karakter!");
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

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.bg-gradient-to-br', { duration: 1, x: -100, opacity: 0, ease: "power2.out" });
    gsap.from('.bg-white', { duration: 1, x: 100, opacity: 0, ease: "power2.out", delay: 0.3 });
});