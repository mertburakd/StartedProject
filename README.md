# StartedProject

ASP.NET Core MVC + Tailwind CSS web uygulaması

## Kurulum

```bash
# Bağımlılıkları yükle
dotnet restore
cd WebUI && npm install
```

## Çalıştırma

İki terminal aç:

**Terminal 1:**
```bash
dotnet watch run --project WebUI
```

**Terminal 2:**
```bash
cd WebUI
npm run dev
```

Tarayıcıda `https://localhost:5001` adresini aç.

## Build

```bash
dotnet build
cd WebUI && npm run tailwind:build
```