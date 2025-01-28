/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '客製化方案為企業開啟數位新篇章', // 英雄区文字
  STARTER_HERO_TITLE_2: '我們提供專業且高效的解決方案，助您輕鬆駕馭數位化挑戰', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '立即聯繫', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '/', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '合作案例', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '/archive', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BACKGROUND_IMAGE: '/images/starter/hero/background.jpg', // 英雄区背景图
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '服務項目', 
  STARTER_FEATURE_TEXT_1: '我們的專業服務', 
  STARTER_FEATURE_TEXT_2: '我們提供全方位的數位解決方案，從系統開發到技術顧問，為您的企業打造最適合的數位服務。',

  STARTER_FEATURE_1_TITLE_1: '行政流程數位化', 
  STARTER_FEATURE_1_TEXT_1: '協助企業將傳統行政流程轉型為數位化系統，提升工作效率並降低人為錯誤。', 
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', 
  STARTER_FEATURE_1_BUTTON_URL: '',

  STARTER_FEATURE_2_TITLE_1: '自動化生產流程', 
  STARTER_FEATURE_2_TEXT_1: '導入智能製造解決方案，優化生產流程，提高產能並確保產品品質的一致性。', 
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多',
  STARTER_FEATURE_2_BUTTON_URL: '',

  STARTER_FEATURE_3_TITLE_1: 'AI 智慧化解決方案', 
  STARTER_FEATURE_3_TEXT_1: '運用先進的人工智慧技術，為企業提供預測分析、智能決策支援等創新應用。', 
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多',
  STARTER_FEATURE_3_BUTTON_URL: '',

  STARTER_FEATURE_4_TITLE_1: '邊緣運算整合', 
  STARTER_FEATURE_4_TEXT_1: '結合5G技術與邊緣運算，實現即時數據處理與分析，提供更快速的決策支援。', 
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多',
  STARTER_FEATURE_4_BUTTON_URL: '',

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: false, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套轻量实用的建站解决方案',
  STARTER_ABOUT_TEXT:
    'NotionNext的愿景是帮助非技术人员的小白，最低成本、最快速地搭建自己的网站，帮助您将自己的产品与故事高效地传达给世界。 <br /> <br /> 功能强大的Notion笔记，简单快速的Vercel托管平台，组成一个简单的网站',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://docs.tangly1024.com/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: '博客站点',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '客戶反饋',
  STARTER_TESTIMONIALS_TEXT_1: '我們的客戶怎麼說？',
  STARTER_TESTIMONIALS_TEXT_2:
    '許多客戶選擇我們作為解決方案，輕鬆駕馭數位化挑戰',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '他們的團隊非常專業且反應迅速，幫助我們公司順利完成了數位轉型。特別是在系統整合方面，為我們節省了大量人力成本。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/starter/testimonials/client1.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '張小姐',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '營運長',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '在AI應用解決方案上，他們提供的建議讓我們在市場上搶得先機。團隊不僅技術能力強，更難得的是能夠從商業角度思考問題。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/starter/testimonials/client2.jpg', 
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李先生',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '執行長',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '我們的物聯網專案多虧有他們的協助才能如此順利。他們提供的解決方案不僅穩定可靠，售後支援也相當完善。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/starter/testimonials/client3.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '王先生',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '製造業負責人',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常見問題',
  STARTER_FAQ_TEXT_1: '不必擔心',
  STARTER_FAQ_TEXT_2: '我們整理了客戶最常詢問的問題，希望能幫助您更了解我們的服務',

  STARTER_FAQ_1_QUESTION: '想法還不太完整，該怎麼開始？',
  STARTER_FAQ_1_ANSWER:
    '我們會安排專業顧問與您討論，一起規劃最適合的轉型方案。從小步驟開始，確保每個環節都符合您的需求。',

  STARTER_FAQ_2_QUESTION: '數位轉型需要投入龐大預算嗎？我們是中小企業，預算有限。',
  STARTER_FAQ_2_ANSWER:
    '我們理解預算是重要考量。我們提供彈性方案，從最關鍵的需求開始，讓您在合理預算內獲得最大效益，再逐步擴展。',

  STARTER_FAQ_3_QUESTION: '導入新系統會影響現有營運嗎？',
  STARTER_FAQ_3_ANSWER:
    '請放心，我們採用漸進式轉換策略，確保新舊系統平行運作。同時提供完整培訓，協助團隊順利上手新系統。',

  STARTER_FAQ_4_QUESTION: '完成專案後，後續的維護支援如何？',
  STARTER_FAQ_4_ANSWER:
    '我們提供完整的售後支援，包括系統維護、問題排除和定期健檢。若遇到緊急狀況，技術團隊會立即處理，讓您無後顧之憂。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '團隊',
  STARTER_TEAM_TEXT_1: '技術團隊',
  STARTER_TEAM_TEXT_2: '我們是一個多元團隊！我們來自不同的背景，為工作帶來不同的個性、經驗和技能。這就是我們團隊如此特別的原因!',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Brandon.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Brandon Lu',
      STARTER_TEAM_ITEM_DESCRIPTION: '產品經理'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/YJack.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'YJack Zheng',
      STARTER_TEAM_ITEM_DESCRIPTION: '專案長'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Mark.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Mark Lai',
      STARTER_TEAM_ITEM_DESCRIPTION: '網站可靠性工程師'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Yan.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Yan Chiu',
      STARTER_TEAM_ITEM_DESCRIPTION: '區塊鏈工程師'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/Ian.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Ian Chiu',
      STARTER_TEAM_ITEM_DESCRIPTION: '物聯網工程師'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/CTHua.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'CTHua',
      STARTER_TEAM_ITEM_DESCRIPTION: '前端工程師'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '最新消息', 
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '技術文章與專案分享',
  STARTER_BLOG_TEXT_2:
    '我們定期分享技術趨勢、產業觀察與專案實踐經驗，幫助您掌握數位轉型的最新動態。',

  // 联系模块
  STARTER_CONTACT_ENABLE: false, 
  STARTER_CONTACT_TITLE: '聯絡我們',
  STARTER_CONTACT_TEXT: '讓我們一起討論您的需求',
  STARTER_CONTACT_LOCATION_TITLE: '公司地址',
  STARTER_CONTACT_LOCATION_TEXT: '台灣，台北',
  STARTER_CONTACT_EMAIL_TITLE: '與我們聯繫',
  STARTER_CONTACT_EMAIL_TEXT: 'contact@yourcompany.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'YOUR_FORM_URL', 

  // 合作伙伴的图标 - 建議放上實際合作過的企業或技術夥伴
  STARTER_BRANDS_ENABLE: false,
  STARTER_BRANDS: [
    // {
    //   IMAGE: '/images/starter/brands/partner1.svg',
    //   IMAGE_WHITE: '/images/starter/brands/partner1-white.svg',
    //   URL: 'https://partner1.com/',
    //   TITLE: 'Partner 1'
    // },
    // ... 其他合作夥伴
  ],

  STARTER_FOOTER_SLOGAN: '以創新科技，為企業打造智慧化未來。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隱私權政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律聲明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legal-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服務條款',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-service',

  // 404页面的提示语
  STARTER_404_TITLE: '找不到您要的頁面',
  STARTER_404_TEXT: '抱歉！您所查找的頁面不存在或已被移除。',
  STARTER_404_BACK: '返回首頁',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '心動不如行動',
  STARTER_CTA_TITLE_2: '立即與我們聯繫',
  STARTER_CTA_DESCRIPTION:
    '讓我們一起討論您的需求，為您量身打造最適合的解決方案。',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: '/#contact',
  STARTER_CTA_BUTTON_TEXT: '免費諮詢',

  STARTER_POST_REDIRECT_ENABLE: false,
  STARTER_POST_REDIRECT_URL: 'https://cerana.tech/blog',
  STARTER_NEWSLETTER: false
}
export default CONFIG
