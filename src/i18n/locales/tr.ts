import type { Dict } from '../ui';

export const tr: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Android için açık kaynaklı bitcoin portföy takipçisi',
      description:
        'Bitcoin stack’lerinizin değerini takip etmek için gizliliğe önem veren, açık kaynaklı bir Android uygulaması. Hesap yok, analiz yok, telemetri yok.',
    },
    about: {
      title: 'Hakkında — Open Bitcoin Tracker',
      description:
        'Open Bitcoin Tracker hakkında: Bitcoin stack’lerinizin değerini takip etmek için gizliliğe önem veren, açık kaynaklı bir Android uygulaması. Bağlantılar, veri kaynakları ve açık kaynak lisansları.',
    },
    privacy: {
      title: 'Gizlilik Politikası — Open Bitcoin Tracker',
      description:
        'Open Bitcoin Tracker için gizlilik politikası: Bitcoin stack’lerinizin değerini takip etmek için gizliliğe önem veren, açık kaynaklı bir Android uygulaması.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Android için gizli Bitcoin değer takipçisi',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'GitHub deposu',
    download: 'İndir',
    langLabel: 'Dil',
    themeToggleAria: 'Karanlık modu aç/kapat',
    themeDark: 'Karanlık mod',
    themeLight: 'Aydınlık mod',
  },

  hero: {
    tagline: 'Android için açık kaynaklı bitcoin portföy takipçisi.',
    downloadApk: 'APK indir',
    viewGithub: 'GitHub’da görüntüle',
    phoneAria: 'Open Bitcoin Tracker ekran görüntüsü — temayı değiştirmek için tıklayın',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Acele etmeden biriktirenler için',
        body: 'Gönderip almaya gerek duymayan, yalnızca stack’lerinin değerini takip etmek isteyenler için yapıldı.',
      },
      {
        title: 'Tam gizlilik',
        body: 'Her stack’teki miktarı elle girersin ve asla telefonundan çıkmaz. OBT’nin ne seed’e ne de key’lere ihtiyacı var.',
      },
      {
        title: 'Hızlı ve hafif',
        body: 'OBT hiçbir node’a bağlanmaz: anında açılır ve pili neredeyse hiç yormaz.',
      },
    ],
  },

  themes: {
    heading: 'Tarzınla hodla',
    sub: 'Sisteminin moduna otomatik uyan dört tema.',
    regionAria: 'Uygulama temaları',
    showAria: '{label} ekran görüntüsünü göster',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Salmon Press', 'Deepsea Blue', 'OLED Black'],
  },

  privacy: {
    heading: 'Tam gizlilik',
    sub: 'Verilerin telefonunda kalır.',
    cards: [
      { title: 'Hesap yok', body: 'Kayıt yok. Uygulamayı kur ve takibe başla.' },
      { title: 'Takip yok', body: 'Sıfır analiz, reklam yok, parmak izi yok.' },
      { title: 'Yalnızca cihazda', body: 'Stack’lerin telefonunda kalır. Hiçbir şey yüklenmez.' },
      { title: 'Açık kaynak', body: 'MIT Lisansı. Güvenme, doğrula.' },
    ],
  },

  kao: {
    body: 'Eylül 2026’dan itibaren Google, Play Store dışında kurulan uygulamalar için bile her Android geliştiricisinin kaydolmasını ve kimliğini doğrulamasını zorunlu kılacak. Bu, bunun gibi açık kaynaklı uygulamaları tehdit ediyor.',
    linkText: 'Daha fazla bilgi: keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · MIT Lisansı',
    appHeader: 'Uygulama',
    projectHeader: 'Proje',
    about: 'Hakkında',
    privacy: 'Gizlilik Politikası',
    github: 'GitHub',
    reportBug: 'Hata bildir',
  },

  about: {
    h1: 'Hakkında',
    storyHeader: 'OBT’yi neden yaptım',
    story: [
      'Open Bitcoin Tracker’ı, birden fazla stack’i rahatça takip etmek istediğim için yaptım. İşlem yapmaya ihtiyacım yok, sadece değerlerini izlemek istiyorum. Çoğu wallet ise yalnızca tek bir stack’e izin veriyor ya da bir node’a bağlanmak zorunda olduğu için yavaş kalıyor.',
      'Sonunda ailem ve arkadaşlarım da kullanmaya başladı, ben de başkalarının işine yarar diye herkese açtım.',
    ],
    dataSourcesHeader: 'Android uygulaması için veri kaynakları',
    note: 'Uygulamanın bu sağlayıcılarla hiçbir ilişkisi yoktur.',
    licenses: "GitHub'da MIT lisansı",
    madeBy: 'Max Hodler tarafından',
    forGrandma: 'Babaannem için 🌼',
    profileHeader: 'Max Hodler tarafından oluşturuldu',
    followAria: "X'te Max Hodler",
    primalAria: "Primal'da Max Hodler",
    dataSourceLabels: ['Güncel fiyatlar', 'Geçmiş fiyatlar', 'Geçmiş döviz kurları', 'Mempool ve hashrate'],
    currenciesHeader: 'Desteklenen para birimleri',
    currencyNote: 'Stack’lerini bu fiat para birimlerinin herhangi biriyle gör.',
    currencyNames: ['ABD doları', 'Euro', 'İngiliz sterlini', 'Avustralya doları', 'Kanada doları', 'İsviçre frangı', 'Japon yeni'],
    languagesHeader: 'Desteklenen diller',
    languageNote: 'Uygulama ve bu site bu dillerde mevcut.',
  },

  policy: {
    h1: 'Gizlilik Politikası',
    lastUpdated: 'Son güncelleme: 26 Mayıs 2026',
    intro:
      'Bu politika, Open Bitcoin Tracker Android uygulamasının («uygulama») hangi verileri işlediğini, sakladığını ve ilettiğini açıklar. Uygulama, MIT Lisansı altında açık kaynaklı yazılım olarak yayımlanmaktadır.',
    sections: [
      {
        heading: '1. Özet',
        paras: [
          'Uygulama kişisel veri toplamaz. Kullanıcı hesabı, analiz, reklam tanımlayıcısı ve telemetri yoktur. Uygulamaya girdiğiniz tüm veriler cihazınızda kalır.',
        ],
      },
      {
        heading: '2. Cihazınızda saklanan veriler',
        paras: [
          'Aşağıdaki bilgiler uygulamanın özel depolama alanında yerel olarak saklanır ve geliştirici tarafından işletilen herhangi bir sunucuya iletilmez:',
        ],
        list: [
          'Girdiğiniz stack adları ve Bitcoin bakiye miktarları.',
          'Uygulama tercihleri ve görüntüleme ayarları.',
          'Android Keystore’da tutulan isteğe bağlı PIN veya biyometrik kilit açma yapılandırması.',
        ],
        parasAfter: [
          'Bu uygulama için Android’in Google Drive’a otomatik yedeklemesi devre dışıdır, bu nedenle yerel olarak saklanan veriler bu mekanizmayla Google’ın sunucularına kopyalanmaz.',
        ],
      },
      {
        heading: '3. Ağ istekleri',
        paras: [
          'Piyasa verilerini ve zincir üstü bilgileri göstermek için uygulama aşağıdaki üçüncü taraf hizmetlerine istek gönderir. Bu isteklere hiçbir hesap tanımlayıcısı, cihaz tanımlayıcısı veya takip parametresi eklenmez.',
        ],
        list: [
          'Kraken — gerçek zamanlı BTC fiyat verisi (WebSocket).',
          'mempool.space — blok yüksekliği, medyan ücretler ve blok tahminleri.',
          'Coin Metrics — geçmiş ağ hashrate’i.',
          'Avrupa Merkez Bankası — günlük itibari para referans döviz kurları.',
        ],
        parasAfter: [
          'Bu sağlayıcılar, istekte bulunan cihazın IP adresini zorunlu olarak alır. Bu bilgileri işlemeleri kendi gizlilik politikalarına tabidir.',
        ],
      },
      {
        heading: '4. Toplanmayan veriler',
        paras: ['Uygulama aşağıdakilerden hiçbirini toplamaz, iletmez veya saklamaz:'],
        list: [
          'Kullanıcı hesapları, oturum açma kimlik bilgileri veya e-posta adresleri.',
          'Analiz veya ürün kullanım verileri (ör. Firebase Analytics, Sentry, Mixpanel).',
          'Reklam tanımlayıcıları veya reklam SDK’ları.',
          'Cihaz dışı çökme raporları.',
        ],
      },
      {
        heading: '5. İzinler',
        paras: ['Uygulama aşağıdaki Android izinlerini ister:'],
        list: [
          'İnternet — piyasa verilerini ve mempool bilgilerini almak için gereklidir.',
          'Biyometrik kimlik doğrulama (isteğe bağlı) — etkinleştirildiğinde, uygulama yerel olarak kilidi açmak için Android’in BiometricPrompt API’sini kullanır. Biyometrik veriler Android işletim sistemi tarafından yönetilir; uygulama bunları asla almaz veya saklamaz.',
        ],
        parasAfter: [
          'Uygulama kişilere, konuma, kameraya, mikrofona veya genel dosya depolamasına erişim istemez.',
        ],
      },
      {
        heading: '6. Kaynak kodu',
        paras: [
          'Uygulamanın eksiksiz kaynak kodu herkese açıktır ve MIT Lisansı koşulları altında bağımsız olarak denetlenebilir, derlenebilir veya değiştirilebilir.',
        ],
        repoLabel: 'Depo:',
      },
      {
        heading: '7. Çocuklar',
        paras: [
          'Uygulama çocuklara yönelik değildir. Kişisel veri toplamadığından, herhangi bir yaştaki çocukların kişisel verilerini bilerek işlemez.',
        ],
      },
      {
        heading: '8. Bu politikadaki değişiklikler',
        paras: [
          'Bu politika güncellenirse, gözden geçirilmiş sürüm bu sayfada yayımlanır ve yukarıdaki «Son güncelleme» tarihi değişikliğin tarihini yansıtacak şekilde değiştirilir. Veri işleme uygulamalarında önemli değişiklikler varsa burada belirtilir.',
        ],
      },
      {
        heading: '9. İletişim',
        contactBefore: 'Bu politikayla ilgili sorular, proje deposunda bir issue olarak gönderilebilir:',
        contactAfter: '.',
      },
    ],
  },
};
