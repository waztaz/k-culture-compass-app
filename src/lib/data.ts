import type { Location, Post, Review, PostCategory, Language, TranslatedContent } from './types';

const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'HYBE INSIGHT',
    category: 'K-Pop Holy Lands',
    coordinates: { lat: 37.5323, lng: 126.9911 },
    address: 'B1, 42, Hangang-daero, Yongsan-gu, Seoul',
    postId: 'post-1',
    image: { url: 'https://picsum.photos/seed/101/800/600', hint: 'modern building' },
  },
  {
    id: 'loc-2',
    name: 'Olive Young Myeongdong Flagship',
    category: 'Pharmacy',
    coordinates: { lat: 37.5630, lng: 126.9839 },
    address: '53 Myeongdong-gil, Jung-gu, Seoul',
    postId: 'post-2',
    cosmeticPrices: [
      { item: 'Mediheal Teatree Mask', price: 2000 },
      { item: 'COSRX Pimple Patch', price: 4500 },
    ],
    image: { url: 'https://picsum.photos/seed/102/800/600', hint: 'cosmetics store' },
  },
  {
    id: 'loc-3',
    name: 'Music Korea',
    category: 'K-Pop Haul',
    coordinates: { lat: 37.5645, lng: 126.9856 },
    address: '3F, 52, Myeongdong 8-gil, Jung-gu, Seoul',
    postId: 'post-3',
    image: { url: 'https://picsum.photos/seed/103/800/600', hint: 'music albums' },
  },
  {
    id: 'loc-4',
    name: 'Café Onion Anguk',
    category: 'Food/Cafe',
    coordinates: { lat: 37.5784, lng: 126.9836 },
    address: 'Gyedong-gil 5, Jongno-gu, Seoul',
    postId: 'post-4',
    image: { url: 'https://picsum.photos/seed/104/800/600', hint: 'cafe interior' },
  },
  {
    id: 'loc-5',
    name: 'Banobagi Dermatology',
    category: 'Dermatology',
    coordinates: { lat: 37.5186, lng: 127.0470 },
    address: '641-16 Yeoksam-dong, Gangnam-gu, Seoul',
    postId: 'post-5',
    image: { url: 'https://picsum.photos/seed/105/800/600', hint: 'clinic reception' },
  },
];

