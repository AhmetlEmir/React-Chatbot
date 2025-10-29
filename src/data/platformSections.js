export const featureHighlights = [
  {
    title: 'Akıllı Metin İşleme',
    description:
      'NLP destekli motorumuz yazılı girdileri bağlamıyla birlikte analiz eder, niyeti çözümler ve en uygun cevabı üretir.',
    icon: '🧠',
  },
  {
    title: 'Komut Odaklı Çalışma',
    description:
      '/özet, /çevir, /rol, /format gibi komutlarla sohbet davranışını ve çıktı biçimini anında değiştirebilirsiniz.',
    icon: '⌨️',
  },
  {
    title: 'Çoklu Rol Profilleri',
    description:
      'Öğretmen, geliştirici, stratejist veya yazar modlarıyla farklı ton ve yapıda yanıtlar alırsınız.',
    icon: '🪄',
  },
  {
    title: 'Dosya Analizi',
    description:
      'PDF, DOCX, TXT gibi belgeleri yükleyerek içeriklerinden soru sorabilir, özet çıkarabilir ve rapor oluşturabilirsiniz.',
    icon: '📄',
  },
  {
    title: 'Gerçek Zamanlı Performans',
    description: 'API tabanlı mimari ile milisaniyeler içinde yanıt üretir, yüksek trafik altında bile stabil kalır.',
    icon: '⚡',
  },
  {
    title: 'Kurumsal Güvenlik',
    description: 'Token tabanlı kimlik doğrulama, şifrelenmiş veri saklama ve audit loglarıyla kurumsal güvenlik standardı.',
    icon: '🔐',
  },
];

export const dashboardSections = [
  {
    title: 'Rol Tabanlı Modlar',
    items: ['Öğretmen modu', 'Geliştirici modu', 'Kreatif yazar', 'Destek temsilcisi'],
    description: 'Her mod farklı bilgi yoğunluğu ve tonla cevap verir, ekip ihtiyaçlarınıza göre değiştirilebilir.',
  },
  {
    title: 'Komut Paleti',
    items: ['/özet', '/çevir', '/rol', '/format', '/kaydet'],
    description: 'Klavye kısayollarıyla komut paletini açarak sohbet akışını kesintisiz yönetebilirsiniz.',
  },
  {
    title: 'Dosya Merkezi',
    items: ['PDF içe aktarma', 'TXT notlar', 'DOCX raporları', 'Görsel referanslar'],
    description: 'Belgelerinizi güvenle saklar, sürümlerini takip eder ve hızlıca sohbetlere eklemenizi sağlar.',
  },
];

export const complianceItems = [
  'Veri şifreleme (AES-256) ve anahtar yönetimi',
  'JWT tabanlı yetkilendirme ve oturum yenileme',
  'Aktivite izleme ve güvenlik günlükleri',
  'KVKK ve GDPR uyumlu veri yaşam döngüsü',
];

export const mediaLibraryCategories = [
  {
    name: 'Marka Görselleri',
    assets: ['Logo setleri', 'UI ekran görüntüleri', 'Sunum şablonları'],
  },
  {
    name: 'Dokümantasyon',
    assets: ['API rehberleri', 'Kullanıcı eğitimleri', 'Güvenlik raporları'],
  },
  {
    name: 'Pazarlama',
    assets: ['Basın kitleri', 'Ürün tanıtım videoları', 'Blog görselleri'],
  },
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '₺0',
    description: 'Bireysel kullanıcılar için temel deneyim.',
    features: ['Aylık 200 mesaj', '1 GB dosya alanı', 'Standart komut seti', 'Topluluk desteği'],
  },
  {
    name: 'Pro',
    price: '₺499',
    description: 'Freelancer ve küçük ekipler için.',
    features: ['Sınırsız mesaj', '50 GB dosya alanı', 'Özel rol profilleri', 'Öncelikli destek'],
  },
  {
    name: 'Team',
    price: '₺1.499',
    description: 'Kurumsal ekipler için gelişmiş paket.',
    features: ['Çoklu üye yönetimi', 'SSO entegrasyonu', 'Denetim logları', 'Kişiselleştirilmiş eğitim'],
  },
];

export const faqItems = [
  {
    question: 'Cortex Technologies nedir?',
    answer:
      'Cortex Technologies, gelişmiş NLP motoru ile gerçek zamanlı sohbet deneyimi sunan, güvenli ve profesyonel bir chatbot platformudur.',
  },
  {
    question: 'Dosya paylaşımı güvenli mi?',
    answer:
      'Tüm dosyalar AES-256 ile şifrelenir ve yalnızca yetkilendirilmiş kullanıcılar tarafından görüntülenebilir.',
  },
  {
    question: 'Planlar arasında geçiş yapabilir miyim?',
    answer: 'Evet, hesabınızın ayarlar bölümünden planınızı yükseltebilir veya düşürebilirsiniz.',
  },
  {
    question: 'Chatbot komutları nasıl çalışır?',
    answer:
      'Sohbet alanına /özet veya /çevir gibi komutları yazdığınızda sistem otomatik olarak ilgili modda cevap üretir.',
  },
];
