import gsap from "gsap";

document.querySelectorAll('.animate-pulse').forEach((el, index) => {
    el.style.animationDelay = `${index * 500}ms`;
});

// Form submission for OTP verification
const otpVerificationForm = document.getElementById('otpVerificationForm');
const verifyButton = document.getElementById('verifyButton');

if (otpVerificationForm && verifyButton) {
    otpVerificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const otpInput = document.getElementById('otp').value;

        if (otpInput.length === 6) { // Pastikan 6 digit
            // Simulasi proses verifikasi
            verifyButton.innerHTML = '<i class="fas fa-spinner animate-spin-slow mr-2"></i> Memverifikasi...';
            verifyButton.disabled = true;
            
            gsap.to(otpVerificationForm, { y: -10, duration: 0.3, ease: "power1.out" });
            
            setTimeout(() => {
                // Tampilan setelah berhasil verifikasi (simulasi)
                verifyButton.innerHTML = '<i class="fas fa-check mr-2"></i> Kode Diterima!';
                verifyButton.classList.remove('bg-primary-light', 'hover:bg-primary-dark');
                verifyButton.classList.add('bg-green-500');
                
                gsap.to(verifyButton, { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1 });
                
                // Redirect ke halaman password baru
                setTimeout(() => {
                    // Di sini, Anda akan mengarahkan ke halaman buat password baru
                    // dengan token yang relevan
                    // Contoh: window.location.href = "{{ route('password.reset', ['token' => 'token_dari_backend']) }}"; 
                }, 1500); 
                
            }, 1000); // Simulasi durasi verifikasi
        } else {
            alert("Kode OTP harus 6 digit!");
        }
    });
}

// Fitur kirim ulang OTP (simulasi)
const resendOtpLink = document.getElementById('resendOtp');
if (resendOtpLink) {
    resendOtpLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Kode OTP baru akan dikirim ulang. Silakan cek email Anda.");
        // Di sini Anda akan menambahkan logika untuk memanggil API yang mengirimkan OTP baru
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