import type { Dict } from '../ui';

export const de: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Open-Source-Bitcoin-Portfolio-Tracker für Android',
      description:
        'Eine datenschutzfreundliche, quelloffene Android-App, um den Wert deiner Bitcoin-Stacks zu tracken. Keine Konten, keine Analytik, keine Telemetrie.',
    },
    about: {
      title: 'Über — Open Bitcoin Tracker',
      description:
        'Über Open Bitcoin Tracker – eine datenschutzfreundliche, quelloffene Android-App, um den Wert deiner Bitcoin-Stacks zu tracken. Links, Datenquellen und Open-Source-Lizenzen.',
    },
    privacy: {
      title: 'Datenschutzerklärung — Open Bitcoin Tracker',
      description:
        'Datenschutzerklärung für Open Bitcoin Tracker – eine datenschutzfreundliche, quelloffene Android-App, um den Wert deiner Bitcoin-Stacks zu tracken.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Privater Bitcoin-Werttracker für Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'GitHub-Repository',
    download: 'Herunterladen',
    langLabel: 'Sprache',
    themeToggleAria: 'Dunkelmodus umschalten',
    themeDark: 'Dunkelmodus',
    themeLight: 'Hellmodus',
  },

  hero: {
    tagline: 'Open-Source-Bitcoin-Portfolio-Tracker für Android.',
    downloadApk: 'APK herunterladen',
    viewGithub: 'Auf GitHub ansehen',
    phoneAria: 'Screenshot von Open Bitcoin Tracker – zum Wechseln des Themes klicken',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Für alle, die in Ruhe stacken',
        body: 'Gemacht für alle, die nicht senden oder empfangen wollen, sondern einfach den Wert ihrer Stacks im Blick behalten.',
      },
      {
        title: 'Volle Privatsphäre',
        body: 'Den Betrag jedes Stacks trägst du von Hand ein, und er verlässt nie dein Handy. OBT braucht weder Seed noch Keys.',
      },
      {
        title: 'Schnell und schlank',
        body: 'OBT verbindet sich mit keiner Node – startet sofort und schont den Akku.',
      },
    ],
  },

  themes: {
    heading: 'Hodln mit Stil',
    sub: 'Vier Themes, die automatisch dem Modus deines Systems folgen.',
    regionAria: 'App-Themes',
    showAria: 'Screenshot von {label} anzeigen',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Deepsea Blue', 'Salmon Press', 'OLED Black'],
  },

  privacy: {
    heading: 'Volle Privatsphäre',
    sub: 'Deine Daten bleiben auf deinem Handy.',
    cards: [
      { title: 'Keine Konten', body: 'Keine Registrierung. App installieren und loslegen.' },
      { title: 'Kein Tracking', body: 'Null Analytics, keine Werbung, kein Fingerprinting.' },
      { title: 'Nur auf dem Gerät', body: 'Deine Stacks bleiben auf deinem Handy. Hochgeladen wird nichts.' },
      { title: 'Open Source', body: 'MIT-Lizenz. Don’t trust, verify.' },
    ],
  },

  kao: {
    body: 'Ab September 2026 verlangt Google von jedem Android-Entwickler, sich zu registrieren und seine Identität zu verifizieren – sogar für Apps, die außerhalb des Play Store installiert werden. Das bedroht Open-Source-Apps wie diese.',
    linkText: 'Mehr erfahren auf keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · MIT-Lizenz',
    appHeader: 'App',
    projectHeader: 'Projekt',
    about: 'Über',
    privacy: 'Datenschutzerklärung',
    github: 'GitHub',
    reportBug: 'Fehler melden',
  },

  about: {
    h1: 'Über',
    storyHeader: 'Warum ich OBT erstellt habe',
    story: [
      'Ich habe Open Bitcoin Tracker gebaut, weil ich mehrere Stacks bequem im Blick behalten wollte. Ich muss keine Transaktionen machen, nur ihren Wert verfolgen. Die meisten Wallets lassen aber nur einen Stack zu oder sind langsam, weil sie sich mit einem Node verbinden.',
      'Meine Familie und Freunde haben am Ende auch angefangen, sie zu nutzen, also habe ich sie veröffentlicht – vielleicht ist sie ja für mehr Leute nützlich.',
    ],
    dataSourcesHeader: 'Datenquellen der Android-App',
    note: 'Die App steht in keiner Verbindung zu diesen Anbietern.',
    licenses: 'MIT-Lizenz auf GitHub',
    madeBy: 'Von Max Hodler',
    forGrandma: 'Für meine Oma 🌼',
    profileHeader: 'Erstellt von Max Hodler',
    followAria: 'Max Hodler auf X',
    primalAria: 'Max Hodler auf Primal',
    dataSourceLabels: ['Aktuelle Preise', 'Historische Preise', 'Historische Wechselkurse', 'Mempool und Hashrate'],
    currenciesHeader: 'Unterstützte Währungen',
    currencyNote: 'Zeig deine Stacks in jeder dieser Fiat-Währungen an.',
    currencyNames: ['US-Dollar', 'Euro', 'Britisches Pfund', 'Australischer Dollar', 'Kanadischer Dollar', 'Schweizer Franken', 'Japanischer Yen'],
    languagesHeader: 'Unterstützte Sprachen',
    languageNote: 'Die App und diese Seite gibt es in diesen Sprachen.',
  },

  policy: {
    h1: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: 26. Mai 2026',
    intro:
      'Diese Erklärung beschreibt, welche Daten die Android-Anwendung Open Bitcoin Tracker („die App“) verarbeitet, speichert und übermittelt. Die App wird als quelloffene Software unter der MIT-Lizenz veröffentlicht.',
    sections: [
      {
        heading: '1. Zusammenfassung',
        paras: [
          'Die App erhebt keine personenbezogenen Daten. Es gibt keine Benutzerkonten, keine Analytik, keine Werbe-IDs und keine Telemetrie. Alle Daten, die du in der App eingibst, bleiben auf deinem Gerät.',
        ],
      },
      {
        heading: '2. Auf deinem Gerät gespeicherte Daten',
        paras: [
          'Die folgenden Informationen werden lokal im privaten Speicher der App gespeichert und nicht an einen vom Entwickler betriebenen Server übermittelt:',
        ],
        list: [
          'Stack-Namen und Bitcoin-Guthabenbeträge, die du eingibst.',
          'Anwendungseinstellungen und Anzeigeeinstellungen.',
          'Optionale PIN- oder biometrische Entsperrkonfiguration, im Android-Keystore gespeichert.',
        ],
        parasAfter: [
          'Das automatische Android-Backup zu Google Drive ist für diese Anwendung deaktiviert, sodass lokal gespeicherte Daten über diesen Mechanismus nicht auf die Server von Google kopiert werden.',
        ],
      },
      {
        heading: '3. Netzwerkanfragen',
        paras: [
          'Um Marktdaten und On-Chain-Informationen anzuzeigen, stellt die App Anfragen an die folgenden Drittanbieterdienste. Diesen Anfragen wird keine Konto-ID, Geräte-ID oder Tracking-Parameter beigefügt.',
        ],
        list: [
          'Kraken — BTC-Preisdaten in Echtzeit (WebSocket).',
          'mempool.space — Blockhöhe, mittlere Gebühren und Blockschätzungen.',
          'Coin Metrics — historische Netzwerk-Hashrate.',
          'Europäische Zentralbank — tägliche Fiat-Referenzwechselkurse.',
        ],
        parasAfter: [
          'Diese Anbieter erhalten notwendigerweise die IP-Adresse des anfragenden Geräts. Die Verarbeitung dieser Informationen unterliegt ihren jeweiligen Datenschutzerklärungen.',
        ],
      },
      {
        heading: '4. Nicht erhobene Daten',
        paras: ['Die App erhebt, übermittelt oder speichert keine der folgenden Daten:'],
        list: [
          'Benutzerkonten, Anmeldedaten oder E-Mail-Adressen.',
          'Analyse- oder Nutzungsdaten (z. B. Firebase Analytics, Sentry, Mixpanel).',
          'Werbe-IDs oder Werbe-SDKs.',
          'Absturzberichte außerhalb des Geräts.',
        ],
      },
      {
        heading: '5. Berechtigungen',
        paras: ['Die App fordert die folgenden Android-Berechtigungen an:'],
        list: [
          'Internet — erforderlich, um Marktdaten und Mempool-Informationen abzurufen.',
          'Biometrische Authentifizierung (optional) — wenn aktiviert, nutzt die App die BiometricPrompt-API von Android zur lokalen Entsperrung. Biometrische Daten werden vom Android-Betriebssystem verwaltet; die App erhält oder speichert sie nie.',
        ],
        parasAfter: [
          'Die App fordert keinen Zugriff auf Kontakte, Standort, Kamera, Mikrofon oder den allgemeinen Dateispeicher an.',
        ],
      },
      {
        heading: '6. Quellcode',
        paras: [
          'Der vollständige Quellcode der App ist öffentlich verfügbar und kann unter den Bedingungen der MIT-Lizenz unabhängig geprüft, gebaut oder verändert werden.',
        ],
        repoLabel: 'Repository:',
      },
      {
        heading: '7. Kinder',
        paras: [
          'Die App richtet sich nicht an Kinder. Da sie keine personenbezogenen Daten erhebt, verarbeitet sie wissentlich keine personenbezogenen Daten von Kindern jeglichen Alters.',
        ],
      },
      {
        heading: '8. Änderungen dieser Erklärung',
        paras: [
          'Wird diese Erklärung aktualisiert, wird die überarbeitete Fassung auf dieser Seite veröffentlicht und das oben stehende Datum „Zuletzt aktualisiert“ entsprechend dem Datum der Änderung angepasst. Wesentliche Änderungen an den Datenverarbeitungspraktiken werden, falls vorhanden, hier dargestellt.',
        ],
      },
      {
        heading: '9. Kontakt',
        contactBefore: 'Fragen zu dieser Erklärung können als Issue im Projekt-Repository eingereicht werden:',
        contactAfter: '.',
      },
    ],
  },
};
