# Cortex Technologies Chatbot Platformu

Cortex Technologies, profesyonel ekiplerin güvenle kullanabileceği, komut odaklı ve çok rollü bir yapay zekâ chatbot deneyimi sunar. Bu proje; modern, sade ve profesyonel bir React arayüzü, kullanıcı kimlik doğrulama akışları ve sohbet geçmişi yönetimiyle birlikte gelir.

## Başlıca Özellikler

- 🔐 **Kimlik Doğrulama:** Kayıt, giriş ve şifre sıfırlama formları. Kullanıcı verileri `localStorage` üzerinde şifrelenmiş parolalarla saklanır.
- 💬 **Sohbet Motoru:** Rol tabanlı modlar, komut yorumlama (`/özet`, `/çevir`, `/rol`, `/format`) ve yapay yanıt üretimi.
- 🗂️ **Dosya Yönetimi:** PDF, TXT ve DOCX dosyalarını yükleyip medya kütüphanesinde saklayabilir, sohbetlerde bağlam olarak kullanabilirsiniz.
- 📚 **Sohbet Geçmişi:** Kullanıcıya özel olarak saklanan sohbetler, başlık değiştirme, silme ve yeni sohbet başlatma akışları.
- 🧭 **Çoklu Sayfa:** Fiyatlandırma, SSS, İletişim, Gizlilik Politikası ve Kullanım Koşulları gibi statik sayfalar.
- 🧱 **Modern UI:** Cam efekti paneller, gradient butonlar ve koyu temalı düzen.

## Kurulum

> Not: Paketler otomatik olarak kurulmaz; `package.json` dosyasındaki bağımlılıkları manuel olarak veya `npm install` ile indirebilirsiniz.

```bash
npm install
npm run dev
```

### Geliştirme Komutları

- `npm run dev` – Vite geliştirme sunucusunu başlatır.
- `npm run build` – Üretim derlemesi oluşturur.
- `npm run preview` – Derlenen projeyi yerelde önizler.
- `npm run lint` – ESLint kontrollerini çalıştırır.

## Proje Yapısı

```
src/
  components/       # Tekrar kullanılabilir UI bileşenleri
  data/             # Pazarlama ve yasal içerik veri kaynakları
  pages/            # Sayfa düzeyindeki bileşenler (marketing, auth, dashboard)
  store/            # Zustand tabanlı durum yönetimi
  utils/            # Yardımcı fonksiyonlar (şifreleme, komut motoru vb.)
  styles/           # Global stil dosyaları
```

## Güvenlik Notları

- Parola değerleri SHA-256 tabanlı hash ile tuzlanarak saklanır.
- Oturum durumları ve kullanıcı verileri tarayıcı tarafında tutulur. Gerçek bir üretim senaryosunda sunucu taraflı veritabanı ve token doğrulaması kullanılmalıdır.

## Lisans

[MIT](./LICENSE.md)
