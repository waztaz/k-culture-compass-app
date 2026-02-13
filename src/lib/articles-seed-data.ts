import type { Article } from './types';
import { Timestamp } from 'firebase/firestore';
import { PlaceHolderImages } from './placeholder-images';

const kpopNews1Image = PlaceHolderImages.find(p => p.id === 'kpop-news-1')!;
const kpopNews2Image = PlaceHolderImages.find(p => p.id === 'kpop-news-2')!;
const kpopNews3Image = PlaceHolderImages.find(p => p.id === 'kpop-news-3')!;

const kbeautyTrend1Image = PlaceHolderImages.find(p => p.id === 'kbeauty-trend-1')!;
const kbeautyTrend2Image = PlaceHolderImages.find(p => p.id === 'kbeauty-trend-2')!;
const kbeautyTrend3Image = PlaceHolderImages.find(p => p.id === 'kbeauty-trend-3')!;

const locSpotlight1Image = PlaceHolderImages.find(p => p.id === 'loc-spotlight-1')!;
const locSpotlight2Image = PlaceHolderImages.find(p => p.id === 'loc-spotlight-2')!;
const locSpotlight3Image = PlaceHolderImages.find(p => p.id === 'loc-spotlight-3')!;
const locSpotlight4Image = PlaceHolderImages.find(p => p.id === 'loc-spotlight-4')!;
const locSpotlight5Image = PlaceHolderImages.find(p => p.id === 'loc-spotlight-5')!;

