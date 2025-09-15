# StartedProject

Bu proje, ASP.NET Core MVC ve Tailwind CSS kullanılarak oluşturulmuş modern bir web uygulamasıdır.

## 🚀 Teknolojiler

- **Backend**: ASP.NET Core 9.0 MVC
- **Frontend**: Tailwind CSS + Vite
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **Language**: C# (.NET 9.0)

## 📋 Gereksinimler

Projeyi çalıştırmadan önce sisteminizde aşağıdaki araçların kurulu olduğundan emin olun:

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) veya üstü
- [Node.js](https://nodejs.org/) (LTS sürümü tavsiye edilir)

## 🛠️ Kurulum

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd StartedProject
```

### 2. .NET Bağımlılıklarını Yükleyin
```bash
dotnet restore
```

### 3. Node.js Bağımlılıklarını Yükleyin
```bash
cd WebUI
npm install
cd ..
```

## 🏃‍♂️ Geliştirme Ortamını Çalıştırma

Geliştirme yaparken hem .NET projesindeki hem de Tailwind CSS dosyalarındaki değişiklikleri anlık olarak görebilmek için **iki ayrı terminal** penceresi kullanmanız gerekmektedir.

### Terminal 1: .NET Hot Reload
Bu terminal, C# ve `.cshtml` dosyalarındaki değişiklikleri izler ve tarayıcının otomatik olarak yenilenmesini sağlar.

```bash
dotnet watch run --project WebUI
```

### Terminal 2: Tailwind CSS Watch
Bu terminal, CSS dosyalarındaki değişiklikleri izler ve Tailwind CSS çıktı dosyasını anında günceller.

```bash
cd WebUI
npm run tailwind:watch
```

### 🌐 Uygulamaya Erişim
İki komut da çalıştıktan sonra, tarayıcınızda `https://localhost:5001` veya `http://localhost:5000` adresinde uygulamanızı görüntüleyebilirsiniz.

## 🏗️ Production Build

### Sadece Çalıştırmak İçin
```bash
dotnet run --project WebUI
```

### Production Build
```bash
# .NET uygulamasını build et
dotnet build --configuration Release

# Tailwind CSS'i build et
cd WebUI
npm run tailwind:build
```

## 📁 Proje Yapısı

```
StartedProject/
├── StartedProject.sln          # Visual Studio solution dosyası
├── README.md                   # Bu dosya
├── CLAUDE.md                   # Claude Code için yapılandırma
└── WebUI/                      # Ana web projesi
    ├── WebUI.csproj           # Proje dosyası
    ├── Program.cs             # Uygulama başlangıç noktası
    ├── package.json           # Node.js bağımlılıkları
    ├── tailwind.config.js     # Tailwind yapılandırması
    ├── vite.config.js         # Vite yapılandırması
    ├── Controllers/           # MVC Controllers
    ├── Views/                 # Razor Views
    ├── Models/                # View Models
    └── wwwroot/               # Statik dosyalar
        ├── css/
        │   ├── site.css       # Tailwind kaynak dosyası
        │   └── dist/
        │       └── site.css   # Derlenmiş CSS
        ├── js/
        ├── lib/               # Bootstrap, jQuery vb.
        └── dist/              # Vite build çıktıları
```

## 🔧 Kullanılabilir Komutlar

### .NET Komutları
```bash
# Projeyi build et
dotnet build

# Uygulamayı çalıştır
dotnet run --project WebUI

# Hot reload ile çalıştır
dotnet watch run --project WebUI

# Release build
dotnet build --configuration Release

# Test çalıştır (test projeleri varsa)
dotnet test

# NuGet paketlerini restore et
dotnet restore

# Build artifacts'i temizle
dotnet clean
```

### Frontend Komutları
```bash
cd WebUI

# Tailwind CSS build
npm run tailwind:build

# Tailwind CSS watch mode
npm run tailwind:watch

# Vite development server
npm run dev

# Vite build
npm run build

# Build preview
npm run preview
```

## 🎨 Tailwind CSS Kullanımı

Tailwind CSS, `Views/**/*.cshtml` ve `wwwroot/**/*.html` dosyalarını tarar. Stil sınıflarınızı doğrudan HTML elementlerinizde kullanabilirsiniz:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
    Örnek bir div elementi
</div>
```

## 🚦 Routing

Uygulama iki ana route pattern'i kullanır:

1. **Page Route**: `/{slug}` - PageController'a yönlendirir
2. **Default Route**: `/{controller=Home}/{action=Index}/{id?}` - Standart MVC pattern

## 📝 Geliştirme Notları

- Proje nullable reference types kullanır
- Implicit usings aktif
- Bootstrap ve jQuery wwwroot/lib klasöründe mevcut
- Error handling standart Error action ve view ile yapılır
- Vite proxy yapılandırması localhost:5001 için ayarlanmış

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

[MIT](LICENSE) lisansı altında lisanslanmıştır.