import type { Dict } from '../ui';

export const vi: Dict = {
  meta: {
    home: {
      title: 'Open Bitcoin Tracker - Trình theo dõi danh mục bitcoin mã nguồn mở cho Android',
      description:
        'Một ứng dụng Android mã nguồn mở, chú trọng quyền riêng tư để theo dõi giá trị các stack Bitcoin của bạn. Không tài khoản, không phân tích, không đo từ xa.',
    },
    about: {
      title: 'Giới thiệu — Open Bitcoin Tracker',
      description:
        'Giới thiệu về Open Bitcoin Tracker — một ứng dụng Android mã nguồn mở, chú trọng quyền riêng tư để theo dõi giá trị các stack Bitcoin của bạn. Liên kết, nguồn dữ liệu và giấy phép mã nguồn mở.',
    },
    privacy: {
      title: 'Chính sách quyền riêng tư — Open Bitcoin Tracker',
      description:
        'Chính sách quyền riêng tư của Open Bitcoin Tracker — một ứng dụng Android mã nguồn mở, chú trọng quyền riêng tư để theo dõi giá trị các stack Bitcoin của bạn.',
    },
    ogImageAlt: 'Open Bitcoin Tracker — Trình theo dõi giá trị Bitcoin riêng tư cho Android',
  },

  nav: {
    github: 'GitHub',
    githubAria: 'Kho lưu trữ GitHub',
    download: 'Tải xuống',
    langLabel: 'Ngôn ngữ',
    themeToggleAria: 'Bật/tắt chế độ tối',
    themeDark: 'Chế độ tối',
    themeLight: 'Chế độ sáng',
  },

  hero: {
    tagline: 'Trình theo dõi danh mục bitcoin mã nguồn mở cho Android.',
    downloadApk: 'Tải APK',
    viewGithub: 'Xem trên GitHub',
    phoneAria: 'Ảnh chụp màn hình Open Bitcoin Tracker — nhấn để đổi giao diện',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    reasons: [
      {
        title: 'Cho những người tích sản thong thả',
        body: 'Được tạo ra cho những ai không cần gửi hay nhận, chỉ muốn để mắt đến giá trị các stack của mình.',
      },
      {
        title: 'Riêng tư tuyệt đối',
        body: 'Số lượng trong mỗi stack do bạn tự tay nhập, và nó không bao giờ rời khỏi điện thoại. OBT không cần seed hay key.',
      },
      {
        title: 'Nhanh và nhẹ',
        body: 'OBT không kết nối tới node nào nên mở nhanh và gần như không hao pin.',
      },
    ],
  },

  themes: {
    heading: 'Hodl thật phong cách',
    sub: 'Bốn giao diện tự động theo chế độ hệ thống của bạn.',
    regionAria: 'Giao diện ứng dụng',
    showAria: 'Hiện ảnh chụp màn hình {label}',
    altPrefix: 'Open Bitcoin Tracker — ',
    altSuffix: '',
    labels: ['Paper Cream', 'Deepsea Blue', 'Salmon Press', 'OLED Black'],
  },

  privacy: {
    heading: 'Riêng tư tuyệt đối',
    sub: 'Dữ liệu của bạn ở lại trên điện thoại.',
    cards: [
      { title: 'Không tài khoản', body: 'Không đăng ký. Cài ứng dụng và bắt đầu theo dõi.' },
      { title: 'Không theo dõi', body: 'Không phân tích, không quảng cáo, không fingerprinting.' },
      { title: 'Chỉ trên thiết bị', body: 'Các stack của bạn ở lại trên điện thoại. Không gì được tải lên.' },
      { title: 'Mã nguồn mở', body: 'Giấy phép MIT. Đừng tin, hãy kiểm chứng.' },
    ],
  },

  kao: {
    body: 'Từ tháng 9 năm 2026, Google sẽ yêu cầu mọi nhà phát triển Android đăng ký và xác minh danh tính, ngay cả với những ứng dụng cài đặt bên ngoài Play Store. Điều đó đe dọa các ứng dụng mã nguồn mở như ứng dụng này.',
    linkText: 'Tìm hiểu thêm tại keepandroidopen.org',
  },

  footer: {
    copyright: '© 2026 · Giấy phép MIT',
    appHeader: 'Ứng dụng',
    projectHeader: 'Dự án',
    about: 'Giới thiệu',
    privacy: 'Chính sách quyền riêng tư',
    github: 'GitHub',
    reportBug: 'Báo lỗi',
  },

  about: {
    h1: 'Giới thiệu',
    storyHeader: 'Vì sao tôi tạo ra OBT',
    story: [
      'Tôi làm Open Bitcoin Tracker vì muốn một cách tiện lợi để theo dõi nhiều stack cùng lúc. Tôi không cần giao dịch, chỉ cần nhìn giá trị của chúng. Mà đa số ví chỉ cho thêm một stack hoặc chạy chậm vì phải kết nối tới một node.',
      'Cuối cùng gia đình và bạn bè tôi cũng dùng app, nên tôi công khai luôn, biết đâu nhiều người thấy hữu ích.',
    ],
    dataSourcesHeader: 'Nguồn dữ liệu cho ứng dụng Android',
    note: 'Ứng dụng không có liên kết nào với các nhà cung cấp này.',
    licenses: 'Giấy phép MIT trên GitHub',
    madeBy: 'Bởi Max Hodler',
    forGrandma: 'Tặng bà của tôi 🌼',
    profileHeader: 'Được tạo bởi Max Hodler',
    followAria: 'Max Hodler trên X',
    primalAria: 'Max Hodler trên Primal',
    dataSourceLabels: ['Giá hiện tại', 'Giá lịch sử', 'Tỷ giá ngoại tệ lịch sử', 'Mempool và hashrate'],
    currenciesHeader: 'Các loại tiền tệ được hỗ trợ',
    currencyNote: 'Xem stack của bạn theo bất kỳ loại tiền pháp định nào dưới đây.',
    currencyNames: ['Đô la Mỹ', 'Euro', 'Bảng Anh', 'Đô la Úc', 'Đô la Canada', 'Franc Thụy Sĩ', 'Yên Nhật'],
    languagesHeader: 'Các ngôn ngữ được hỗ trợ',
    languageNote: 'Ứng dụng và trang web này có sẵn bằng những ngôn ngữ dưới đây.',
  },

  policy: {
    h1: 'Chính sách quyền riêng tư',
    lastUpdated: 'Cập nhật lần cuối: 26 tháng 5 năm 2026',
    intro:
      'Chính sách này mô tả những dữ liệu mà ứng dụng Android Open Bitcoin Tracker («ứng dụng») xử lý, lưu trữ và truyền đi. Ứng dụng được phát hành dưới dạng phần mềm mã nguồn mở theo Giấy phép MIT.',
    sections: [
      {
        heading: '1. Tóm tắt',
        paras: [
          'Ứng dụng không thu thập dữ liệu cá nhân. Không có tài khoản người dùng, không phân tích, không mã định danh quảng cáo và không đo từ xa. Mọi dữ liệu bạn nhập vào ứng dụng đều ở lại trên thiết bị của bạn.',
        ],
      },
      {
        heading: '2. Dữ liệu lưu trên thiết bị của bạn',
        paras: [
          'Thông tin sau được lưu cục bộ trong bộ nhớ riêng của ứng dụng và không được truyền tới bất kỳ máy chủ nào do nhà phát triển vận hành:',
        ],
        list: [
          'Tên stack và số dư Bitcoin mà bạn nhập.',
          'Tùy chọn ứng dụng và cài đặt hiển thị.',
          'Cấu hình mở khóa tùy chọn bằng mã PIN hoặc sinh trắc học, được giữ trong Android Keystore.',
        ],
        parasAfter: [
          'Tính năng sao lưu tự động của Android lên Google Drive bị tắt cho ứng dụng này, nên dữ liệu lưu cục bộ không được sao chép lên máy chủ của Google qua cơ chế đó.',
        ],
      },
      {
        heading: '3. Yêu cầu mạng',
        paras: [
          'Để hiển thị dữ liệu thị trường và thông tin on-chain, ứng dụng gửi yêu cầu đến các dịch vụ bên thứ ba sau. Không có mã định danh tài khoản, mã định danh thiết bị hay tham số theo dõi nào được đính kèm vào các yêu cầu này.',
        ],
        list: [
          'Kraken — dữ liệu giá BTC theo thời gian thực (WebSocket).',
          'mempool.space — chiều cao khối, phí trung vị và ước tính khối.',
          'Coin Metrics — hashrate lịch sử của mạng.',
          'Ngân hàng Trung ương châu Âu — tỷ giá tham chiếu tiền pháp định hằng ngày.',
        ],
        parasAfter: [
          'Các nhà cung cấp này tất yếu sẽ nhận được địa chỉ IP của thiết bị gửi yêu cầu. Việc họ xử lý thông tin đó tuân theo chính sách quyền riêng tư tương ứng của họ.',
        ],
      },
      {
        heading: '4. Dữ liệu không được thu thập',
        paras: ['Ứng dụng không thu thập, truyền hay lưu trữ bất kỳ thông tin nào sau đây:'],
        list: [
          'Tài khoản người dùng, thông tin đăng nhập hoặc địa chỉ email.',
          'Dữ liệu phân tích hoặc sử dụng sản phẩm (ví dụ: Firebase Analytics, Sentry, Mixpanel).',
          'Mã định danh quảng cáo hoặc SDK quảng cáo.',
          'Báo cáo sự cố ngoài thiết bị.',
        ],
      },
      {
        heading: '5. Quyền',
        paras: ['Ứng dụng yêu cầu các quyền Android sau:'],
        list: [
          'Internet — cần thiết để lấy dữ liệu thị trường và thông tin mempool.',
          'Xác thực sinh trắc học (tùy chọn) — khi được bật, ứng dụng dùng API BiometricPrompt của Android để mở khóa cục bộ. Dữ liệu sinh trắc học do hệ điều hành Android quản lý; ứng dụng không bao giờ nhận hay lưu trữ chúng.',
        ],
        parasAfter: [
          'Ứng dụng không yêu cầu truy cập danh bạ, vị trí, máy ảnh, micrô hoặc bộ nhớ tệp chung.',
        ],
      },
      {
        heading: '6. Mã nguồn',
        paras: [
          'Toàn bộ mã nguồn của ứng dụng được công khai và có thể được kiểm toán, biên dịch hoặc sửa đổi một cách độc lập theo các điều khoản của Giấy phép MIT.',
        ],
        repoLabel: 'Kho lưu trữ:',
      },
      {
        heading: '7. Trẻ em',
        paras: [
          'Ứng dụng không hướng đến trẻ em. Vì không thu thập dữ liệu cá nhân, ứng dụng không cố ý xử lý dữ liệu cá nhân của trẻ em ở bất kỳ độ tuổi nào.',
        ],
      },
      {
        heading: '8. Thay đổi chính sách này',
        paras: [
          'Nếu chính sách này được cập nhật, phiên bản sửa đổi sẽ được công bố trên trang này và ngày «Cập nhật lần cuối» ở trên sẽ được sửa để phản ánh ngày thay đổi. Những thay đổi quan trọng về cách xử lý dữ liệu, nếu có, sẽ được phản ánh ở đây.',
        ],
      },
      {
        heading: '9. Liên hệ',
        contactBefore: 'Mọi câu hỏi về chính sách này có thể được gửi dưới dạng issue trên kho lưu trữ của dự án:',
        contactAfter: '.',
      },
    ],
  },
};
