import type { Dict } from '../ui';

export const ja: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Android向けオープンソースのビットコイン・ポートフォリオ追跡アプリ',
      description:
        'ビットコインのスタックの価値を追跡する、プライバシー重視のオープンソース Android アプリ。アカウント不要、解析なし、テレメトリーなし。',
    },
    about: {
      title: 'アプリについて — Open Bitcoin Tracker',
      description:
        'Open Bitcoin Tracker について — ビットコインのスタックの価値を追跡する、プライバシー重視のオープンソース Android アプリ。リンク、データソース、オープンソースライセンス。',
    },
    privacy: {
      title: 'プライバシーポリシー — Open Bitcoin Tracker',
      description:
        'Open Bitcoin Tracker のプライバシーポリシー — ビットコインのスタックの価値を追跡する、プライバシー重視のオープンソース Android アプリ。',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Android向けのプライベートなビットコイン価値トラッカー',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'GitHub リポジトリ',
    download: 'ダウンロード',
    langLabel: '言語',
    themeToggleAria: 'ダークモードを切り替える',
    themeDark: 'ダークモード',
    themeLight: 'ライトモード',
  },

  hero: {
    tagline: 'Android向けオープンソースのビットコイン・ポートフォリオ追跡アプリ。',
    downloadApk: 'APK をダウンロード',
    viewGithub: 'GitHub で見る',
    viewZapstore: 'Zapstore',
    phoneAria: 'Open Bitcoin Tracker のスクリーンショット — クリックでテーマを変更',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: ' の画面',
    reasons: [
      {
        title: 'コツコツ積む人のための価格トラッカー',
        body: '送受信は必要ないけれど、スタックの価値はしっかり見守りたい——そんな人のために作りました。',
      },
      {
        title: '完全なプライバシー',
        body: '各スタックの数量は手動で入力し、端末の外に出ることはありません。OBT はシードや鍵を必要としません。',
      },
      {
        title: '高速で軽量',
        body: 'OBT はノードに接続しないため、起動が速くバッテリーへの影響もごくわずかです。',
      },
    ],
  },

  themes: {
    heading: 'スタイルとともにホールド',
    sub: 'システムのモードに自動で追従する 4 つのテーマ。',
    regionAria: 'アプリのテーマ',
    showAria: '{label} のスクリーンショットを表示',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: ' の画面',
    labels: ['Paper Cream', 'Salmon Press', 'Deepsea Blue', 'OLED Black'],
  },

  privacy: {
    heading: '完全なプライバシー',
    sub: 'あなたのデータは端末内にとどまります。',
    cards: [
      { title: 'アカウント不要', body: '登録なし。アプリをインストールしてすぐに追跡を開始。' },
      { title: 'トラッキングなし', body: '解析ゼロ、広告なし、フィンガープリンティングなし。' },
      { title: '端末内のみ', body: 'スタックは端末内にとどまります。何もアップロードされません。' },
      { title: 'オープンソース', body: 'MIT ライセンス。信用するな、検証せよ。' },
    ],
  },

  kao: {
    body: '2026 年 9 月から、Google は Play ストア外でインストールされるアプリも含め、すべての Android 開発者に登録と本人確認を義務付けます。これは、このアプリのようなオープンソースアプリを脅かすものです。',
    linkText: '詳しくは keepandroidopen.org へ',
  },

  footer: {
    copyright: '© 2026 · MIT ライセンス',
    appHeader: 'アプリ',
    projectHeader: 'プロジェクト',
    about: 'アプリについて',
    privacy: 'プライバシーポリシー',
    github: 'GitHub',
    reportBug: 'バグを報告',
  },

  about: {
    h1: 'アプリについて',
    storyHeader: '私が OBT を作った理由',
    story: [
      'Open Bitcoin Tracker を作ったのは、複数のスタックを手軽にまとめて見たかったからです。送金する必要はなく、ただ価値を追いたいだけ。でも、たいていのウォレットはスタックを一つしか登録できないか、ノードに接続するせいで動作がもたつきます。',
      '結局、家族も友人も自分も普段から使うようになったので、ほかの人にも役立つかもしれないと思って公開しました。',
    ],
    dataSourcesHeader: 'Android アプリのデータソース',
    note: 'このアプリはこれらの提供元と一切の関係はありません。',
    licenses: 'GitHub の MIT ライセンス',
    madeBy: 'Max Hodler 作',
    forGrandma: 'おばあちゃんへ 🌼',
    profileHeader: '制作者 Max Hodler',
    followAria: 'X で Max Hodler をフォロー',
    primalAria: 'Primal で Max Hodler をフォロー',
    dataSourceLabels: ['現在価格', '過去価格', '過去の為替レート', 'メモリプールとハッシュレート'],
    currenciesHeader: '対応通貨',
    currencyNote: 'スタックの価値を、以下のいずれの法定通貨でも表示できます。',
    currencyNames: ['米ドル', 'ユーロ', '英ポンド', '豪ドル', 'カナダドル', 'スイスフラン', '日本円'],
    languagesHeader: '対応言語',
    languageNote: 'アプリとこのサイトは、以下の言語でご利用いただけます。',
  },

  policy: {
    h1: 'プライバシーポリシー',
    lastUpdated: '最終更新: 2026 年 5 月 26 日',
    intro:
      'このポリシーは、Open Bitcoin Tracker Android アプリ（以下「本アプリ」）が処理・保存・送信するデータについて説明します。本アプリは MIT ライセンスのもとでオープンソースソフトウェアとして公開されています。',
    sections: [
      {
        heading: '1. 概要',
        paras: [
          '本アプリは個人データを収集しません。ユーザーアカウント、解析、広告識別子、テレメトリーはありません。本アプリに入力したすべてのデータは、あなたの端末内にとどまります。',
        ],
      },
      {
        heading: '2. 端末に保存されるデータ',
        paras: [
          '以下の情報は本アプリの非公開ストレージにローカル保存され、開発者が運用するいかなるサーバーにも送信されません。',
        ],
        list: [
          '入力したスタック名とビットコインの残高。',
          'アプリの設定および表示設定。',
          '任意の PIN または生体認証によるロック解除設定（Android キーストアに保存）。',
        ],
        parasAfter: [
          '本アプリでは Android の Google ドライブへの自動バックアップが無効になっているため、ローカルに保存されたデータはこの仕組みによって Google のサーバーへコピーされることはありません。',
        ],
      },
      {
        heading: '3. ネットワークリクエスト',
        paras: [
          '市場データやオンチェーン情報を表示するため、本アプリは以下の第三者サービスにリクエストを送信します。これらのリクエストには、アカウント識別子・端末識別子・トラッキングパラメータは付加されません。',
        ],
        list: [
          'Kraken — リアルタイムの BTC 価格データ（WebSocket）。',
          'mempool.space — ブロック高、中央値手数料、ブロック予測。',
          'Coin Metrics — ネットワークの過去ハッシュレート。',
          '欧州中央銀行 — 法定通貨の日次基準為替レート。',
        ],
        parasAfter: [
          'これらの提供元は、リクエスト元の端末の IP アドレスを必然的に受け取ります。その情報の取り扱いは、各社のプライバシーポリシーに従います。',
        ],
      },
      {
        heading: '4. 収集しないデータ',
        paras: ['本アプリは以下のいずれも収集・送信・保存しません。'],
        list: [
          'ユーザーアカウント、サインイン資格情報、メールアドレス。',
          '解析または製品利用データ（例: Firebase Analytics、Sentry、Mixpanel）。',
          '広告識別子または広告 SDK。',
          '端末外へのクラッシュレポート。',
        ],
      },
      {
        heading: '5. 権限',
        paras: ['本アプリは以下の Android 権限を要求します。'],
        list: [
          'インターネット — 市場データとメモリプール情報の取得に必要。',
          '生体認証（任意）— 有効にすると、本アプリは Android の BiometricPrompt API を使ってローカルでロックを解除します。生体データは Android OS が管理し、本アプリが受け取ったり保存したりすることはありません。',
        ],
        parasAfter: [
          '本アプリは、連絡先・位置情報・カメラ・マイク・一般的なファイルストレージへのアクセスを要求しません。',
        ],
      },
      {
        heading: '6. ソースコード',
        paras: [
          '本アプリの完全なソースコードは公開されており、MIT ライセンスの条件のもとで独立して監査・ビルド・改変できます。',
        ],
        repoLabel: 'リポジトリ:',
      },
      {
        heading: '7. 子ども',
        paras: [
          '本アプリは子ども向けではありません。個人データを収集しないため、年齢を問わず子どもの個人データを意図的に処理することはありません。',
        ],
      },
      {
        heading: '8. 本ポリシーの変更',
        paras: [
          '本ポリシーが更新された場合、改訂版がこのページに公開され、上記の「最終更新」日が変更日を反映するよう更新されます。データの取り扱いに関する重要な変更がある場合は、ここに反映されます。',
        ],
      },
      {
        heading: '9. お問い合わせ',
        contactBefore: '本ポリシーに関するご質問は、プロジェクトのリポジトリに issue としてお寄せください:',
        contactAfter: '。',
      },
    ],
  },
};