const posts: Post[] = [
  {
    id: 'post-1',
    locationId: 'loc-1',
    title: {
      en: "A Pilgrim's Guide to HYBE INSIGHT",
      ch: 'HYBE INSIGHT 朝圣指南',
      jp: 'HYBE INSIGHTへの巡礼ガイド',
      tw: 'HYBE INSIGHT 朝聖指南',
    },
    excerpt: {
      en: "HYBE INSIGHT is more than just a museum; it's a multi-sensory experience that dives deep into the music and artistry of HYBE's artists.",
      ch: 'HYBE INSIGHT 不仅仅是一个博物馆；它是一种多感官的体验，深入探讨 HYBE 艺术家的音乐和艺术性。',
      jp: 'HYBE INSIGHTは単なる博物館ではありません。HYBEのアーティストたちの音楽と芸術性を深く掘り下げる、多感覚的な体験です。',
      tw: 'HYBE INSIGHT 不僅僅是一個博物館；它是一種多感官的體驗，深入探討 HYBE 藝人的音樂和藝術性。',
    },
    content: {
      en: "HYBE INSIGHT is more than just a museum; it's a multi-sensory experience that dives deep into the music and artistry of HYBE's artists. From interactive exhibits to exclusive behind-the-scenes footage, prepare to spend at least a few hours here. The gift shop is a must-visit, but be prepared for long queues! It's a great spot for any K-Pop fan. The way they use technology to connect you with the music is just mind-blowing. I went there and it was so fun. lol. must go!!!",
      ch: 'HYBE INSIGHT 不仅仅是一个博物馆；它是一种多感官的体验，深入探讨 HYBE 艺术家的音乐和艺术性。从互动展览到独家幕后花絮，准备好在这里度过至少几个小时。礼品店是必游之地，但要准备好排长队！对于任何 K-Pop 粉丝来说，这都是一个好去处。他们使用技术将您与音乐联系起来的方式简直令人惊叹。我去了那里，非常有趣。哈哈。必去！！！',
      jp: 'HYBE INSIGHTは単なる博物館ではありません。HYBEのアーティストたちの音楽と芸術性を深く掘り下げる、多感覚的な体験です。インタラクティブな展示から独占的な舞台裏映像まで、ここで少なくとも数時間は過ごす準備をしてください。ギフトショップは必見ですが、長蛇の列を覚悟してください！K-POPファンなら誰でも楽しめる素晴らしい場所です。彼らがテクノロジーを使ってあなたを音楽と結びつける方法は、まさに驚異的です。私が行ったときはとても楽しかったです。笑。絶対に行くべきです！！！',
      tw: 'HYBE INSIGHT 不僅僅是一個博物館；它是一種多感官的體驗，深入探討 HYBE 藝人的音樂和藝術性。從互動展覽到獨家幕後花絮，準備好在這裡度過至少幾個小時。禮品店是必遊之地，但要準備好排長隊！對於任何 K-Pop 粉絲來說，這都是一個好去處。他們使用技術將您與音樂聯繫起來的方式簡直令人驚嘆。我去了那裡，非常有趣。哈哈。必去！！！',
    },
    createdAt: '2024-07-20T10:00:00Z',
    image: { url: 'https://picsum.photos/seed/101/800/600', hint: 'modern building' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-2',
    locationId: 'loc-2',
    title: {
      en: 'Top 5 Buys at Olive Young Myeongdong',
      ch: '明洞 Olive Young 五大必买好物',
      jp: 'オリーブヤング明洞店で買うべきトップ5',
      tw: '明洞 Olive Young 五大必買好物',
    },
    excerpt: {
      en: "The Olive Young flagship in Myeongdong is a K-Beauty paradise. It's massive and stocks an incredible range of products.",
      ch: '位于明洞的 Olive Young 旗舰店是韩妆天堂。它规模宏大，备有种类繁多的产品。',
      jp: '明洞のオリーブヤング本店は、Kビューティーの楽園です。広大で、信じられないほど豊富な品揃えを誇ります。',
      tw: '位於明洞的 Olive Young 旗艦店是韓妝天堂。它規模宏大，備有種類繁多的產品。',
    },
    content: {
      en: "The Olive Young flagship in Myeongdong is a K-Beauty paradise. It's massive and stocks an incredible range of products. Our top picks include the Mediheal Teatree Essential Mask for calming irritated skin and the COSRX Acne Pimple Master Patch for emergencies. Don't forget to check out the 'Tax Refund' kiosk on the second floor for some money back on your purchases!",
      ch: '位于明洞的 Olive Young 旗舰店是韩妆天堂。它规模宏大，备有种类繁多的产品。我们的首选包括用于镇静受刺激皮肤的 Mediheal 茶树精华面膜和用于紧急情况的 COSRX 痘痘贴。别忘了去二楼的“退税”自助服务机，为您的购物退回一些钱！',
      jp: '明洞のオリーブヤング本店は、Kビューティーの楽園です。広大で、信じられないほど豊富な品揃えを誇ります。私たちのおすすめには、刺激を受けた肌を落ち着かせるためのメディヒールティーツリーエッセンシャルマスクや、緊急用のCOSRXアクネピンプルマスターパッチなどがあります。2階の「免税」キオスクで、購入金額の一部を還付してもらうのをお忘れなく！',
      tw: '位於明洞的 Olive Young 旗艦店是韓妝天堂。它規模宏大，備有種類繁多的產品。我們的首選包括用於鎮靜受刺激皮膚的 Mediheal 茶樹精華面膜和用於緊急情況的 COSRX 痘痘貼。別忘了去二樓的「退稅」自助服務機，為您的購物退回一些錢！',
    },
    createdAt: '2024-07-19T14:30:00Z',
    image: { url: 'https://picsum.photos/seed/102/800/600', hint: 'cosmetics store' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-3',
    locationId: 'loc-3',
    title: {
        en: "Finding Rare K-Pop Albums at Music Korea",
        ch: "在 Music Korea 寻找稀有的 K-Pop 专辑",
        jp: "ミュージックコリアでレアなK-POPアルバムを見つける",
        tw: "在 Music Korea 尋找稀有的 K-Pop 專輯"
    },
    excerpt: {
        en: "Music Korea is a legendary spot for K-Pop fans. While it's smaller than some of the newer mega-stores, it has a fantastic selection of both new releases and back-catalog albums.",
        ch: "对于 K-Pop 粉丝来说，Music Korea 是一个传奇之地。虽然它比一些新建的大型商店要小，但它拥有精选的新发行专辑和旧目录专辑。",
        jp: "ミュージックコリアはK-POPファンにとって伝説的な場所です。新しいメガストアのいくつかと比べると小さいですが、新作とバックカタログの両方で素晴らしいセレクションを誇っています。",
        tw: "對於 K-Pop 粉絲來說，Music Korea 是一個傳奇之地。雖然它比一些新建的大型商店要小，但它擁有精選的新發行專輯和舊目錄專輯。"
    },
    content: {
      en: "Music Korea is a legendary spot for K-Pop fans. While it's smaller than some of the newer mega-stores, it has a fantastic selection of both new releases and back-catalog albums. The staff are knowledgeable and can help you find what you're looking for. It's also a great place to pick up official merchandise and concert goods.",
      ch: '对于 K-Pop 粉丝来说，Music Korea 是一个传奇之地。虽然它比一些新建的大型商店要小，但它拥有精选的新发行专辑和旧目录专辑。工作人员知识渊博，可以帮助您找到所需的东西。这里也是购买官方商品和演唱会周边的好地方。',
      jp: 'ミュージックコリアはK-POPファンにとって伝説的な場所です。新しいメガストアのいくつかと比べると小さいですが、新作とバックカタログの両方で素晴らしいセレクションを誇っています。スタッフは知識が豊富で、探しているものを見つける手助けをしてくれます。公式グッズやコンサートグッズを手に入れるのにも最適な場所です。',
      tw: '對於 K-Pop 粉絲來說，Music Korea 是一個傳奇之地。雖然它比一些新建的大型商店要小，但它擁有精選的新發行專輯和舊目錄專輯。工作人員知識淵博，可以幫助您找到所需的東西。這裡也是購買官方商品和演唱會周邊的好地方。',
    },
    createdAt: '2024-07-18T11:00:00Z',
    image: { url: 'https://picsum.photos/seed/103/800/600', hint: 'music albums' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-4',
    locationId: 'loc-4',
    title: {
        en: "The Viral Pastries of Café Onion Anguk",
        ch: "Café Onion Anguk 的网红糕点",
        jp: "カフェオニオン安国のバイラルなペストリー",
        tw: "Café Onion Anguk 的網紅糕點"
    },
    excerpt: {
        en: "Set in a traditional Hanok, Café Onion Anguk offers a unique blend of old and new. Their most famous item is the 'Pandoro', a mountain of powdered sugar-covered bread.",
        ch: "坐落在传统韩屋中的 Café Onion Anguk 融合了新旧元素。他们最著名的项目是“Pandoro”，一座覆盖着糖粉的面包山。",
        jp: "伝統的な韓屋に佇むカフェオニオン安国は、新旧がユニークに融合した空間を提供しています。最も有名な商品は、粉砂糖で覆われたパンの山「パンドーロ」です。",
        tw: "坐落在傳統韓屋中的 Café Onion Anguk 融合了新舊元素。他們最著名的項目是“Pandoro”，一座覆蓋著糖粉的麵包山。"
    },
    content: {
      en: "Set in a traditional Hanok, Café Onion Anguk offers a unique blend of old and new. Their most famous item is the 'Pandoro', a mountain of powdered sugar-covered bread that is as delicious as it is Instagrammable. The coffee is excellent too. Be prepared to wait for a table, especially on weekends, as this spot is incredibly popular.",
      ch: '坐落在传统韩屋中的 Café Onion Anguk 融合了新旧元素。他们最著名的项目是“Pandoro”，一座覆盖着糖粉的面包山，既美味又适合拍照。咖啡也很棒。要准备好等位，尤其是在周末，因为这个地方非常受欢迎。',
      jp: '伝統的な韓屋に佇むカフェオニオン安国は、新旧がユニークに融合した空間を提供しています。最も有名な商品は、粉砂糖で覆われたパンの山「パンドーロ」で、インスタ映えする美味しさです。コーヒーも絶品です。特に週末は非常に人気があるため、テーブルを待つ覚悟をしてください。',
      tw: '坐落在傳統韓屋中的 Café Onion Anguk 融合了新舊元素。他們最著名的項目是“Pandoro”，一座覆蓋著糖粉的麵包山，既美味又適合拍照。咖啡也很棒。要準備好等位，尤其是在週末，因為這個地方非常受歡迎。',
    },
    createdAt: '2024-07-17T09:20:00Z',
    image: { url: 'https://picsum.photos/seed/104/800/600', hint: 'cafe interior' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-5',
    locationId: 'loc-5',
    title: {
        en: "A Guide to Popular Treatments at Banobagi",
        ch: "Banobagi 热门治疗指南",
        jp: "バノバギで人気の治療法ガイド",
        tw: "Banobagi 熱門治療指南"
    },
    excerpt: {
        en: "Banobagi is one of the most well-known dermatology clinics in Seoul, popular with both locals and international visitors.",
        ch: "Banobagi 是首尔最著名的皮肤科诊所之一，深受本地和国际游客的欢迎。",
        jp: "バノバギはソウルで最も有名な皮膚科クリニックの一つで、地元の人々や海外からの訪問者に人気があります。",
        tw: "Banobagi 是首爾最著名的皮膚科診所之一，深受本地和國際遊客的歡迎。"
    },
    content: {
      en: "Banobagi is one of the most well-known dermatology clinics in Seoul, popular with both locals and international visitors. They offer a wide range of treatments, from simple facials and laser toning to more intensive procedures. Their 'Aqua Peel' is a great introductory treatment for deep cleansing and hydration. Consultations are available in multiple languages, making it very accessible for tourists.",
      ch: 'Banobagi 是首尔最著名的皮肤科诊所之一，深受本地和国际游客的欢迎。他们提供广泛的治疗，从简单的面部护理和激光爽肤到更强化的程序。他们的“水漾焕肤”是深度清洁和补水的绝佳入门治疗。提供多种语言的咨询服务，非常方便游客。',
      jp: 'バノバギはソウルで最も有名な皮膚科クリニックの一つで、地元の人々や海外からの訪問者に人気があります。簡単なフェイシャルやレーザートーニングから、より集中的な施術まで、幅広い治療を提供しています。彼らの「アクアピール」は、ディープクレンジングと水分補給のための優れた入門治療です。多言語でのカウンセリングが可能で、観光客にとって非常にアクセスしやすいです。',
      tw: 'Banobagi 是首爾最著名的皮膚科診所之一，深受本地和國際遊客的歡迎。他們提供廣泛的治療，從簡單的面部護理和激光爽膚到更強化的程序。他們的「水漾煥膚」是深度清潔和補水的絕佳入門治療。提供多種語言的諮詢服務，非常方便遊客。',
    },
    createdAt: '2024-07-16T16:45:00Z',
    image: { url: 'https://picsum.photos/seed/105/800/600', hint: 'clinic reception' },
    category: 'Location Spotlight',
  },
    // K-POP NEWS POSTS
  {
    id: 'news-1',
    title: {
        en: "NewJeans Announces Surprise Summer Comeback",
        ch: "NewJeans 宣布夏季惊喜回归",
        jp: "NewJeansが夏のサプライズカムバックを発表",
        tw: "NewJeans 宣布夏季驚喜回歸"
    },
    excerpt: {
        en: "The globally acclaimed group NewJeans is set to release a new mini-album in August, and fans are buzzing with excitement.",
        ch: "全球知名团体 NewJeans 将于八月发行新迷你专辑，粉丝们兴奋不已。",
        jp: "世界的に評価の高いグループNewJeansが8月に新しいミニアルバムをリリースする予定で、ファンは興奮に沸いています。",
        tw: "全球知名團體 NewJeans 將於八月發行新迷你專輯，粉絲們興奮不已。"
    },
    content: {
      en: 'The globally acclaimed group NewJeans is set to release a new mini-album in August. Fans are buzzing with excitement after a series of cryptic teasers were posted on their social media channels. The new album is rumored to explore a retro-futuristic concept, a departure from their previous releases. The title track is produced by their long-time collaborator, promising another chart-topping hit.',
      ch: '全球知名团体 NewJeans 将于八月发行新迷你专辑。在一系列神秘的预告片在他们的社交媒体频道上发布后，粉丝们兴奋不已。传闻新专辑将探索复古未来主义概念，与他们之前的发行版本有所不同。主打歌由他们的长期合作者制作，有望再次成为榜单冠军。',
      jp: '世界的に評価の高いグループNewJeansが8月に新しいミニアルバムをリリースする予定です。彼らのソーシャルメディアチャンネルに一連の謎めいたティーザーが投稿された後、ファンは興奮に沸いています。新しいアルバムは、以前のリリースとは一線を画す、レトロフューチャーなコンセプトを探求すると噂されています。タイトル曲は彼らの長年の協力者によってプロデュースされ、もう一つのチャートトップヒットを約束しています。',
      tw: '全球知名團體 NewJeans 將於八月發行新迷你專輯。在一系列神秘的預告片在他們的社交媒體頻道上發布後，粉絲們興奮不已。傳聞新專輯將探索復古未來主義概念，與他們之前的發行版本有所不同。主打歌由他們的長期合作者製作，有望再次成為榜單冠軍。',
    },
    image: { url: 'https://picsum.photos/seed/106/600/400', hint: 'kpop concert' },
    createdAt: '2024-07-22T10:00:00Z',
    category: 'K-Pop News',
  },
  {
    id: 'news-2',
    title: {
        en: 'Stray Kids To Embark on World Tour "DOMINATE"',
        ch: 'Stray Kids 即将开启“DOMINATE”世界巡演',
        jp: 'Stray Kidsがワールドツアー「DOMINATE」に乗り出す',
        tw: 'Stray Kids 即將開啟「DOMINATE」世界巡演'
    },
    excerpt: {
        en: 'Stray Kids has officially announced their much-anticipated world tour, "DOMINATE", starting in Seoul and covering 15 countries.',
        ch: 'Stray Kids 正式宣布了他们备受期待的“DOMINATE”世界巡演，首尔站开始，覆盖15个国家。',
        jp: 'Stray Kidsは、待望のワールドツアー「DOMINATE」を公式に発表しました。ソウルを皮切りに15カ国をカバーします。',
        tw: 'Stray Kids 正式宣布了他們備受期待的「DOMINATE」世界巡演，首爾站開始，覆蓋15個國家。'
    },
    content: {
      en: 'Stray Kids has officially announced their much-anticipated world tour, "DOMINATE". Starting in Seoul, the tour will cover 15 countries across Asia, North America, and Europe. The group promises a high-energy show with spectacular performances and a setlist that includes their biggest hits and new, unreleased tracks. Tickets are expected to go on sale next month, with pre-sale access for official fan club members.',
      ch: 'Stray Kids 正式宣布了他们备受期待的“DOMINATE”世界巡演。巡演将从首尔开始，覆盖亚洲、北美和欧洲的15个国家。该团体承诺将带来一场充满活力的演出，包括壮观的表演和包含他们最热门歌曲及未发布新歌的曲目单。门票预计下月开始销售，官方粉丝俱乐部会员可提前预购。',
      jp: 'Stray Kidsは、待望のワールドツアー「DOMINATE」を公式に発表しました。ソウルを皮切りに、ツアーはアジア、北米、ヨーロッパの15カ国をカバーします。グループは、壮大なパフォーマンスと、最大のヒット曲や未発表の新曲を含むセットリストで、エネルギッシュなショーを約束しています。チケットは来月発売予定で、公式ファンクラブメンバーは先行予約アクセスが可能です。',
      tw: 'Stray Kids 正式宣布了他們備受期待的「DOMINATE」世界巡演。巡演將從首爾開始，覆蓋亞洲、北美和歐洲的15個國家。該團體承諾將帶來一場充滿活力的演出，包括壯觀的表演和包含他們最熱門歌曲及未發布新歌的曲目單。門票預計下月開始銷售，官方粉絲俱樂部會員可提前預購。',
    },
    image: { url: 'https://picsum.photos/seed/107/600/400', hint: 'pop star' },
    createdAt: '2024-07-21T15:00:00Z',
    category: 'K-Pop News',
  },
  // K-BEAUTY TRENDS POSTS
  {
    id: 'trend-1',
    title: {
        en: 'The "Glass Skin" Evolution: Introducing "Glazed Donut" Skin',
        ch: '“玻璃肌”的演变：介绍“琉璃甜甜圈”肌',
        jp: '「グラススキン」の進化：「グレーズドドーナツ」スキンのご紹介',
        tw: '「玻璃肌」的演變：介紹「琉璃甜甜圈」肌'
    },
    excerpt: {
        en: 'Just when you thought "glass skin" was the pinnacle of dewy complexions, K-Beauty has a new obsession: "glazed donut" skin.',
        ch: '正当你以为“玻璃肌”是水润肤色的巅峰时，韩妆界又有了新宠：“琉璃甜甜圈”肌。',
        jp: '「グラススキン」が露のような肌の頂点だと思っていた矢先、Kビューティーには新たな夢中があります：「グレーズドドーナツ」スキンです。',
        tw: '正當你以為「玻璃肌」是水潤膚色的巔峰時，韓妝界又有了新寵：「琉璃甜甜圈」肌。'
    },
    content: {
      en: 'Just when you thought "glass skin" was the pinnacle of dewy complexions, the K-Beauty world has introduced a new obsession: "glazed donut" skin. This trend takes the glow factor to the next level, focusing on intense hydration and layering occlusive products to achieve a radiant, almost wet look. The key is to use a nourishing routine that includes hydrating toners, essences, serums, and a rich moisturizer or face oil to seal everything in. Think luminous, plump, and irresistibly glossy.',
      ch: '正当你以为“玻璃肌”是水润肤色的巅峰时，韩妆界又有了新宠：“琉璃甜甜圈”肌。这一趋势将光泽度提升到了一个新的水平，专注于强效补水和层叠封闭性产品，以实现容光焕发、近乎湿润的外观。关键是使用包括补水爽肤水、精华、精华液和丰富保湿霜或面油在内的滋养程序来锁住所有水分。想象一下，光彩照人、丰满且不可抗拒的光泽。',
      jp: '「グラススキン」が露のような肌の頂点だと思っていた矢先、Kビューティーの世界は新たな夢中を紹介しました：「グレーズドドーナツ」スキンです。このトレンドは輝きを次のレベルに引き上げ、強烈な水分補給と閉塞性製品の重ね付けに焦点を当て、輝く、ほとんど濡れたような外観を実現します。重要なのは、水分補給トナー、エッセンス、セラム、そしてすべてを閉じ込めるための濃厚な保湿剤やフェイスオイルを含む栄養豊富なルーチンを使用することです。輝き、ふっくら、そしてたまらなく光沢のある肌を考えてみてください。',
      tw: '正當你以為「玻璃肌」是水潤膚色的巔峰時，韓妝界又有了新寵：「琉璃甜甜圈」肌。這一趨勢將光澤度提升到了一個新的水平，專注於強效補水和層疊封閉性產品，以實現容光煥發、近乎濕潤的外觀。關鍵是使用包括補水化妝水、精華、精華液和豐富保濕霜或面油在內的滋養程序來鎖住所有水分。想像一下，光彩照人、豐滿且不可抗拒的光澤。',
    },
    image: { url: 'https://picsum.photos/seed/108/600/400', hint: 'beauty products' },
    createdAt: '2024-07-22T11:00:00Z',
    category: 'K-Beauty Trend',
  },
  {
    id: 'trend-2',
    title: {
        en: "Sunscreen Sticks Are The Must-Have Item of 2024",
        ch: "2024年必备单品：防晒棒",
        jp: "2024年の必須アイテム：日焼け止めスティック",
        tw: "2024年必備單品：防曬棒"
    },
    excerpt: {
        en: "Sun protection has never been more convenient. Sunscreen sticks are taking the K-Beauty market by storm.",
        ch: "防晒从未如此方便。防晒棒正在席卷韩妆市场。",
        jp: "日焼け対策がこれまで以上に便利になりました。日焼け止めスティックがKビューティー市場を席巻しています。",
        tw: "防曬從未如此方便。防曬棒正在席捲韓妝市場。"
    },
    content: {
      en: 'Sun protection has never been more convenient. Sunscreen sticks are taking the K-Beauty market by storm, and for good reason. These solid sunscreens are compact, travel-friendly, and make reapplication a breeze—no more messy hands! They glide on smoothly over makeup without disrupting it, making them perfect for on-the-go touch-ups. Formulations have also improved, with many offering a matte or satin finish, so you can stay protected without the greasy feeling.',
      ch: '防晒从未如此方便。防晒棒正在席卷韩妆市场，这是有充分理由的。这些固体防晒霜小巧、便于携带，让补涂变得轻而易举——不再有脏手！它们可以顺滑地涂抹在妆容上而不会破坏妆容，非常适合随时补妆。配方也得到了改进，许多产品提供哑光或缎面效果，因此您可以在不受油腻感困扰的情况下保持防护。',
      jp: '日焼け対策がこれまで以上に便利になりました。日焼け止めスティックがKビューティー市場を席巻しており、それには正当な理由があります。これらの固形日焼け止めはコンパクトで旅行にやさしく、再適用が簡単です—もう手が汚れることはありません！メイクの上からスムーズに滑り、それを崩さないため、外出先でのタッチアップに最適です。配合も改善され、多くがマットまたはサテン仕上げを提供しているため、べたつかずに保護を維持できます。',
      tw: '防曬從未如此方便。防曬棒正在席捲韓妝市場，這是有充分理由的。這些固體防曬霜小巧、便於攜帶，讓補塗變得輕而易舉——不再有髒手！它們可以順滑地塗抹在妝容上而不會破壞妝容，非常適合隨時補妝。配方也得到了改進，許多產品提供啞光或緞面效果，因此您可以在不受油膩感困擾的情況下保持防護。',
    },
    image: { url: 'https://picsum.photos/seed/109/600/400', hint: 'skincare model' },
    createdAt: '2024-07-21T12:00:00Z',
    category: 'K-Beauty Trend',
  },
  {
    id: 'trend-3',
    title: {
        en: "Fermented Ingredients: The Ancient Secret to Healthy Skin",
        ch: "发酵成分：健康肌肤的古老秘诀",
        jp: "発酵成分：健康な肌への古代の秘訣",
        tw: "發酵成分：健康肌膚的古老秘訣"
    },
    excerpt: {
        en: "Fermentation isn't just for kimchi and kombucha. In K-Beauty, fermented ingredients like rice water and soybeans are superstar ingredients.",
        ch: "发酵不仅适用于泡菜和康普茶。在韩妆中，像米水和大豆这样的发酵成分是超级明星成分。",
        jp: "発酵はキムチやコンブチャだけのものではありません。Kビューティーでは、米水や大豆などの発酵成分がスーパースター成分です。",
        tw: "發酵不僅適用於泡菜和康普茶。在韓妝中，像米水和大豆這樣的發酵成分是超級明星成分。"
    },
    content: {
      en: "Fermentation isn't just for kimchi and kombucha. In K-Beauty, fermented ingredients like rice water, soybeans, and galactomyces are superstar ingredients. The fermentation process breaks down molecules, making them smaller and easier for the skin to absorb. This enhances their potency, leading to brighter, firmer, and more hydrated skin. Look for essences and serums rich in these fermented powerhouses to supercharge your skincare routine.",
      ch: '发酵不仅适用于泡菜和康普茶。在韩妆中，像米水、大豆和半乳糖酵母菌这样的发酵成分是超级明星成分。发酵过程分解分子，使其更小，更容易被皮肤吸收。这增强了它们的效力，使皮肤更明亮、更紧致、更水润。寻找富含这些发酵强效成分的精华和精华液，为您的护肤程序增添动力。',
      jp: '発酵はキムチやコンブチャだけのものではありません。Kビューティーでは、米水、大豆、ガラクトミセスなどの発酵成分がスーパースター成分です。発酵プロセスは分子を分解し、それらをより小さく、肌に吸収しやすくします。これにより、それらの効力が高まり、より明るく、より引き締まった、より水分補給された肌につながります。これらの発酵パワーハウスが豊富なエッセンスやセラムを探して、スキンケアルーチンを強化しましょう。',
      tw: '發酵不僅適用於泡菜和康普茶。在韓妝中，像米水、大豆和半乳糖酵母菌這樣的發酵成分是超級明星成分。發酵過程分解分子，使其更小，更容易被皮膚吸收。這增強了它們的效力，使皮膚更明亮、更緊緻、更水潤。尋找富含這些發酵強效成分的精華和精華液，為您的護膚程序增添動力。',
    },
    image: { url: 'https://picsum.photos/seed/110/600/400', hint: 'skincare ingredients' },
    createdAt: '2024-07-20T14:00:00Z',
    category: 'K-Beauty Trend',
  },
  {
    id: 'trend-4',
    title: {
        en: "The Rise of Vegan & Cruelty-Free K-Beauty",
        ch: "纯素和无残忍韩妆的兴起",
        jp: "ビーガン＆クルエルティフリーKビューティーの台頭",
        tw: "純素和無殘忍韓妝的興起"
    },
    excerpt: {
        en: "As consumers become more conscious of their choices, the demand for ethical beauty products is soaring, and K-Beauty brands are responding.",
        ch: "随着消费者对选择越来越有意识，对道德美容产品的需求正在飙升，韩妆品牌正在做出回应。",
        jp: "消費者が選択にもっと意識的になるにつれて、倫理的な美容製品への需要が急増しており、Kビューティーブランドが対応しています。",
        tw: "隨著消費者對選擇越來越有意識，對道德美容產品的需求正在飆升，韓妝品牌正在做出回應。"
    },
    content: {
      en: "As consumers become more conscious of their choices, the demand for ethical beauty products is soaring. K-Beauty brands are responding in a big way, with a growing number of vegan and cruelty-free certifications. These brands prove that you don't have to compromise on efficacy to be kind to animals and the planet. From gentle cleansers to vibrant makeup, you can now build a complete, high-performance K-Beauty routine that aligns with your values.",
      ch: '随着消费者对选择越来越有意识，对道德美容产品的需求正在飙升。韩妆品牌正在做出巨大回应，越来越多的品牌获得了纯素和无残忍认证。这些品牌证明，您不必为了对动物和地球友善而牺牲功效。从温和的洁面乳到充满活力的彩妆，您现在可以建立一个符合您价值观的完整、高性能的韩妆程序。',
      jp: '消費者が自分の選択にもっと意識的になるにつれて、倫理的な美容製品への需要が急増しています。Kビューティーブランドは、ビーガンおよびクルエルティフリー認証の数が増加しており、大きな反響を呼んでいます。これらのブランドは、動物や地球に優しくあるために効果を妥協する必要がないことを証明しています。優しいクレンザーから鮮やかなメイクアップまで、今ではあなたの価値観に沿った、完全で高性能なKビューティールーチンを構築できます。',
      tw: '隨著消費者對選擇越來越有意識，對道德美容產品的需求正在飆升。韓妝品牌正在做出巨大回應，越來越多的品牌獲得了純素和無殘忍認證。這些品牌證明，您不必為了對動物和地球友善而犧牲功效。從溫和的潔面乳到充滿活力的彩妝，您現在可以建立一個符合您價值觀的完整、高性能的韓妝程序。',
    },
    image: { url: 'https://picsum.photos/seed/111/600/400', hint: 'natural cosmetics' },
    createdAt: '2024-07-19T16:00:00Z',
    category: 'K-Beauty Trend',
  },
];


const reviews: Review[] = [
  { id: 'rev-1', locationId: 'loc-1', author: 'ARMY_Fan123', rating: 5, text: 'Amazing experience! A must-visit for any HYBE group fan.', createdAt: '2024-07-21T12:00:00Z' },
  { id: 'rev-2', locationId: 'loc-1', author: 'SeoulExplorer', rating: 4, text: 'Really cool exhibits, but the gift shop line was too long.', createdAt: '2024-07-21T13:00:00Z' },
  { id: 'rev-3', locationId: 'loc-2', author: 'BeautyGuru', rating: 5, text: 'Heaven for skincare lovers! I spent a fortune here.', createdAt: '2024-07-20T18:00:00Z' },
  { id: 'rev-4', locationId: 'loc-4', author: 'Foodie_Kim', rating: 4, text: 'The Pandoro was delicious, but the place is so crowded.', createdAt: '2024-07-19T10:00:00Z' },
  { id: 'rev-5', locationId: 'loc-5', author: 'Grace L.', rating: 5, text: 'Very professional and clean clinic. The staff were helpful and spoke English well.', createdAt: '2024-07-18T15:00:00Z' },
  { id: 'rev-6', locationId: 'loc-1', author: 'KpopLover', rating: 3, text: 'it was okay. kinda boring. gift shop expensive.', createdAt: '2024-07-22T09:00:00Z' },
];

export const getLocations = async (): Promise<Location[]> => {
  return locations;
};

export const getLocationById = async (id: string): Promise<Location | undefined> => {
  return locations.find((loc) => loc.id === id);
};

export const getPosts = async (): Promise<Post[]> => {
  return posts;
};

export const getPostById = async (id: string): Promise<Post | undefined> => {
  return posts.find((post) => post.id === id);
};

export const getReviewsByLocationId = async (locationId: string): Promise<Review[]> => {
  return reviews.filter((review) => review.locationId === locationId);
};

export const getPostsByCategory = async (category: PostCategory) => {
    return posts.filter(post => post.category === category);
}

// Functions for News and Trends pages
export const getNewsFeed = async (lang: Language = 'en') => {
  const newsPosts = await getPostsByCategory('K-Pop News');
    return newsPosts.map(post => ({
        id: post.id,
        title: post.title[lang] || post.title.en,
        excerpt: post.excerpt[lang] || post.excerpt.en,
        image: post.image
    }))
};

export const getTrendsFeed = async (lang: Language = 'en') => {
  const trendsPosts = await getPostsByCategory('K-Beauty Trend');
    return trendsPosts.map(post => ({
        id: post.id,
        title: post.title[lang] || post.title.en,
        excerpt: post.excerpt[lang] || post.excerpt.en,
        image: post.image
    }))
};
