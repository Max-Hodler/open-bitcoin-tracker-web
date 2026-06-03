import type { Dict } from '../ui';

export const it: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Tracker di portfolio bitcoin open source per Android',
      description:
        'Un’app Android open source e attenta alla privacy per monitorare il valore dei tuoi stack di Bitcoin. Niente account, niente analisi, niente telemetria.',
    },
    about: {
      title: 'Informazioni — Open Bitcoin Tracker',
      description:
        'Informazioni su Open Bitcoin Tracker: un’app Android open source e attenta alla privacy per monitorare il valore dei tuoi stack di Bitcoin. Link, fonti dei dati e licenze open source.',
    },
    privacy: {
      title: 'Informativa sulla privacy — Open Bitcoin Tracker',
      description:
        'Informativa sulla privacy di Open Bitcoin Tracker: un’app Android open source e attenta alla privacy per monitorare il valore dei tuoi stack di Bitcoin.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Tracker privato del valore di Bitcoin per Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'Repository GitHub',
    download: 'Scarica',
    langLabel: 'Lingua',
    themeToggleAria: 'Attiva/disattiva modalità scura',
    themeDark: 'Modalità scura',
    themeLight: 'Modalità chiara',
  },

  hero: {
    tagline: 'Tracker di portfolio bitcoin open source per Android.',
    downloadApk: 'Scarica l’APK',
    viewGithub: 'Vedi su GitHub',
    phoneAria: 'Screenshot di Open Bitcoin Tracker — clicca per cambiare tema',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Per chi accumula con calma',
        body: 'Fatto per chi non deve inviare o ricevere ma vuole solo tenere d’occhio quanto valgono i propri stack.',
      },
      {
        title: 'Privacy totale',
        body: 'L’importo di ogni stack lo inserisci a mano e non lascia mai il tuo telefono. A OBT non servono né seed né chiavi.',
      },
      {
        title: 'Veloce e leggero',
        body: 'OBT non si connette a nessun nodo: si avvia in un attimo e quasi non tocca la batteria.',
      },
    ],
  },

  themes: {
    heading: 'Hodl con stile',
    sub: 'Quattro temi che seguono automaticamente la modalità del tuo sistema.',
    regionAria: 'Temi dell’app',
    showAria: 'Mostra lo screenshot di {label}',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Deepsea Blue', 'Salmon Press', 'OLED Black'],
  },

  privacy: {
    heading: 'Privacy totale',
    sub: 'I tuoi dati restano sul tuo telefono.',
    cards: [
      { title: 'Nessun account', body: 'Nessuna registrazione. Installa l’app e inizia a monitorare.' },
      { title: 'Nessun tracciamento', body: 'Zero analisi, niente pubblicità, niente fingerprinting.' },
      { title: 'Solo sul dispositivo', body: 'I tuoi stack restano sul tuo telefono. Non viene caricato nulla.' },
      { title: 'Open source', body: 'Licenza MIT. Don’t trust, verify.' },
    ],
  },

  kao: {
    body: 'Da settembre 2026, Google richiederà a ogni sviluppatore Android di registrarsi e verificare la propria identità, anche per le app installate al di fuori del Play Store. Questo minaccia le app open source come questa.',
    linkText: 'Scopri di più su keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · Licenza MIT',
    appHeader: 'App',
    projectHeader: 'Progetto',
    about: 'Informazioni',
    privacy: 'Informativa sulla privacy',
    github: 'GitHub',
    reportBug: 'Segnala un bug',
  },

  about: {
    h1: 'Informazioni',
    storyHeader: 'Perché ho creato OBT',
    story: [
      'Ho creato Open Bitcoin Tracker perché volevo un modo comodo per tenere d’occhio più stack. Non ho bisogno di fare transazioni, solo di seguirne il valore. La maggior parte dei wallet ne gestisce uno solo o è lenta perché deve collegarsi a un node.',
      'Alla fine l’hanno usata anche la mia famiglia e i miei amici, così l’ho resa pubblica nel caso possa servire ad altri.',
    ],
    dataSourcesHeader: 'Fonti dei dati dell’app Android',
    note: 'L’app non ha alcuna associazione con questi fornitori.',
    licenses: 'Licenza MIT su GitHub',
    madeBy: 'Di Max Hodler',
    forGrandma: 'Per mia nonna 🌼',
    profileHeader: 'Creato da Max Hodler',
    followAria: 'Max Hodler su X',
    primalAria: 'Max Hodler su Primal',
    dataSourceLabels: ['Prezzi attuali', 'Prezzi storici', 'Tassi di cambio storici', 'Mempool e hashrate'],
    currenciesHeader: 'Valute supportate',
    currencyNote: 'Mostra i tuoi stack in una qualsiasi di queste valute fiat.',
    currencyNames: ['Dollaro USA', 'Euro', 'Sterlina britannica', 'Dollaro australiano', 'Dollaro canadese', 'Franco svizzero', 'Yen giapponese'],
    languagesHeader: 'Lingue supportate',
    languageNote: 'L’app e questo sito sono disponibili in queste lingue.',
  },

  policy: {
    h1: 'Informativa sulla privacy',
    lastUpdated: 'Ultimo aggiornamento: 26 maggio 2026',
    intro:
      'Questa informativa descrive quali dati l’applicazione Android Open Bitcoin Tracker («l’app») elabora, archivia e trasmette. L’app è pubblicata come software open source con licenza MIT.',
    sections: [
      {
        heading: '1. Sintesi',
        paras: [
          'L’app non raccoglie dati personali. Non ci sono account utente, analisi, identificatori pubblicitari né telemetria. Tutti i dati che inserisci nell’app restano sul tuo dispositivo.',
        ],
      },
      {
        heading: '2. Dati archiviati sul tuo dispositivo',
        paras: [
          'Le seguenti informazioni sono archiviate localmente nella memoria privata dell’app e non vengono trasmesse a nessun server gestito dallo sviluppatore:',
        ],
        list: [
          'I nomi degli stack e gli importi del saldo in Bitcoin che inserisci.',
          'Le preferenze dell’applicazione e le impostazioni di visualizzazione.',
          'La configurazione facoltativa di sblocco tramite PIN o biometria, conservata nell’Android Keystore.',
        ],
        parasAfter: [
          'Il backup automatico di Android su Google Drive è disattivato per questa applicazione, quindi i dati archiviati localmente non vengono copiati sui server di Google tramite tale meccanismo.',
        ],
      },
      {
        heading: '3. Richieste di rete',
        paras: [
          'Per mostrare i dati di mercato e le informazioni on-chain, l’app effettua richieste ai seguenti servizi di terze parti. A queste richieste non viene allegato alcun identificatore di account, identificatore di dispositivo o parametro di tracciamento.',
        ],
        list: [
          'Kraken — dati di prezzo del BTC in tempo reale (WebSocket).',
          'mempool.space — altezza dei blocchi, commissioni mediane e stime sui blocchi.',
          'Coin Metrics — hashrate storico della rete.',
          'Banca centrale europea — tassi di cambio fiat di riferimento giornalieri.',
        ],
        parasAfter: [
          'Questi fornitori riceveranno necessariamente l’indirizzo IP del dispositivo richiedente. Il loro trattamento di tali informazioni è disciplinato dalle rispettive informative sulla privacy.',
        ],
      },
      {
        heading: '4. Dati non raccolti',
        paras: ['L’app non raccoglie, trasmette né archivia nessuno dei seguenti dati:'],
        list: [
          'Account utente, credenziali di accesso o indirizzi e-mail.',
          'Dati di analisi o di utilizzo del prodotto (ad es. Firebase Analytics, Sentry, Mixpanel).',
          'Identificatori pubblicitari o SDK pubblicitari.',
          'Report di arresto anomalo fuori dal dispositivo.',
        ],
      },
      {
        heading: '5. Autorizzazioni',
        paras: ['L’app richiede le seguenti autorizzazioni Android:'],
        list: [
          'Internet — necessaria per recuperare i dati di mercato e le informazioni della mempool.',
          'Autenticazione biometrica (facoltativa) — quando è attivata, l’app usa l’API BiometricPrompt di Android per sbloccarsi localmente. I dati biometrici sono gestiti dal sistema operativo Android; l’app non li riceve né li archivia mai.',
        ],
        parasAfter: [
          'L’app non richiede l’accesso a contatti, posizione, fotocamera, microfono né all’archiviazione di file generale.',
        ],
      },
      {
        heading: '6. Codice sorgente',
        paras: [
          'Il codice sorgente completo dell’app è disponibile pubblicamente e può essere verificato, compilato o modificato in modo indipendente secondo i termini della licenza MIT.',
        ],
        repoLabel: 'Repository:',
      },
      {
        heading: '7. Minori',
        paras: [
          'L’app non è destinata ai minori. Poiché non raccoglie dati personali, non tratta consapevolmente dati personali di minori di qualsiasi età.',
        ],
      },
      {
        heading: '8. Modifiche a questa informativa',
        paras: [
          'Se questa informativa viene aggiornata, la versione rivista sarà pubblicata su questa pagina e la data «Ultimo aggiornamento» qui sopra sarà modificata per riflettere la data della modifica. Eventuali modifiche sostanziali alle pratiche di trattamento dei dati saranno riportate qui.',
        ],
      },
      {
        heading: '9. Contatti',
        contactBefore: 'Le domande relative a questa informativa possono essere inviate come issue sul repository del progetto:',
        contactAfter: '.',
      },
    ],
  },
};
