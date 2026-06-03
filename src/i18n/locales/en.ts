// English is the canonical translation dictionary: its shape (see `Dict` in
// ../ui.ts) is what every other locale file is type-checked against, so a
// missing or misspelled key in any language is a build-time error. Keep the
// structure here and add/rename keys here first.
//
// What is intentionally NOT in here (stays literal in the markup): icon names,
// every external URL (repo / releases / issues / LICENSE / data-source links),
// and brand/product names (Kraken, Coin Metrics, mempool.space, the app name
// "Open Bitcoin Tracker", "OBT", "Max Hodler").
export const en = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Open source bitcoin portfolio tracker for Android',
      description:
        'A privacy-focused, open-source Android app to track the value of your Bitcoin stacks. No accounts, no analytics, no telemetry.',
    },
    about: {
      title: 'About — Open Bitcoin Tracker',
      description:
        'About Open Bitcoin Tracker — a privacy-focused, open-source Android app to track the value of your Bitcoin stacks. Links, data sources, and open source licenses.',
    },
    privacy: {
      title: 'Privacy Policy — Open Bitcoin Tracker',
      description:
        'Privacy policy for Open Bitcoin Tracker — a privacy-focused, open-source Android app to track the value of your Bitcoin stacks.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Private Bitcoin value tracker for Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'GitHub repository',
    download: 'Download',
    // Label for the language switcher (matches the app's own "Language" string).
    langLabel: 'Language',
    // Accessible label for the light/dark theme toggle button in the header.
    themeToggleAria: 'Toggle dark mode',
    // Visible labels next to the footer theme toggle. They name the *target*
    // (what a click switches to): shown in light mode → click goes dark, and
    // vice-versa. Swapped client-side by ThemeToggle.astro.
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
  },

  hero: {
    tagline: 'Open source bitcoin portfolio tracker for Android.',
    downloadApk: 'Download APK',
    viewGithub: 'View on GitHub',
    phoneAria: 'Open Bitcoin Tracker screenshot — click to change theme',
    // Screenshot alt text is built client-side as `${altPrefix}${label}${altSuffix}`,
    // e.g. "Open Bitcoin Tracker — Home screen". The product name stays in the
    // prefix verbatim; only the surrounding words translate.
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: ' screen',
    reasons: [
      {
        title: 'A price tracker for humble stackers',
        body: "Made for those who don't need to transact but want to keep an eye on the value of their stacks.",
      },
      {
        title: 'Total privacy',
        body: "The amount in each stack is entered by hand and never leaves your phone. OBT doesn't need seeds or keys.",
      },
      {
        title: 'Fast and lightweight',
        body: "OBT doesn't connect to a node so it loads fast and has minimal battery impact.",
      },
    ],
  },

  themes: {
    heading: 'Hodl with style',
    sub: "Four themes that follow your system's mode automatically.",
    regionAria: 'App themes',
    // {label} is replaced with the theme name, e.g. "Show Home screenshot".
    showAria: 'Show {label} screenshot',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: ' screen',
    // The four theme names, shared between this section's markup and the hero's
    // client-side theme-cycling script. Order matches the screenshot order.
    labels: ['Paper Cream', 'Deepsea Blue', 'Salmon Press', 'OLED Black'],
  },

  privacy: {
    heading: 'Total privacy',
    sub: 'Your data stays on your phone.',
    cards: [
      { title: 'No accounts', body: 'No sign-up. Install the app and start tracking.' },
      { title: 'No tracking', body: 'Zero analytics, no ads, no fingerprinting.' },
      { title: 'On-device only', body: 'Your stacks stay on your phone. Nothing is uploaded.' },
      { title: 'Open source', body: "MIT License. Don't trust, verify." },
    ],
  },

  kao: {
    body: 'From September 2026, Google will require every Android developer to register and verify their identity, even for apps installed outside the Play Store. That threatens open-source apps like this one.',
    linkText: 'Learn more at keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · MIT License',
    appHeader: 'App',
    projectHeader: 'Project',
    about: 'About',
    privacy: 'Privacy Policy',
    github: 'GitHub',
    reportBug: 'Report a bug',
  },

  about: {
    h1: 'About',
    // Heading above the origin story. Voice string — transcreate freely.
    storyHeader: 'Why I created OBT',
    // Personal origin story shown under the H1. Voice string — transcreate
    // freely (see TRANSLATING.md). Each array entry renders as its own paragraph.
    story: [
      'I built Open Bitcoin Tracker because I wanted a convenient way to keep track of multiple stacks. I don´t need to transact, just to keep an eye on their value. Most wallets only allow one and can be slow because they connect to a node.',
      'My family and friends ended up using it too, so I made it public in case more people find it useful.',
    ],
    dataSourcesHeader: 'Data sources for the Android app',
    note: 'The app has no association with any of these providers.',
    licenses: 'MIT license on GitHub',
    madeBy: 'By Max Hodler',
    forGrandma: 'For my grandma 🌼',
    // Heading above the author's X (Twitter) profile card. Voice string. The
    // brand/author name "Max Hodler" stays literal.
    profileHeader: 'Created by Max Hodler',
    // Accessible label for the author's X (Twitter) profile card. The @handle
    // and URL stay literal in the page markup; only this label translates.
    followAria: 'Max Hodler on X',
    // Accessible label for the author's Primal (Nostr) profile link. The brand
    // "Primal" and the profile URL stay literal; only this label translates.
    primalAria: 'Max Hodler on Primal',
    // Labels for the data-source rows; the provider names (Kraken, etc.) and
    // their URLs stay literal in the page, zipped against this array by index.
    dataSourceLabels: ['Current Prices', 'Historical Prices', 'Historical FX rates', 'Mempool and Hashrate'],
  },

  policy: {
    h1: 'Privacy Policy',
    lastUpdated: 'Last updated: 26 May 2026',
    intro:
      'This policy describes what data the Open Bitcoin Tracker Android application ("the app") processes, stores, and transmits. The app is published as open-source software under the MIT License.',
    // Nine sections rendered as <h2> + paragraphs and/or a bullet list. The
    // repository links in sections 6 and 9 are added by the page after the
    // section text, so URLs never live in translation strings.
    sections: [
      {
        heading: '1. Summary',
        paras: [
          'The app does not collect personal data. There are no user accounts, no analytics, no advertising identifiers, and no telemetry. All data you enter into the app remains on your device.',
        ],
      },
      {
        heading: '2. Data stored on your device',
        paras: [
          "The following information is stored locally in the app's private storage and is not transmitted to any server operated by the developer:",
        ],
        list: [
          'Stack names and Bitcoin balance amounts you enter.',
          'Application preferences and display settings.',
          'Optional PIN or biometric unlock configuration, held in the Android Keystore.',
        ],
        parasAfter: [
          "Android auto-backup to Google Drive is disabled for this application, so locally stored data is not copied to Google's servers via that mechanism.",
        ],
      },
      {
        heading: '3. Network requests',
        paras: [
          'To display market data and on-chain information, the app makes requests to the following third-party services. No account identifier, device identifier, or tracking parameter is attached to these requests.',
        ],
        list: [
          'Kraken — real-time BTC price data (WebSocket).',
          'mempool.space — block height, median fees, and block estimates.',
          'Coin Metrics — historical network hashrate.',
          'European Central Bank — daily fiat reference exchange rates.',
        ],
        parasAfter: [
          'These providers will necessarily receive the IP address of the requesting device. Their processing of that information is governed by their respective privacy policies.',
        ],
      },
      {
        heading: '4. Data not collected',
        paras: ['The app does not collect, transmit, or store any of the following:'],
        list: [
          'User accounts, sign-in credentials, or email addresses.',
          'Analytics or product-usage data (e.g., Firebase Analytics, Sentry, Mixpanel).',
          'Advertising identifiers or advertising SDKs.',
          'Off-device crash reports.',
        ],
      },
      {
        heading: '5. Permissions',
        paras: ['The app requests the following Android permissions:'],
        list: [
          'Internet — required to retrieve market data and mempool information.',
          "Biometric authentication (optional) — when enabled, the app uses Android's BiometricPrompt API to unlock locally. Biometric data is managed by the Android operating system; the app never receives or stores it.",
        ],
        parasAfter: [
          'The app does not request access to contacts, location, camera, microphone, or general file storage.',
        ],
      },
      {
        heading: '6. Source code',
        paras: [
          'The complete source code of the app is publicly available and may be independently audited, built, or modified under the terms of the MIT License.',
        ],
        // The page appends "Repository: <link>" after these paragraphs.
        repoLabel: 'Repository:',
      },
      {
        heading: '7. Children',
        paras: [
          'The app is not directed to children. Because it does not collect personal data, it does not knowingly process personal data of children of any age.',
        ],
      },
      {
        heading: '8. Changes to this policy',
        paras: [
          'If this policy is updated, the revised version will be published on this page and the "Last updated" date above will be modified to reflect the date of the change. Material changes to data-handling practices, if any, will be reflected here.',
        ],
      },
      {
        heading: '9. Contact',
        // Sentence is split around the repository-issues link the page inserts.
        contactBefore: 'Questions regarding this policy may be submitted as an issue on the project repository:',
        contactAfter: '.',
      },
    ],
  },
} as const;
