import type { Dict } from '../ui';

export const ptBR: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Trackeador de portfólio de bitcoin de código aberto para Android',
      description:
        'Um app Android de código aberto e focado em privacidade para trackear o valor dos seus stacks de Bitcoin. Sem contas, sem análises, sem telemetria.',
    },
    about: {
      title: 'Sobre — Open Bitcoin Tracker',
      description:
        'Sobre o Open Bitcoin Tracker: um app Android de código aberto e focado em privacidade para trackear o valor dos seus stacks de Bitcoin. Links, fontes de dados e licenças de código aberto.',
    },
    privacy: {
      title: 'Política de Privacidade — Open Bitcoin Tracker',
      description:
        'Política de privacidade do Open Bitcoin Tracker: um app Android de código aberto e focado em privacidade para trackear o valor dos seus stacks de Bitcoin.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Trackeador privado do valor do Bitcoin para Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'Repositório no GitHub',
    download: 'Baixar',
    langLabel: 'Idioma',
    themeToggleAria: 'Alternar modo escuro',
    themeDark: 'Modo escuro',
    themeLight: 'Modo claro',
  },

  hero: {
    tagline: 'Trackeador de portfólio de bitcoin de código aberto para Android.',
    downloadApk: 'Baixar APK',
    viewGithub: 'Ver no GitHub',
    viewZapstore: 'Zapstore',
    phoneAria: 'Captura de tela do Open Bitcoin Tracker — clique para mudar o tema',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Pra quem acumula sem pressa',
        body: 'Feito pra quem não precisa enviar nem receber, só quer ficar de olho no valor dos seus stacks.',
      },
      {
        title: 'Privacidade total',
        body: 'O valor de cada stack você digita na mão, e ele nunca sai do seu celular. O OBT não precisa de seeds nem de chaves.',
      },
      {
        title: 'Rápido e leve',
        body: 'O OBT não se conecta a nenhum nó: abre rápido e quase não consome bateria.',
      },
    ],
  },

  themes: {
    heading: 'Holde com estilo',
    sub: 'Quatro temas que seguem automaticamente o modo do seu sistema.',
    regionAria: 'Temas do app',
    showAria: 'Mostrar a captura de tela de {label}',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Salmon Press', 'Deepsea Blue', 'OLED Black'],
  },

  privacy: {
    heading: 'Privacidade total',
    sub: 'Seus dados ficam no seu celular.',
    cards: [
      { title: 'Sem contas', body: 'Sem cadastro. Instale o app e comece a trackear.' },
      { title: 'Sem rastreamento', body: 'Zero análises, zero anúncios, zero fingerprinting.' },
      { title: 'Somente no dispositivo', body: 'Seus stacks ficam no seu celular. Nada é enviado pra lugar nenhum.' },
      { title: 'Código aberto', body: 'Licença MIT. Não confie, verifique.' },
    ],
  },

  kao: {
    body: 'A partir de setembro de 2026, o Google passará a exigir que todo desenvolvedor Android se registre e verifique sua identidade, mesmo para apps instalados fora da Play Store. Isso ameaça apps de código aberto como este.',
    linkText: 'Saiba mais em keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · Licença MIT',
    appHeader: 'App',
    projectHeader: 'Projeto',
    about: 'Sobre',
    privacy: 'Política de Privacidade',
    github: 'GitHub',
    reportBug: 'Relatar um bug',
  },

  about: {
    h1: 'Sobre',
    storyHeader: 'Por que criei o OBT',
    story: [
      'Criei o Open Bitcoin Tracker porque eu queria um jeito prático de acompanhar vários stacks. Não preciso fazer transações, só ficar de olho no valor deles. A maioria das wallets só deixa ter um stack ou fica lenta porque precisa se conectar a um node.',
      'No fim, minha família e meus amigos também acabaram usando, então resolvi torná-lo público, vai que serve pra mais gente.',
    ],
    dataSourcesHeader: 'Fontes de dados do app Android',
    note: 'O app não tem nenhuma associação com esses provedores.',
    licenses: 'Licença MIT no GitHub',
    madeBy: 'Por Max Hodler',
    forGrandma: 'Para a minha vó 🌼',
    profileHeader: 'Criado por Max Hodler',
    followAria: 'Max Hodler no X',
    primalAria: 'Max Hodler no Primal',
    dataSourceLabels: ['Preços atuais', 'Preços históricos', 'Câmbio histórico', 'Mempool e hashrate'],
    currenciesHeader: 'Moedas suportadas',
    currencyNote: 'Veja seus stacks em qualquer uma dessas moedas fiduciárias.',
    // Full currency names; the ISO codes (USD, EUR, …) stay literal in the
    // page, zipped against this array by index. Order: USD, EUR, GBP, AUD, CAD,
    // CHF, JPY.
    currencyNames: ['Dólar americano', 'Euro', 'Libra esterlina', 'Dólar australiano', 'Dólar canadense', 'Franco suíço', 'Iene japonês'],
    languagesHeader: 'Idiomas suportados',
    languageNote: 'O app e este site estão disponíveis nestes idiomas.',
    // The language autonyms themselves (English, Español, …) are never
    // translated — they live literally in the page markup.
  },

  policy: {
    h1: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 26 de maio de 2026',
    intro:
      'Esta política descreve quais dados o aplicativo Android Open Bitcoin Tracker («o app») processa, armazena e transmite. O app é publicado como software de código aberto sob a Licença MIT.',
    sections: [
      {
        heading: '1. Resumo',
        paras: [
          'O app não coleta dados pessoais. Não há contas de usuário, análises, identificadores de publicidade nem telemetria. Todos os dados que você insere no app permanecem no seu dispositivo.',
        ],
      },
      {
        heading: '2. Dados armazenados no seu dispositivo',
        paras: [
          'As informações a seguir são armazenadas localmente no armazenamento privado do app e não são transmitidas a nenhum servidor operado pelo desenvolvedor:',
        ],
        list: [
          'Os nomes de stacks e os valores de saldo em Bitcoin que você insere.',
          'As preferências do aplicativo e as configurações de exibição.',
          'A configuração opcional de desbloqueio por PIN ou biometria, mantida no Android Keystore.',
        ],
        parasAfter: [
          'O backup automático do Android para o Google Drive está desativado para este aplicativo, portanto os dados armazenados localmente não são copiados para os servidores do Google por esse mecanismo.',
        ],
      },
      {
        heading: '3. Solicitações de rede',
        paras: [
          'Para exibir dados de mercado e informações on-chain, o app faz solicitações aos seguintes serviços de terceiros. Nenhum identificador de conta, identificador de dispositivo ou parâmetro de rastreamento é anexado a essas solicitações.',
        ],
        list: [
          'Kraken — dados de preço do BTC em tempo real (WebSocket).',
          'mempool.space — altura de bloco, taxas medianas e estimativas de bloco.',
          'Coin Metrics — hashrate histórico da rede.',
          'Banco Central Europeu — taxas de câmbio de referência diárias de moedas fiduciárias.',
        ],
        parasAfter: [
          'Esses provedores necessariamente receberão o endereço IP do dispositivo solicitante. O tratamento dessas informações por eles é regido pelas respectivas políticas de privacidade.',
        ],
      },
      {
        heading: '4. Dados não coletados',
        paras: ['O app não coleta, transmite nem armazena nenhum dos seguintes dados:'],
        list: [
          'Contas de usuário, credenciais de login ou endereços de e-mail.',
          'Dados de análise ou de uso do produto (por exemplo, Firebase Analytics, Sentry, Mixpanel).',
          'Identificadores de publicidade ou SDKs de publicidade.',
          'Relatórios de falhas fora do dispositivo.',
        ],
      },
      {
        heading: '5. Permissões',
        paras: ['O app solicita as seguintes permissões do Android:'],
        list: [
          'Internet — necessária para obter dados de mercado e informações da mempool.',
          'Autenticação biométrica (opcional) — quando ativada, o app usa a API BiometricPrompt do Android para desbloquear localmente. Os dados biométricos são gerenciados pelo sistema operacional Android; o app nunca os recebe nem os armazena.',
        ],
        parasAfter: [
          'O app não solicita acesso a contatos, localização, câmera, microfone nem ao armazenamento de arquivos geral.',
        ],
      },
      {
        heading: '6. Código-fonte',
        paras: [
          'O código-fonte completo do app está disponível publicamente e pode ser auditado, compilado ou modificado de forma independente sob os termos da Licença MIT.',
        ],
        repoLabel: 'Repositório:',
      },
      {
        heading: '7. Crianças',
        paras: [
          'O app não é destinado a crianças. Como não coleta dados pessoais, ele não processa intencionalmente dados pessoais de crianças de nenhuma idade.',
        ],
      },
      {
        heading: '8. Alterações nesta política',
        paras: [
          'Se esta política for atualizada, a versão revisada será publicada nesta página e a data de «Última atualização» acima será modificada para refletir a data da alteração. Mudanças significativas nas práticas de tratamento de dados, se houver, serão refletidas aqui.',
        ],
      },
      {
        heading: '9. Contato',
        contactBefore: 'Dúvidas sobre esta política podem ser enviadas como uma issue no repositório do projeto:',
        contactAfter: '.',
      },
    ],
  },
};
