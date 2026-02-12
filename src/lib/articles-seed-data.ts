import type { Article } from './types';
import { Timestamp } from 'firebase/firestore';
import { PlaceHolderImages } from './placeholder-images';

const kpopNews3Image = PlaceHolderImages.find(p => p.id === 'kpop-news-3')!;
const kpopNews4Image = PlaceHolderImages.find(p => p.id === 'kpop-news-4')!;
const kpopNews5Image = PlaceHolderImages.find(p => p.id === 'kpop-news-5')!;

const kbeautyTrend3Image = PlaceHolderImages.find(p => p.id === 'kbeauty-trend-3')!;
const kbeautyTrend4Image = PlaceHolderImages.find(p => p.id === 'kbeauty-trend-4')!;
const kbeautyTrend5Image = PlaceHolderImages.find(p => p.id === 'kbeauty-trend-5')!;

export const seedArticles: Article[] = [
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
    image: { url: kpopNews3Image.imageUrl, hint: kpopNews3Image.imageHint },
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
    image: { url: kpopNews4Image.imageUrl, hint: kpopNews4Image.imageHint },
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
    image: { url: kpopNews5Image.imageUrl, hint: kpopNews5Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-25T11:00:00Z').getTime() / 1000), 0),
  },
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
    image: { url: kbeautyTrend3Image.imageUrl, hint: kbeautyTrend3Image.imageHint },
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
    image: { url: kbeautyTrend4Image.imageUrl, hint: kbeautyTrend4Image.imageHint },
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
    image: { url: kbeautyTrend5Image.imageUrl, hint: kbeautyTrend5Image.imageHint },
    createdAt: new Timestamp(Math.floor(new Date('2024-07-24T14:00:00Z').getTime() / 1000), 0),
  },
];
