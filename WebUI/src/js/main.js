// Tailwind CSS'i import et
import '../css/app.css';

// JavaScript kodlarınızı buraya yazabilirsiniz
console.log('Vite + Tailwind CSS hazır!');

// Örnek: DOM yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa yüklendi!');

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