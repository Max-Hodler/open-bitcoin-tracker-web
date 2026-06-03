import type { Dict } from '../ui';

export const es: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Trackeador de portfolio de bitcoin de código abierto para Android',
      description:
        'Una app de Android de código abierto y centrada en la privacidad para trackear el valor de tus stacks de Bitcoin. Sin cuentas, sin analíticas, sin telemetría.',
    },
    about: {
      title: 'Acerca de — Open Bitcoin Tracker',
      description:
        'Acerca de Open Bitcoin Tracker: una app de Android de código abierto y centrada en la privacidad para trackear el valor de tus stacks de Bitcoin. Enlaces, fuentes de datos y licencias de código abierto.',
    },
    privacy: {
      title: 'Política de privacidad — Open Bitcoin Tracker',
      description:
        'Política de privacidad de Open Bitcoin Tracker: una app de Android de código abierto y centrada en la privacidad para trackear el valor de tus stacks de Bitcoin.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Trackeador privado del valor de Bitcoin para Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'Repositorio de GitHub',
    download: 'Descargar',
    langLabel: 'Idioma',
    themeToggleAria: 'Cambiar modo oscuro',
    themeDark: 'Modo oscuro',
    themeLight: 'Modo claro',
  },

  hero: {
    tagline: 'Trackeador de portfolio de bitcoin de código abierto para Android.',
    downloadApk: 'Descargar APK',
    viewGithub: 'Ver en GitHub',
    phoneAria: 'Captura de Open Bitcoin Tracker — haz clic para cambiar de tema',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Para quien acumula sin prisa',
        body: 'Hecho para quienes no necesitan generar transacciones pero quieren seguir de cerca lo que valen sus stacks.',
      },
      {
        title: 'Privacidad total',
        body: 'La cantidad en cada stack se mete a mano y nunca sale de tu teléfono. OBT no necesita semillas ni llaves.',
      },
      {
        title: 'Rápido y ligero',
        body: 'OBT no se conecta a ningún nodo: arranca al instante y casi no gasta batería.',
      },
    ],
  },

  themes: {
    heading: 'Holdea con estilo',
    sub: 'Cuatro temas que se adaptan solos al modo de tu sistema.',
    regionAria: 'Temas de la app',
    showAria: 'Mostrar la captura de {label}',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Deepsea Blue', 'Salmon Press', 'OLED Black'],
  },

  privacy: {
    heading: 'Privacidad total',
    sub: 'Tus datos se quedan en tu teléfono.',
    cards: [
      { title: 'Sin cuentas', body: 'Sin registros. Instala la app y empieza a controlar tus stacks.' },
      { title: 'Sin rastreo', body: 'Cero analíticas, cero anuncios, cero fingerprinting.' },
      { title: 'Solo en tu dispositivo', body: 'Tus stacks no salen del teléfono. No se sube nada a ningún sitio.' },
      { title: 'Código abierto', body: 'Licencia MIT. No confíes, verifica.' },
    ],
  },

  kao: {
    body: 'A partir de septiembre de 2026, Google exigirá a todos los desarrolladores de Android que se registren y verifiquen su identidad, incluso para apps instaladas fuera de Play Store. Eso amenaza a las apps de código abierto como esta.',
    linkText: 'Más información en keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · Licencia MIT',
    appHeader: 'App',
    projectHeader: 'Proyecto',
    about: 'Acerca de',
    privacy: 'Política de privacidad',
    github: 'GitHub',
    reportBug: 'Reportar un error',
  },

  about: {
    h1: 'Acerca de',
    storyHeader: 'Por qué creé OBT',
    story: [
      'Hice Open Bitcoin Tracker porque quería una forma cómoda de seguir varios stacks. No necesito hacer transacciones, solo vigilar su valor. La mayoría de las wallets solo te dejan meter uno y van lentas porque tienen que conectarse a un nodo.',
      'Mi familia y mis amigos acabaron usándola también, así que la he publicado por si a más gente le sirve.',
    ],
    dataSourcesHeader: 'Fuentes de datos de la app de Android',
    note: 'La app no tiene ninguna asociación con estos proveedores.',
    licenses: 'Licencia MIT en GitHub',
    madeBy: 'Por Max Hodler',
    forGrandma: 'Para mi abuela 🌼',
    profileHeader: 'Creado por Max Hodler',
    followAria: 'Max Hodler en X',
    primalAria: 'Max Hodler en Primal',
    dataSourceLabels: ['Precios actuales', 'Precios históricos', 'Tipos de cambio históricos', 'Mempool y hashrate'],
    currenciesHeader: 'Monedas disponibles',
    currencyNote: 'Mira tus stacks en cualquiera de estas monedas fiat.',
    // Nombres completos de las monedas; los códigos ISO (USD, EUR, …) quedan
    // literales en la página, emparejados con este array por índice. Orden:
    // USD, EUR, GBP, AUD, CAD, CHF, JPY.
    currencyNames: ['Dólar estadounidense', 'Euro', 'Libra esterlina', 'Dólar australiano', 'Dólar canadiense', 'Franco suizo', 'Yen japonés'],
    languagesHeader: 'Idiomas disponibles',
    languageNote: 'La app y este sitio están disponibles en estos idiomas.',
  },

  policy: {
    h1: 'Política de privacidad',
    lastUpdated: 'Última actualización: 26 de mayo de 2026',
    intro:
      'Esta política describe qué datos procesa, almacena y transmite la aplicación de Android Open Bitcoin Tracker («la app»). La app se publica como software de código abierto bajo la Licencia MIT.',
    sections: [
      {
        heading: '1. Resumen',
        paras: [
          'La app no recopila datos personales. No hay cuentas de usuario, ni analíticas, ni identificadores publicitarios, ni telemetría. Todos los datos que introduces en la app permanecen en tu dispositivo.',
        ],
      },
      {
        heading: '2. Datos almacenados en tu dispositivo',
        paras: [
          'La siguiente información se almacena localmente en el almacenamiento privado de la app y no se transmite a ningún servidor operado por el desarrollador:',
        ],
        list: [
          'Los nombres de stacks y los importes de saldo en Bitcoin que introduces.',
          'Las preferencias de la aplicación y los ajustes de visualización.',
          'La configuración opcional de desbloqueo por PIN o biometría, guardada en el Android Keystore.',
        ],
        parasAfter: [
          'La copia de seguridad automática de Android en Google Drive está desactivada para esta aplicación, por lo que los datos almacenados localmente no se copian a los servidores de Google mediante ese mecanismo.',
        ],
      },
      {
        heading: '3. Solicitudes de red',
        paras: [
          'Para mostrar datos de mercado e información on-chain, la app realiza solicitudes a los siguientes servicios de terceros. A estas solicitudes no se adjunta ningún identificador de cuenta, identificador de dispositivo ni parámetro de rastreo.',
        ],
        list: [
          'Kraken — datos de precio de BTC en tiempo real (WebSocket).',
          'mempool.space — altura de bloque, comisiones medianas y estimaciones de bloque.',
          'Coin Metrics — hashrate histórico de la red.',
          'Banco Central Europeo — tipos de cambio fiat de referencia diarios.',
        ],
        parasAfter: [
          'Estos proveedores recibirán necesariamente la dirección IP del dispositivo solicitante. Su tratamiento de esa información se rige por sus respectivas políticas de privacidad.',
        ],
      },
      {
        heading: '4. Datos no recopilados',
        paras: ['La app no recopila, transmite ni almacena ninguno de los siguientes datos:'],
        list: [
          'Cuentas de usuario, credenciales de inicio de sesión o direcciones de correo electrónico.',
          'Datos de analítica o de uso del producto (p. ej., Firebase Analytics, Sentry, Mixpanel).',
          'Identificadores publicitarios o SDK de publicidad.',
          'Informes de fallos fuera del dispositivo.',
        ],
      },
      {
        heading: '5. Permisos',
        paras: ['La app solicita los siguientes permisos de Android:'],
        list: [
          'Internet — necesario para obtener datos de mercado e información de la mempool.',
          'Autenticación biométrica (opcional) — cuando se activa, la app usa la API BiometricPrompt de Android para desbloquear localmente. Los datos biométricos los gestiona el sistema operativo Android; la app nunca los recibe ni los almacena.',
        ],
        parasAfter: [
          'La app no solicita acceso a los contactos, la ubicación, la cámara, el micrófono ni al almacenamiento de archivos general.',
        ],
      },
      {
        heading: '6. Código fuente',
        paras: [
          'El código fuente completo de la app está disponible públicamente y puede auditarse, compilarse o modificarse de forma independiente bajo los términos de la Licencia MIT.',
        ],
        repoLabel: 'Repositorio:',
      },
      {
        heading: '7. Menores',
        paras: [
          'La app no está dirigida a menores. Dado que no recopila datos personales, no procesa a sabiendas datos personales de menores de ninguna edad.',
        ],
      },
      {
        heading: '8. Cambios en esta política',
        paras: [
          'Si esta política se actualiza, la versión revisada se publicará en esta página y se modificará la fecha de «Última actualización» de arriba para reflejar la fecha del cambio. Los cambios sustanciales en las prácticas de tratamiento de datos, si los hubiera, se reflejarán aquí.',
        ],
      },
      {
        heading: '9. Contacto',
        contactBefore: 'Las preguntas sobre esta política pueden enviarse como una incidencia en el repositorio del proyecto:',
        contactAfter: '.',
      },
    ],
  },
};
