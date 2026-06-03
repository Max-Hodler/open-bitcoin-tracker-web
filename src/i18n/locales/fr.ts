import type { Dict } from '../ui';

export const fr: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Tracker de portfolio bitcoin open source pour Android',
      description:
        'Une application Android open source et respectueuse de la vie privée pour tracker la valeur de tes stacks de Bitcoin. Pas de comptes, pas d’analyses, pas de télémétrie.',
    },
    about: {
      title: 'À propos — Open Bitcoin Tracker',
      description:
        'À propos d’Open Bitcoin Tracker : une application Android open source et respectueuse de la vie privée pour tracker la valeur de tes stacks de Bitcoin. Liens, sources de données et licences open source.',
    },
    privacy: {
      title: 'Politique de confidentialité — Open Bitcoin Tracker',
      description:
        'Politique de confidentialité d’Open Bitcoin Tracker : une application Android open source et respectueuse de la vie privée pour tracker la valeur de tes stacks de Bitcoin.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Tracker privé de la valeur du Bitcoin pour Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'Dépôt GitHub',
    download: 'Télécharger',
    langLabel: 'Langue',
    themeToggleAria: 'Basculer le mode sombre',
    themeDark: 'Mode sombre',
    themeLight: 'Mode clair',
  },

  hero: {
    tagline: 'Tracker de portfolio bitcoin open source pour Android.',
    downloadApk: 'Télécharger l’APK',
    viewGithub: 'Voir sur GitHub',
    phoneAria: 'Capture d’écran d’Open Bitcoin Tracker — clique pour changer de thème',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Pour celles et ceux qui stackent tranquille',
        body: 'Pensé pour celles et ceux qui n’ont pas besoin d’envoyer ni de recevoir, juste de garder un œil sur la valeur de leurs stacks.',
      },
      {
        title: 'Confidentialité totale',
        body: 'Le montant de chaque stack se saisit à la main, et il ne quitte jamais ton téléphone. OBT n’a besoin ni de seed ni de clés.',
      },
      {
        title: 'Rapide et léger',
        body: 'OBT ne se connecte à aucun nœud : il démarre vite et n’entame quasiment pas la batterie.',
      },
    ],
  },

  themes: {
    heading: 'Hodler avec style',
    sub: 'Quatre thèmes qui s’adaptent tout seuls au mode de ton système.',
    regionAria: 'Thèmes de l’application',
    showAria: 'Afficher la capture d’écran {label}',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Deepsea Blue', 'Salmon Press', 'OLED Black'],
  },

  privacy: {
    heading: 'Confidentialité totale',
    sub: 'Tes données restent sur ton téléphone.',
    cards: [
      { title: 'Aucun compte', body: 'Aucune inscription. Installe l’app et c’est parti.' },
      { title: 'Aucun pistage', body: 'Zéro analyse, aucune pub, aucun fingerprinting.' },
      { title: 'Uniquement sur l’appareil', body: 'Tes stacks restent sur ton téléphone. Rien n’est envoyé.' },
      { title: 'Open source', body: 'Licence MIT. Don’t trust, verify.' },
    ],
  },

  kao: {
    body: 'À partir de septembre 2026, Google exigera de chaque développeur Android qu’il s’enregistre et vérifie son identité, même pour les applications installées en dehors du Play Store. Cela menace les applications open source comme celle-ci.',
    linkText: 'En savoir plus sur keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · Licence MIT',
    appHeader: 'App',
    projectHeader: 'Projet',
    about: 'À propos',
    privacy: 'Politique de confidentialité',
    github: 'GitHub',
    reportBug: 'Signaler un bug',
  },

  about: {
    h1: 'À propos',
    storyHeader: 'Pourquoi j’ai créé OBT',
    story: [
      'J’ai créé Open Bitcoin Tracker parce que je voulais un moyen pratique de suivre plusieurs stacks. Je n’ai pas besoin de faire de transactions, juste de garder un œil sur leur valeur. La plupart des wallets n’en gèrent qu’un seul ou rament parce qu’elles doivent passer par un node.',
      'Ma famille et mes amis ont fini par l’utiliser aussi, alors je l’ai rendue publique au cas où elle servirait à d’autres.',
    ],
    dataSourcesHeader: 'Sources de données de l’application Android',
    note: 'L’application n’a aucune association avec ces fournisseurs.',
    licenses: 'Licence MIT sur GitHub',
    madeBy: 'Par Max Hodler',
    forGrandma: 'Pour ma grand-mère 🌼',
    profileHeader: 'Créé par Max Hodler',
    followAria: 'Max Hodler sur X',
    primalAria: 'Max Hodler sur Primal',
    dataSourceLabels: ['Prix actuels', 'Prix historiques', 'Taux de change historiques', 'Mempool et hashrate'],
    currenciesHeader: 'Devises prises en charge',
    currencyNote: 'Affiche tes stacks dans l’une de ces devises fiat.',
    currencyNames: ['Dollar américain', 'Euro', 'Livre sterling', 'Dollar australien', 'Dollar canadien', 'Franc suisse', 'Yen japonais'],
    languagesHeader: 'Langues prises en charge',
    languageNote: 'L’application et ce site sont disponibles dans ces langues.',
  },

  policy: {
    h1: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : 26 mai 2026',
    intro:
      'Cette politique décrit quelles données l’application Android Open Bitcoin Tracker (« l’app ») traite, stocke et transmet. L’app est publiée en tant que logiciel open source sous licence MIT.',
    sections: [
      {
        heading: '1. Résumé',
        paras: [
          'L’app ne collecte aucune donnée personnelle. Il n’y a ni comptes utilisateur, ni analyses, ni identifiants publicitaires, ni télémétrie. Toutes les données que tu saisis dans l’app restent sur ton appareil.',
        ],
      },
      {
        heading: '2. Données stockées sur ton appareil',
        paras: [
          'Les informations suivantes sont stockées localement dans le stockage privé de l’app et ne sont transmises à aucun serveur exploité par le développeur :',
        ],
        list: [
          'Les noms de stacks et les montants de solde en Bitcoin que tu saisis.',
          'Les préférences de l’application et les paramètres d’affichage.',
          'La configuration facultative de déverrouillage par code PIN ou biométrie, conservée dans l’Android Keystore.',
        ],
        parasAfter: [
          'La sauvegarde automatique d’Android vers Google Drive est désactivée pour cette application, de sorte que les données stockées localement ne sont pas copiées vers les serveurs de Google par ce mécanisme.',
        ],
      },
      {
        heading: '3. Requêtes réseau',
        paras: [
          'Pour afficher les données de marché et les informations on-chain, l’app envoie des requêtes aux services tiers suivants. Aucun identifiant de compte, identifiant d’appareil ou paramètre de pistage n’est joint à ces requêtes.',
        ],
        list: [
          'Kraken — données de prix du BTC en temps réel (WebSocket).',
          'mempool.space — hauteur de bloc, frais médians et estimations de bloc.',
          'Coin Metrics — hashrate historique du réseau.',
          'Banque centrale européenne — taux de change fiat de référence quotidiens.',
        ],
        parasAfter: [
          'Ces fournisseurs recevront nécessairement l’adresse IP de l’appareil émetteur. Leur traitement de ces informations est régi par leurs politiques de confidentialité respectives.',
        ],
      },
      {
        heading: '4. Données non collectées',
        paras: ['L’app ne collecte, ne transmet ni ne stocke aucune des données suivantes :'],
        list: [
          'Comptes utilisateur, identifiants de connexion ou adresses e-mail.',
          'Données d’analyse ou d’usage du produit (par ex. Firebase Analytics, Sentry, Mixpanel).',
          'Identifiants publicitaires ou SDK publicitaires.',
          'Rapports de plantage hors de l’appareil.',
        ],
      },
      {
        heading: '5. Autorisations',
        paras: ['L’app demande les autorisations Android suivantes :'],
        list: [
          'Internet — nécessaire pour récupérer les données de marché et les informations de la mempool.',
          'Authentification biométrique (facultative) — lorsqu’elle est activée, l’app utilise l’API BiometricPrompt d’Android pour se déverrouiller localement. Les données biométriques sont gérées par le système d’exploitation Android ; l’app ne les reçoit ni ne les stocke jamais.',
        ],
        parasAfter: [
          'L’app ne demande pas l’accès aux contacts, à la localisation, à l’appareil photo, au microphone ni au stockage de fichiers général.',
        ],
      },
      {
        heading: '6. Code source',
        paras: [
          'Le code source complet de l’app est accessible publiquement et peut être audité, compilé ou modifié de manière indépendante selon les termes de la licence MIT.',
        ],
        repoLabel: 'Dépôt :',
      },
      {
        heading: '7. Enfants',
        paras: [
          'L’app ne s’adresse pas aux enfants. Comme elle ne collecte aucune donnée personnelle, elle ne traite sciemment aucune donnée personnelle d’enfants, quel que soit leur âge.',
        ],
      },
      {
        heading: '8. Modifications de cette politique',
        paras: [
          'Si cette politique est mise à jour, la version révisée sera publiée sur cette page et la date « Dernière mise à jour » ci-dessus sera modifiée pour refléter la date du changement. Les modifications substantielles des pratiques de traitement des données, le cas échéant, seront indiquées ici.',
        ],
      },
      {
        heading: '9. Contact',
        contactBefore: 'Les questions concernant cette politique peuvent être soumises sous forme d’issue sur le dépôt du projet :',
        contactAfter: '.',
      },
    ],
  },
};