export const seedArticles: Article[] = [
  // K-Pop News
  {
    id: 'seed-kpop-1',
    category: 'K-Pop News',
    title: {
      en: 'Global K-Pop Sensation "Starlight" Announces World Tour',
      ch: '全球K-Pop巨星“Starlight”宣布世界巡演',
      jp: 'グローバルK-POPセンセーション「スターライト」がワールドツアーを発表',
      tw: '全球K-Pop巨星「Starlight」宣布世界巡演',
    },
    excerpt: {
      en: 'The chart-topping group will visit 20 cities across North America, Europe, and Asia, promising a spectacular show for their fans, the "Celestials".',
      ch: '这支顶级组合将访问北美、欧洲和亚洲的20个城市，为他们的粉丝“Celestials”带来一场壮观的演出。',
      jp: 'チャートトップのグループが北米、ヨーロッパ、アジアの20都市を訪問し、ファン「セレスティアルズ」に壮大なショーを約束します。',
      tw: '這支頂級組合將訪問北美、歐洲和亞洲的20個城市，為他們的粉絲「Celestials」帶來一場壯觀的演出。',
    },
    content: {
      en: 'In a move that has sent ripples of excitement across the globe, K-Pop superstars "Starlight" have officially announced their much-anticipated world tour, "Galaxy of Dreams." The tour is set to kick off in Seoul before heading to major cities including Los Angeles, London, and Tokyo. The group, known for their powerful performances and mesmerizing vocals, has promised a brand-new setlist and breathtaking stage production. Their global fanbase, affectionately known as the "Celestials," has already taken to social media to express their excitement, with tickets expected to sell out in minutes.',
      ch: 'K-Pop超级巨星“Starlight”正式宣布了他们备受期待的世界巡演“梦想的银河”，此举在全球范围内引起了兴奋的涟漪。巡演将在首尔拉开帷幕，然后前往洛杉矶、伦敦和东京等主要城市。该组合以其强大的表演和迷人的歌声而闻名，承诺将带来全新的曲目列表和惊人的舞台制作。他们被亲切地称为“Celestials”的全球粉丝群已经在社交媒体上表达了他们的兴奋之情，门票预计将在几分钟内售罄。',
      jp: 'K-POPスーパースター「スターライト」が、待望のワールドツアー「夢の銀河」を公式に発表し、世界中に興奮の波紋を広げています。ツアーはソウルを皮切りに、ロサンゼルス、ロンドン、東京などの主要都市を巡ります。パワフルなパフォーマンスと魅力的なボーカルで知られるこのグループは、全く新しいセットリストと息をのむようなステージプロダクションを約束しています。愛情を込めて「セレスティアルズ」として知られる彼らのグローバルなファンベースは、すでにソーシャルメディアで興奮を表明しており、チケットは数分で完売すると予想されています。',
      tw: 'K-Pop超級巨星「Starlight」正式宣布了他們備受期待的世界巡演「夢想的銀河」，此舉在全球範圍內引起了興奮的漣漪。巡演將在首爾拉開帷幕，然後前往洛杉磯、倫敦和東京等主要城市。該組合以其強大的表演和迷人的歌聲而聞名，承諾將帶來全新的曲目列表和驚人的舞台製作。他們被親切地稱為「Celestials」的全球粉絲群已經在社交媒體上表達了他們的興奮之情，門票預計將在幾分鐘内售罄。',
    },
    image: { url: kpopNews1Image.imageUrl, hint: kpopNews1Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-29T10:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'seed-kpop-2',
    category: 'K-Pop News',
    title: {
      en: 'Rookie Group "LUNA" Shatters Debut Album Sales Record',
      ch: '新人组合“LUNA”打破首张专辑销售记录',
      jp: '新人グループ「LUNA」がデビューアルバムの販売記録を更新',
      tw: '新人組合「LUNA」打破首張專輯銷售紀錄',
    },
    excerpt: {
      en: 'The five-member girl group LUNA has made history with their debut album "First Light," selling over 500,000 copies in its first week.',
      ch: '五人女子组合LUNA的首张专辑《First Light》在第一周就售出超过50万张，创造了历史。',
      jp: '5人組ガールズグループLUNAが、デビューアルバム「ファーストライト」で初週50万枚以上を売り上げ、歴史を刻みました。',
      tw: '五人女子組合LUNA的首張專輯《First Light》在第一周就售出超過50萬張，創造了歷史。',
    },
    content: {
      en: 'The K-Pop industry is buzzing with the arrival of "LUNA," a new girl group that has taken the world by storm. Their debut album, "First Light," has achieved a remarkable milestone, selling over half a million copies within its first week of release—a new record for a debut album. The group\'s title track, "Moonbeam," has also topped major domestic and international music charts. Fans are praising their fresh concept, synchronized choreography, and strong vocal abilities, heralding them as the next big thing in K-Pop.',
      ch: 'K-Pop业界因新女子组合“LUNA”的到来而沸腾，她们已经席卷了全世界。她们的首张专辑《First Light》取得了显著的里程碑，在发行第一周内销量超过五十万张——这是首张专辑的新纪录。该组合的主打歌《Moonbeam》也登上了国内外主要音乐排行榜的榜首。粉丝们赞扬她们清新的概念、同步的舞蹈和强大的演唱能力，预示她们将成为K-Pop的下一个大事件。',
      jp: 'K-POP業界は、世界を席巻した新しいガールズグループ「LUNA」の登場で沸いています。彼女たちのデビューアルバム「ファーストライト」は、リリース初週で50万枚以上を売り上げるという驚異的なマイルストーンを達成し、デビューアルバムの新記録を樹立しました。グループのタイトルトラック「ムーンビーム」も、国内外の主要な音楽チャートでトップに立っています。ファンは彼女たちの新鮮なコンセプト、シンクロした振り付け、そして力強いボーカル能力を称賛し、彼女たちをK-POPの次の大きな存在として歓迎しています。',
      tw: 'K-Pop業界因新女子組合「LUNA」的到來而沸騰，她們已經席捲了全世界。她們的首張專輯《First Light》取得了顯著的里程碑，在發行第一周內銷量超過五十萬張——這是首張專輯的新紀錄。該組合的主打歌《Moonbeam》也登上了國內外主要音樂排行榜的榜首。粉絲們讚揚她們清新的概念、同步的舞蹈和強大的演唱能力，預示她們將成為K-Pop的下一個大事件。',
    },
    image: { url: kpopNews2Image.imageUrl, hint: kpopNews2Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-28T09:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'seed-kpop-3',
    category: 'K-Pop News',
    title: {
      en: "Solo Artist 'J.Min' Comeback Breaks Streaming Records",
      ch: "Solo歌手'J.Min'回归打破流媒体记录",
      jp: "ソロアーティスト「J.Min」のカムバックがストリーミング記録を更新",
      tw: "Solo歌手'J.Min'回歸打破流媒體記錄",
    },
    excerpt: {
      en: "J.Min's new single 'Eclipse' has surpassed 100 million streams in just three days, proving his global popularity.",
      ch: "J.Min的新单曲'Eclipse'在短短三天内就突破了1亿流媒体播放量，证明了他的全球人气。",
      jp: "J.Minのニューシングル「Eclipse」はわずか3日間で1億ストリームを突破し、彼の世界的な人気を証明しました。",
      tw: "J.Min的新單曲'Eclipse'在短短三天內就突破了1億流媒體播放量，證明了他的全球人氣。",
    },
    content: {
      en: "Solo artist J.Min has made a stunning return to the music scene with his latest single, 'Eclipse.' The song, a moody R&B track with a captivating music video, has dominated streaming platforms worldwide. Achieving 100 million streams in a record-breaking 72 hours, J.Min has solidified his status as a global force. Fans are praising the artist's mature sound and artistic evolution. The comeback also includes a new mini-album, 'Shadows & Light,' which is receiving critical acclaim for its lyrical depth and production quality.",
      ch: "Solo歌手J.Min携最新单曲'Eclipse'惊艳回归音乐界。这首歌曲是一首忧郁的R&B曲目，配有引人入胜的音乐视频，在全球流媒体平台上占据主导地位。在创纪录的72小时内达到1亿流媒体播放量，J.Min巩固了自己作为全球力量的地位。粉丝们赞扬这位艺人成熟的声音和艺术上的进化。这次回归还包括一张新的迷你专辑'Shadows & Light'，该专辑因其抒情的深度和制作质量而备受好评。",
      jp: "ソロアーティストJ.Minは、最新シングル「Eclipse」で音楽シーンに見事なカムバックを果たしました。この曲は、魅力的なミュージックビデオを備えたムーディーなR&Bトラックで、世界中のストリーミングプラットフォームを席巻しています。記録破りの72時間で1億ストリーミングを達成し、J.Minは世界的な影響力を持つアーティストとしての地位を固めました。ファンは、アーティストの成熟したサウンドと芸術的な進化を称賛しています。このカムバックには、叙情的な深さと制作品質で批評家から絶賛されている新しいミニアルバム「Shadows & Light」も含まれています。",
      tw: "Solo歌手J.Min攜最新單曲'Eclipse'驚豔回歸音樂界。這首歌曲是一首憂鬱的R&B曲目，配有引人入勝的音樂視頻，在全球流媒體平台上佔據主導地位。在創紀錄的72小時內達到1億流媒體播放量，J.Min鞏固了自己作為全球力量的地位。粉絲們讚揚這位藝人成熟的聲音和藝術上的進化。這次回歸還包括一張新的迷你專輯'Shadows & Light'，該專輯因其抒情的深度和製作質量而備受好評。",
    },
    image: { url: kpopNews3Image.imageUrl, hint: kpopNews3Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-25T11:00:00Z').getTime() / 1000), 0),
  },

  // K-Beauty Trends
  {
    id: 'seed-kbeauty-1',
    category: 'K-Beauty Trend',
    title: {
      en: 'The "Glass Skin" Phenomenon: Achieving a Flawless, Dewy Complexion',
      ch: '“玻璃肌”现象：打造无瑕水润的肤色',
      jp: '「グラススキン」現象：完璧でみずみずしい肌を手に入れる',
      tw: '「玻璃肌」現象：打造無瑕水潤的膚色',
    },
    excerpt: {
      en: 'Dive into the secrets behind the ultimate K-Beauty goal: skin so luminous and clear it looks like glass. We break down the steps and products you need.',
      ch: '深入探讨终极K-Beauty目标背后的秘密：让肌肤光彩照人，清澈如玻璃。我们为您分解所需的步骤和产品。',
      jp: '究極のKビューティーの目標である、ガラスのように輝き、透明感のある肌の秘密に迫ります。必要なステップと製品を解説します。',
      tw: '深入探討終極K-Beauty目標背後的秘密：讓肌膚光彩照人，清澈如玻璃。我們為您分解所需的步驟和產品。',
    },
    content: {
      en: 'The quest for "glass skin" continues to dominate the beauty world. This K-Beauty trend refers to achieving a complexion that is exceptionally smooth, poreless, and luminous, much like a pane of glass. It\'s not about a single product, but a multi-step skincare regimen focused on deep hydration and gentle exfoliation. Key steps include double cleansing, using a hydrating toner, applying essences or serums packed with ingredients like hyaluronic acid and niacinamide, and sealing everything in with a nourishing moisturizer. The result is a healthy, radiant glow that comes from within, rather than from makeup.',
      ch: '对“玻璃肌”的追求继续主导着美容界。这一K-Beauty潮流指的是获得一种异常光滑、无毛孔、光彩照人的肤色，就像一块玻璃。这并非关乎单一产品，而是一个多步骤的护肤方案，专注于深层补水和温和去角质。关键步骤包括双重清洁，使用保湿爽肤水，涂抹富含透明质酸和烟酰胺等成分的精华液，并用滋养保湿霜锁住所有水分。其结果是一种由内而外散发的健康、容光焕发的光泽，而非来自化妆。',
      jp: '「グラススキン」への探求は、美容界を席巻し続けています。このKビューティーのトレンドは、まるでガラスのように非常に滑らかで、毛穴がなく、輝くような肌を手に入れることを指します。それは単一の製品ではなく、深い水分補給と穏やかな角質除去に焦点を当てた多段階のスキンケアレジメンです。重要なステップには、ダブルクレンジング、保湿トナーの使用、ヒアルロン酸やナイアシンアミドなどの成分が詰まったエッセンスやセラムの塗布、そして栄養価の高い保湿剤で全てを閉じ込めることが含まれます。その結果、メイクではなく内側から来る健康的で輝くような輝きが生まれます。',
      tw: '對「玻璃肌」的追求繼續主導著美容界。這一K-Beauty潮流指的是獲得一種異常光滑、無毛孔、光彩照人的膚色，就像一塊玻璃。這並非關乎單一產品，而是一個多步驟的護膚方案，專注於深層補水和溫和去角質。關鍵步驟包括雙重清潔，使用保濕爽膚水，塗抹富含透明質酸和菸鹼醯胺等成分的精華液，並用滋養保濕霜鎖住所有水分。其結果是一種由內而外散發的健康、容光煥發的光澤，而非來自化妝。',
    },
    image: { url: kbeautyTrend1Image.imageUrl, hint: kbeautyTrend1Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-27T12:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'seed-kbeauty-2',
    category: 'K-Beauty Trend',
    title: {
      en: 'Fermented Ingredients: The Ancient Secret to Modern Skincare',
      ch: '发酵成分：现代护肤的古老秘诀',
      jp: '発酵成分：現代スキンケアの古代の秘密',
      tw: '發酵成分：現代護膚的古老秘訣',
    },
    excerpt: {
      en: 'From kimchi to kombucha, fermentation is a cornerstone of Korean culture, and its benefits extend to skincare. Discover why fermented ingredients are a must-try.',
      ch: '从泡菜到康普茶，发酵是韩国文化的基石，其益处也延伸到护肤领域。了解为什么发酵成分是必试之选。',
      jp: 'キムチからコンブチャまで、発酵は韓国文化の礎であり、その利点はスキンケアにも及びます。発酵成分が必見である理由を発見してください。',
      tw: '從泡菜到康普茶，發酵是韓國文化的基石，其益處也延伸到護膚領域。了解為什麼發酵成分是必試之選。',
    },
    content: {
      en: 'Fermentation isn\'t just for food; it\'s a transformative process in K-Beauty that supercharges ingredients. During fermentation, microorganisms break down molecules into smaller, more potent forms that are easier for the skin to absorb. This process can increase the concentration of antioxidants and amino acids, leading to enhanced hydration, improved skin texture, and a stronger skin barrier. Popular fermented ingredients include rice water, soybeans, and various botanicals. Brands are increasingly incorporating these powerful ingredients into their formulations, offering products that deliver visible results.',
      ch: '发酵不仅用于食品；它在K-Beauty中是一个能增强成分功效的变革过程。在发酵过程中，微生物将分子分解成更小、更有效的形式，使皮肤更容易吸收。这个过程可以增加抗氧化剂和氨基酸的浓度，从而增强保湿、改善皮肤质地和加强皮肤屏障。流行的发酵成分包括米水、大豆和各种植物。品牌越来越多地将这些强大成分融入其配方中，提供能带来显著效果的产品。',
      jp: '発酵は食品だけのものではありません。それは、成分を強化するKビューティーにおける変革的なプロセスです。発酵中、微生物は分子をより小さく、より強力な形に分解し、肌が吸収しやすくなります。このプロセスは、抗酸化物質とアミノ酸の濃度を高め、水分の向上、肌の質感の改善、そして肌バリアの強化につながります。人気のある発酵成分には、米水、大豆、および様々な植物が含まれます。ブランドは、これらの強力な成分を配合物にますます取り入れており、目に見える結果をもたらす製品を提供しています。',
      tw: '發酵不僅用於食品；它在K-Beauty中是一個能增強成分功效的變革過程。在發酵過程中，微生物將分子分解成更小、更有效的形式，使皮膚更容易吸收。這個過程可以增加抗氧化劑和氨基酸的濃度，從而增強保濕、改善皮膚質地和加強皮膚屏障。流行的發酵成分包括米水、大豆和各種植物。品牌越來越多地將這些強大成分融入其配方中，提供能帶來顯著效果的產品。',
    },
    image: { url: kbeautyTrend2Image.imageUrl, hint: kbeautyTrend2Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-26T15:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'seed-kbeauty-3',
    category: 'K-Beauty Trend',
    title: {
      en: 'Sunscreen Sticks: The Ultimate On-the-Go Sun Protection',
      ch: '防晒棒：终极便携防晒选择',
      jp: 'サンスクリーンスティック：究極の携帯用日焼け止め',
      tw: '防曬棒：終極便攜防曬選擇',
    },
    excerpt: {
      en: 'Convenient, mess-free, and perfect for reapplication, sunscreen sticks are the hottest K-Beauty item for summer.',
      ch: '方便、无 messy、适合补涂，防晒棒是夏季最热门的K-Beauty单品。',
      jp: '便利で、汚れず、再塗布に最適なサンスクリーンスティックは、夏に最もホットなKビューティーアイテムです。',
      tw: '方便、無髒亂、適合補塗，防曬棒是夏季最熱門的K-Beauty單品。',
    },
    content: {
      en: "As sun protection becomes an increasingly non-negotiable step in skincare, K-Beauty brands are innovating to make it easier than ever. Enter the sunscreen stick: a solid, balm-like formula in a twist-up tube. These sticks are praised for their portability and ease of use, allowing for quick, hygienic reapplication over makeup without any mess. Formulated with skin-loving ingredients and offering broad-spectrum protection, they are becoming a handbag essential for beauty enthusiasts everywhere. From matte finishes to dewy glows, there is a sun stick for every skin type.",
      ch: "随着防晒成为护肤中越来越不可或缺的一步，K-Beauty品牌正在创新，使其比以往任何时候都更容易。进入防晒棒的世界：一种固体的、类似香膏的配方，装在旋出式管中。这些防晒棒因其便携性和易用性而备受赞誉，可以快速、卫生地在妆容上重新涂抹，而不会弄脏。它们配方中含有对皮肤有益的成分，并提供广谱保护，正在成为各地美容爱好者的手袋必备品。从哑光效果到水润光泽，总有一款适合各种肤质的防晒棒。",
      jp: "日焼け止めがスキンケアの交渉の余地のないステップになるにつれて、Kビューティーブランドはこれまで以上にそれを容易にするために革新しています。サンスクリーンスティックの登場です。これは、ツイストアップチューブに入った固形のバーム状のフォーミュラです。これらのスティックは、その携帯性と使いやすさで賞賛されており、メイクの上からでも汚れることなく、迅速かつ衛生的に再塗布できます。肌に優しい成分で処方され、広域スペクトルの保護を提供するこれらは、世界中の美容愛好家にとってハンドバッグの必需品になりつつあります。マットな仕上がりから露のような輝きまで、あらゆる肌タイプに対応するサンスティックがあります。",
      tw: "隨著防曬成為護膚中越來越不可或缺的一步，K-Beauty品牌正在創新，使其比以往任何時候都更容易。進入防曬棒的世界：一種固體的、類似香膏的配方，裝在旋出式管中。這些防曬棒因其便攜性和易用性而備受讚譽，可以快速、衛生地在妝容上重新塗抹，而不會弄髒。它們配方中含有對皮膚有益的成分，並提供廣譜保護，正在成為各地美容愛好者的手袋必備品。從啞光效果到水潤光澤，總有一款適合各種膚質的防曬棒。",
    },
    image: { url: kbeautyTrend3Image.imageUrl, hint: kbeautyTrend3Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-24T14:00:00Z').getTime() / 1000), 0),
  },

  // Location Spotlights
  {
    id: 'post-1',
    category: 'Location Spotlight',
    locationId: 'loc-1',
    title: {
      en: 'HYBE INSIGHT: A Deep Dive into the Heart of K-Pop',
      ch: 'HYBE INSIGHT：深入K-Pop的心脏',
      jp: 'HYBE INSIGHT：K-POPの中心への深いダイブ',
      tw: 'HYBE INSIGHT：深入K-Pop的心臟',
    },
    excerpt: {
      en: 'Explore the immersive museum dedicated to the artists and music of HYBE, the powerhouse behind BTS and other global acts.',
      ch: '探索致力于HYBE艺术家和音乐的沉浸式博物馆，HYBE是BTS等全球知名艺人背后的强大公司。',
      jp: 'BTSや他のグローバルなアーティストを支えるHYBEのアーティストと音楽に捧げられた没入型ミュージアムを探検してください。',
      tw: '探索致力於HYBE藝術家和音樂的沉浸式博物館，HYBE是BTS等全球知名藝人背後的強大公司。',
    },
    content: {
      en: 'Located in the heart of Seoul, HYBE INSIGHT is more than just a museum; it\'s a pilgrimage site for K-Pop fans. The space offers a multi-sensory experience, allowing visitors to see, hear, and even feel the music of HYBE\'s artists. From exclusive behind-the-scenes footage to interactive exhibits and artist-used equipment, it provides an unparalleled look into the world of K-Pop production. A must-visit for any fan looking to understand the artistry and dedication behind their favorite groups.',
      ch: 'HYBE INSIGHT位于首尔市中心，不仅仅是一个博物馆，更是K-Pop粉丝的朝圣地。这个空间提供多感官体验，让游客可以看到、听到甚至感受到HYBE艺术家的音乐。从独家的幕后花絮到互动展览和艺人使用过的设备，它为K-Pop制作世界提供了无与伦比的视角。对于任何希望了解自己喜爱团体背后的艺术性和奉献精神的粉丝来说，这里是必游之地。',
      jp: 'ソウルの中心部に位置するHYBE INSIGHTは、単なる博物館ではありません。K-POPファンの巡礼地です。このスペースは、訪問者がHYBEのアーティストの音楽を見たり、聞いたり、感じたりできる多感覚体験を提供します。独占的な舞台裏の映像からインタラクティブな展示、アーティストが使用した機材まで、K-POP制作の世界を比類のない視点から見ることができます。お気に入りのグループの背後にある芸術性と献身を理解したいファンにとって、必見の場所です。',
      tw: 'HYBE INSIGHT位於首爾市中心，不僅僅是一個博物館，更是K-Pop粉絲的朝聖地。這個空間提供多感官體驗，讓遊客可以看到、聽到甚至感受到HYBE藝人的音樂。從獨家的幕後花絮到互動展覽和藝人使用過的設備，它為K-Pop製作世界提供了無與倫比的視角。對於任何希望了解自己喜愛團體背後的藝術性和奉獻精神的粉絲來說，這裡是必遊之地。',
    },
    image: { url: locSpotlight1Image.imageUrl, hint: locSpotlight1Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-23T10:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'post-2',
    category: 'Location Spotlight',
    locationId: 'loc-2',
    title: {
      en: 'Olive Young Myeongdong: A K-Beauty Paradise',
      ch: 'Olive Young 明洞：K-Beauty天堂',
      jp: 'オリーブヤング明洞：Kビューティーの楽園',
      tw: 'Olive Young 明洞：K-Beauty天堂',
    },
    excerpt: {
      en: 'The flagship store of Korea\'s most famous health and beauty retailer is a must-visit for any skincare or makeup enthusiast.',
      ch: '韩国最著名的健康与美容零售商的旗舰店是任何护肤或化妆爱好者的必游之地。',
      jp: '韓国で最も有名な健康・美容小売店の旗艦店は、スキンケアやメイクアップの愛好家なら必見です。',
      tw: '韓國最著名的健康與美容零售商的旗艦店是任何護膚或化妝愛好者的必遊之地。',
    },
    content: {
      en: 'Step into the Olive Young flagship store in Myeongdong and you\'ll find yourself in a world of endless beauty possibilities. Spread across multiple floors, this store stocks an extensive range of K-beauty products, from cult-favorite sheet masks to the latest makeup innovations. It\'s the perfect place to discover new brands, swatch products to your heart\'s content, and take advantage of the frequent sales and promotions. Staff are knowledgeable and often multilingual, ready to help you find the perfect products for your skin type and concerns.',
      ch: '走进明洞的Olive Young旗舰店，你会发现自己置身于一个充满无限美丽可能性的世界。这家店分布在多个楼层，备有各种K-beauty产品，从热门的面膜到最新的彩妆创新。这里是发现新品牌、尽情试用产品以及利用频繁的促销活动的理想之地。员工知识渊博，通常会说多种语言，随时准备帮助您找到适合您肤质和需求的完美产品。',
      jp: '明洞のオリーブヤング旗艦店に足を踏み入れると、無限の美の可能性の世界が広がっています。複数のフロアにまたがるこの店には、カルト的な人気のシートマスクから最新のメイクアップイノベーションまで、幅広いKビューティー製品が揃っています。新しいブランドを発見し、心ゆくまで製品を試し、頻繁に行われるセールやプロモーションを利用するのに最適な場所です。スタッフは知識が豊富で、多言語に対応していることが多く、あなたの肌のタイプや悩みにぴったりの製品を見つける手助けをしてくれます。',
      tw: '走進明洞的Olive Young旗艦店，你會發現自己置身於一個充滿無限美麗可能性的世界。這家店分佈在多個樓層，備有各種K-beauty產品，從熱門的面膜到最新的彩妝創新。這裡是發現新品牌、盡情試用產品以及利用頻繁的促銷活動的理想之地。員工知識淵博，通常會說多種語言，隨時準備幫助您找到適合您膚質和需求的完美產品。',
    },
    image: { url: locSpotlight2Image.imageUrl, hint: locSpotlight2Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-22T14:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'post-3',
    category: 'Location Spotlight',
    locationId: 'loc-3',
    title: {
      en: 'Music Korea: Your One-Stop Shop for K-Pop Albums',
      ch: 'Music Korea：您的一站式K-Pop专辑商店',
      jp: 'ミュージックコリア：K-POPアルバムのワンストップショップ',
      tw: 'Music Korea：您的一站式K-Pop專輯商店',
    },
    excerpt: {
      en: 'Located in Myeongdong, Music Korea is a heaven for K-Pop fans looking to get their hands on the latest albums and official merchandise.',
      ch: '位于明洞的Music Korea是K-Pop粉丝的天堂，他们希望购买最新的专辑和官方商品。',
      jp: '明洞に位置するミュージックコリアは、最新のアルバムや公式グッズを手に入れたいK-POPファンにとって天国です。',
      tw: '位於明洞的Music Korea是K-Pop粉絲的天堂，他們希望購買最新的專輯和官方商品。',
    },
    content: {
      en: 'If you\'re looking to expand your K-Pop collection, Music Korea is an essential stop. This store is renowned for its vast selection of albums, from major artists to rookie groups. You can often find pre-order benefits and store-exclusive photocards here. Beyond albums, they offer a wide range of official merchandise, including light sticks, apparel, and collectibles. The vibrant atmosphere, with music videos playing on large screens, makes shopping here an exciting experience for any fan.',
      ch: '如果您想扩大您的K-Pop收藏，Music Korea是必不可少的一站。这家店以其丰富的专辑选择而闻名，从主要艺术家到新人团体应有尽有。您经常可以在这里找到预购特典和店家专属小卡。除了专辑，他们还提供各种官方商品，包括应援棒、服装和收藏品。充满活力的氛围，大屏幕上播放着音乐视频，使在这里购物成为任何粉丝的激动人心的体验。',
      jp: 'K-POPコレクションを広げたいなら、ミュージックコリアは欠かせない立ち寄り先です。この店は、メジャーなアーティストから新人グループまで、膨大なアルバムの品揃えで有名です。ここでは、予約特典や店舗限定のフォトカードを見つけることができることがよくあります。アルバム以外にも、ライトスティック、アパレル、コレクターズアイテムなど、幅広い公式グッズを提供しています。大画面でミュージックビデオが流れる活気ある雰囲気は、ここでのショッピングをどんなファンにとってもエキサイティングな体験にします。',
      tw: '如果您想擴大您的K-Pop收藏，Music Korea是必不可少的一站。這家店以其豐富的專輯選擇而聞名，從主要藝術家到新人團體應有尽有。您經常可以在這裡找到預購特典和店家專屬小卡。除了專輯，他們還提供各種官方商品，包括應援棒、服裝和收藏品。充滿活力的氛圍，大屏幕上播放著音樂視頻，使在這裡購物成為任何粉絲的激動人心的體驗。',
    },
    image: { url: locSpotlight3Image.imageUrl, hint: locSpotlight3Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-21T11:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'post-4',
    category: 'Location Spotlight',
    locationId: 'loc-4',
    title: {
      en: 'Café Onion Anguk: Where Tradition Meets Trend',
      ch: 'Café Onion 安国：传统与潮流的交汇处',
      jp: 'カフェオニオン安国：伝統とトレンドが出会う場所',
      tw: 'Café Onion 安國：傳統與潮流的交匯處',
    },
    excerpt: {
      en: 'Enjoy artisanal coffee and delicious pastries in a beautifully preserved Hanok (traditional Korean house) at one of Seoul\'s most Instagrammable cafes.',
      ch: '在首尔最适合拍照的咖啡馆之一，于一座保存完好的韩屋（传统韩国房屋）中享用手工咖啡和美味糕点。',
      jp: 'ソウルで最もインスタ映えするカフェの一つで、美しく保存された韓屋（伝統的な韓国の家）で職人技のコーヒーとおいしいペストリーをお楽しみください。',
      tw: '在首爾最適合拍照的咖啡館之一，於一座保存完好的韓屋（傳統韓國房屋）中享用手工咖啡和美味糕點。',
    },
    content: {
      en: 'Café Onion in Anguk is a stunning example of old-meets-new. Set within a traditional Hanok, the cafe retains its historic architectural charm while offering a modern, trendy menu. It is famous for its unique pastries, especially the Pandoro, a mountain of powdered sugar-dusted bread. The atmosphere is serene and beautiful, with both floor seating in traditional rooms and table seating in a courtyard. It\'s a perfect spot to relax after exploring the nearby Gyeongbokgung Palace and Bukchon Hanok Village.',
      ch: '安国的Café Onion是新旧结合的绝佳典范。咖啡馆坐落在一座传统的韩屋中，保留了其历史建筑魅力，同时提供现代时尚的菜单。它以其独特的糕点而闻名，尤其是Pandoro，一种撒满糖粉的面包山。这里的气氛宁静而美丽，既有传统房间的席地座位，也有庭院里的桌席。在探索附近的景福宫和北村韩屋村后，这里是放松的理想场所。',
      jp: '安国のカフェオニオンは、古さと新しさが融合した見事な例です。伝統的な韓屋の中にあり、カフェは歴史的な建築の魅力を保ちながら、モダンでトレンディなメニューを提供しています。特に、パンドーロという、粉砂糖がたっぷりかかったパンの山が有名です。雰囲気は静かで美しく、伝統的な部屋の床座と中庭のテーブル席の両方があります。近くの景福宮や北村韓屋村を散策した後にリラックスするのに最適な場所です。',
      tw: '安國的Café Onion是新舊結合的絕佳典範。咖啡館坐落在一座傳統的韓屋中，保留了其歷史建築魅力，同時提供現代時尚的菜單。它以其獨特的糕點而聞名，尤其是Pandoro，一種撒滿糖粉的麵包山。這裡的氣氛寧靜而美麗，既有傳統房間的席地座位，也有庭院裡的桌席。在探索附近的景福宮和北村韓屋村後，這裡是放鬆的理想場所。',
    },
    image: { url: locSpotlight4Image.imageUrl, hint: locSpotlight4Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-20T16:00:00Z').getTime() / 1000), 0),
  },
  {
    id: 'post-5',
    category: 'Location Spotlight',
    locationId: 'loc-5',
    title: {
      en: 'Banobagi Dermatology: Trusted Skincare in Gangnam',
      ch: 'Banobagi皮肤科：江南值得信赖的护肤选择',
      jp: 'バノバギ皮膚科：江南で信頼されるスキンケア',
      tw: 'Banobagi皮膚科：江南值得信賴的護膚選擇',
    },
    excerpt: {
      en: 'Known for its appearance on the popular show "Let Me In," Banobagi is a leading dermatology and plastic surgery clinic in Seoul.',
      ch: '以在热门节目《Let Me In》中亮相而闻名，Banobagi是首尔领先的皮肤科和整形外科诊所。',
      jp: '人気番組「レットミーイン」への出演で知られるバノバギは、ソウルを代表する皮膚科および形成外科クリニックです。',
      tw: '以在熱門節目《Let Me In》中亮相而聞名，Banobagi是首爾領先的皮膚科和整形外科診所。',
    },
    content: {
      en: 'Located in the upscale Gangnam district, Banobagi is a household name in Korean skincare and cosmetic procedures. The clinic offers a wide range of non-invasive and invasive treatments, from facials and laser treatments to more complex surgeries. They are known for their state-of-the-art technology, experienced doctors, and personalized approach to patient care. Many international visitors come here for consultations and treatments, thanks to their reputation for quality and their dedicated services for foreign clients, including translators.',
      ch: 'Banobagi位于高档的江南区，是韩国家喻户晓的护肤和美容手术品牌。该诊所提供从面部护理和激光治疗到更复杂手术的各种非侵入性和侵入性治疗。他们以其最先进的技术、经验丰富的医生和个性化的患者护理方法而闻名。许多国际游客因其优质的声誉和为外国客户提供的包括翻译在内的专业服务而前来咨询和治疗。',
      jp: '高級な江南地区に位置するバノバギは、韓国のスキンケアと美容整形の分野で有名な名前です。クリニックでは、フェイシャルやレーザー治療からより複雑な手術まで、幅広い非侵襲的および侵襲的治療を提供しています。彼らは、最先端の技術、経験豊富な医師、そして患者ケアへの個別化されたアプローチで知られています。質の高い評判と、翻訳者を含む外国人クライアントへの献身的なサービスのおかげで、多くの海外からの訪問者が相談や治療のためにここを訪れます。',
      tw: 'Banobagi位於高檔的江南區，是韓國家喻戶曉的護膚和美容手術品牌。該診所提供從面部護理和激光治療到更複雜手術的各種非侵入性和侵入性治療。他們以其最先進的技術、經驗豐富的醫生和個性化的患者護理方法而聞名。許多國際遊客因其優質的聲譽和為外國客戶提供的包括翻譯在內的專業服務而前來諮詢和治療。',
    },
    image: { url: locSpotlight5Image.imageUrl, hint: locSpotlight5Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-19T13:00:00Z').getTime() / 1000), 0),
  }
];
