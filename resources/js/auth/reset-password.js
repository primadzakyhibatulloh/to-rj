import gsap from "gsap";

document.querySelectorAll('.animate-pulse').forEach((el, index) => {
    el.style.animationDelay = `${index * 500}ms`;
});

// Penyesuaian form submission untuk Lupa Password (OTP)
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const otpButton = document.getElementById('otpButton');

if (forgotPasswordForm && otpButton) {
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        if (email) {
            // Simulasi proses pengiriman OTP
            otpButton.innerHTML = '<i class="fas fa-spinner animate-spin-slow mr-2"></i> Mengirim OTP...';
            otpButton.disabled = true;
            
            gsap.to(forgotPasswordForm, { y: -10, duration: 0.3, ease: "power1.out" });
            
            setTimeout(() => {
                // Tampilan setelah berhasil mengirim OTP
                otpButton.innerHTML = '<i class="fas fa-check mr-2"></i> OTP Terkirim!';
                otpButton.classList.remove('bg-primary-light', 'hover:bg-primary-dark');
                otpButton.classList.add('bg-green-500');
                
                gsap.to(otpButton, { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1 });
                
                // Tambahkan logika selanjutnya di sini, misalnya:
                // - Mengarahkan ke halaman verifikasi OTP
                // - Menampilkan pesan sukses
                
            }, 1500); // Simulasi durasi pengiriman
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