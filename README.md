# StartedProject

Bu proje, ASP.NET Core MVC ve Tailwind CSS kullanılarak oluşturulmuş bir web uygulamasıdır.

## Gereksinimler

Projeyi çalıştırmadan önce sisteminizde aşağıdaki araçların kurulu olduğundan emin olun:

*   [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) veya üstü
*   [Node.js](https://nodejs.org/) (LTS sürümü tavsiye edilir)

## Kurulum

1.  Proje dosyalarını indirin veya klonlayın.
2.  Projenin ana dizininde bir terminal açın ve .NET bağımlılıklarını yükleyin:
    ```bash
    dotnet restore
    ```
3.  `WebUI` klasörüne gidin ve Node.js bağımlılıklarını yükleyin:
    ```bash
    cd WebUI
    npm install
    ```

## Geliştirme Ortamını Çalıştırma

Geliştirme yaparken hem .NET projesindeki hem de Tailwind CSS dosyalarındaki değişiklikleri anlık olarak görebilmek için iki ayrı terminal penceresi kullanmanız gerekmektedir.

### 1. Terminal: .NET Projesini Başlatma

Bu terminal, C# ve `.cshtml` dosyalarındaki değişiklikleri izler ve tarayıcının otomatik olarak yenilenmesini sağlar.

Projenin ana dizininde (`/StartedProject`) şu komutu çalıştırın:
```bash
dotnet watch run --project WebUI
```

### 2. Terminal: Tailwind CSS'i İzleme

Bu terminal, CSS ve `tailwind.config.js` dosyalarındaki değişiklikleri izler ve Tailwind CSS çıktı dosyasını anında günceller.

Projenin ana dizininde (`/StartedProject`) şu komutları çalıştırın:
```bash
cd WebUI
npm run watch
```

Bu iki komut çalıştıktan sonra, tarayıcınızda açılan adreste (`http://localhost:xxxx`) projenizi görüntüleyebilir ve geliştirmeye başlayabilirsiniz. Yaptığınız tüm değişiklikler anında tarayıcıya yansıyacaktır.

## Projeyi Normal Çalıştırma

Projeyi sadece görmek için çalıştırmak isterseniz, `build` komutu Tailwind CSS dosyalarını otomatik olarak derleyecektir. Tek bir komut yeterlidir:

```bash
dotnet run --project WebUI
```
