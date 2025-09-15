// Tailwind CSS'i import et
import '../css/app.css';

// jQuery'yi import et
import $ from 'jquery';

// SweetAlert2'yi import et
import Swal from 'sweetalert2';

// Global olarak kullanılabilir yap
window.$ = window.jQuery = $;
window.Swal = Swal;

// JavaScript kodlarınızı buraya yazabilirsiniz
console.log('Vite + Tailwind CSS hazır!');

// Örnek: DOM yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa yüklendi!');

    // Ana sayfa için SweetAlert örneği
    if (window.location.pathname === '/' || window.location.pathname === '/Home') {
        console.log('Ana sayfa - 2 saniye sonra SweetAlert gösterilecek');

        setTimeout(function () {
            Swal.fire({
                title: 'Hazır!',
                text: 'Sayfa başarıyla yüklendi ve 2 saniye beklendi.',
                icon: 'success',
                confirmButtonText: 'Tamam'
            });
        }, 2000);
    }

    // Örnek: Button click eventi
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button tıklandı:', this.textContent);

            // Button animasyonu
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 500);
        });
    });

    // Örnek: Form validasyonu
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            console.log('Form submit edildi');
            // Form validasyonu burada yapılabilir
        });
    });
});