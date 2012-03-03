total_line = 26;
basic_line = [0, 10]; // including n/m
dakuten_line = [11, 15]; // including handakuten
youon_line = [16, 25];


_ls = "a|i|u|e|o|ka|ki|ku|ke|ko|sa|si|su|se|so|ta|ci|cu|te|to|na|ni|nu|ne|no|ha|hi|hu|he|ho|ma|mi|mu|me|mo|ya|(i)|yu|(e)|yo|ra|ri|ru|re|ro|wa|(i)|(u)|(e)|wo|n/m|||||ga|gi|gu|ge|go|za|zi|zu|ze|zo|da|zi|zu|de|do|ba|bi|bu|be|bo|pa|pi|pu|pe|po|kya|kyu|kyo|||gya|gyu|gyo|||sha|shu|sho|||ja|ju|jo|||cha|chu|cho|||nya|nyu|nyo|||hya|hyu|hyo|||bya|byu|byo|||pya|pyu|pyo|||mya|myu|myo||";
_hs = "あ|い|う|え|お|か|き|く|け|こ|さ|し|す|せ|そ|た|ち|つ|て|と|な|に|ぬ|ね|の|は|ひ|ふ|へ|ほ|ま|み|む|め|も|や|(い)|ゆ|(え)|よ|ら|り|る|れ|ろ|わ|(い)|(う)|(え)|を|ん|||||が|ぎ|ぐ|げ|ご|ざ|じ|ず|ぜ|ぞ|だ|ぢ|づ|で|ど|ば|び|ぶ|べ|ぼ|ぱ|ぴ|ぷ|ぺ|ぽ|きゃ|きゅ|きょ|||ぎゃ|ぎゅ|ぎょ|||しゃ|しゅ|しょ|||じゃ|じゅ|じょ|||ちゃ|ちゅ|ちょ|||にゃ|にゅ|にょ|||ひゃ|ひゅ|ひょ|||びゃ|びゅ|びょ|||ぴゃ|ぴゅ|ぴょ|||みゃ|みゅ|みょ||";
_ks = "ア|イ|ウ|エ|オ|カ|キ|ク|ケ|コ|サ|シ|ス|セ|ソ|タ|チ|ツ|テ|ト|ナ|ニ|ヌ|ネ|ノ|ハ|ヒ|フ|ヘ|ホ|マ|ミ|ム|メ|モ|ヤ|(イ)|ユ|(エ)|ヨ|ラ|リ|ル|レ|ロ|ワ|(イ)|(ウ)|(エ)|ヲ|ン|||||ガ|ギ|グ|ゲ|ゴ|ザ|ジ|ズ|ゼ|ゾ|ダ|ヂ|ヅ|デ|ド|バ|ビ|ブ|ベ|ボ|パ|ピ|プ|ペ|ポ|キャ|キュ|キョ|||ギャ|ギュ|ギョ|||シャ|シュ|ショ|||ジャ|ジュ|ジョ|||チャ|チュ|チョ|||ニャ|ニュ|ニョ|||ヒャ|ヒュ|ヒョ|||ビャ|ビュ|ビョ|||ピャ|ピュ|ピョ|||ミャ|ミュ|ミョ||";
ls = _ls.split("|");
hs = _hs.split("|");
ks = _ks.split("|");

vs = [
    [
        // a
        {"kana":"あい", "meaning":"love", "latin":"a i"},
        {"kana":"いう", "meaning":"say", "latin":"i u"},
        {"kana":"うえ", "meaning":"up", "latin":"u e"},
        {"kana":"うお", "meaning":"fish", "latin":"u o"},
        {"kana":"おう", "meaning":"owe", "latin":"o u"},
        {"kana":"あう", "meaning":"meet", "latin":"a u"},
        {"kana":"おい", "meaning":"nephew", "latin":"o i"},
        {"kana":"おおい", "meaning":"many", "latin":"o o i"},
        {"kana":"いい", "meaning":"good", "latin":"i i"},
        {"kana":"あおい", "meaning":"blue", "latin":"a o i"},
        {"kana":"いえ", "meaning":"home", "latin":"i e"},
        {"kana":"いいえ", "meaning":"no", "latin":"i i e"},
        {"kana":"エア", "meaning":"air", "latin":"e a"}
    ],
    [
        // ka
        {"kana":"いか", "meaning":"squid", "latin":"i ga"},
        {"kana":"かう", "meaning":"buy", "latin":"ka u"},
        {"kana":"おく", "meaning":"place", "latin":"o gu"},
        {"kana":"ここ", "meaning":"here", "latin":"ko go"},
        {"kana":"きかい", "meaning":"opportunity", "latin":"ki ga i"},
        {"kana":"きこく", "meaning":"return", "latin":"ki go gu"},
        {"kana":"かかく", "meaning":"price", "latin":"ka ga gu"},
        {"kana":"かお", "meaning":"face", "latin":"ka o"},
        {"kana":"きく", "meaning":"listen", "latin":"ki gu"},
        {"kana":"きおく", "meaning":"memory", "latin":"ki o gu"},
        {"kana":"くけい", "meaning":"rectangle", "latin":"ku ge i"},
        {"kana":"くう", "meaning":"eat", "latin":"ku u"},
        {"kana":"くい", "meaning":"regret", "latin":"ku i"},
        {"kana":"いく", "meaning":"go", "latin":"i gu"},
        {"kana":"ココア", "meaning":"cocoa", "latin":"co go a"},
        {"kana":"けいき", "meaning":"economy", "latin":"ke i gi"},
        {"kana":"こえ", "meaning":"sound", "latin":"ko e"},
        {"kana":"こい", "meaning":"carp", "latin":"ko i"}
    ],
    [
        // sa
        {"kana":"あさ", "meaning":"morning", "latin":"a sa"},
        {"kana":"そこく", "meaning":"homeland", "latin":"so go gu"},
        {"kana":"すいか", "meaning":"watermelon", "latin":"su i ga"},
        {"kana":"せかい", "meaning":"world", "latin":"se ga i"},
        {"kana":"しあい", "meaning":"game", "latin":"si a i"},
        {"kana":"しお", "meaning":"salt", "latin":"si o"},
        {"kana":"アイス", "meaning":"ice", "latin":"a i su"},
        {"kana":"きせき", "meaning":"miracle", "latin":"ki se gi"},
        {"kana":"あさい", "meaning":"shallow", "latin":"a sa i"},
        {"kana":"きそ", "meaning":"basis", "latin":"ki so"},
        {"kana":"あす", "meaning":"tomorrow", "latin":"a su"},
        {"kana":"しき", "meaning":"four seasons", "latin":"si gi"},
        {"kana":"あし", "meaning":"foot", "latin":"a si"}
    ],
    [
        // ta
        {"kana":"おたく", "meaning":"home", "latin":"o da gu"},
        {"kana":"ちかてつ", "meaning":"subway", "latin":"ci ga de zu"},
        {"kana":"たたかう", "meaning":"fight", "latin":"ta da ga u"},
        {"kana":"きたい", "meaning":"expect", "latin":"ki da i"},
        {"kana":"とけい", "meaning":"watch", "latin":"to ge i"},
        {"kana":"ちかく", "meaning":"near", "latin":"ci ga gu"},
        {"kana":"ちしき", "meaning":"knowledge", "latin":"ci si gi"},
        {"kana":"あいて", "meaning":"opponent", "latin":"a i de"},
        {"kana":"てあし", "meaning":"hands and feet", "latin":"te a si"},
        {"kana":"あと", "meaning":"later", "latin":"a do"},
        {"kana":"いたい", "meaning":"painful", "latin":"i da i"},
        {"kana":"とち", "meaning":"land", "latin":"to ji"},
        {"kana":"いと", "meaning":"intent", "latin":"i do"},
        {"kana":"ちかう", "meaning":"pledge", "latin":"qi ga u"}
    ],
    [
        // na
        {"kana":"かない", "meaning":"wife", "latin":"ka na i"},
        {"kana":"なに", "meaning":"what", "latin":"na ni"},
        {"kana":"ねこ", "meaning":"cat", "latin":"ne go"},
        {"kana":"ぬの", "meaning":"cloth", "latin":"nu no"},
        {"kana":"あなた", "meaning":"you", "latin":"a na da"},
        {"kana":"のこす", "meaning":"leave", "latin":"no go su"},
        {"kana":"にあう", "meaning":"match", "latin":"ni a u"},
        {"kana":"きぬ", "meaning":"silk", "latin":"ki nu"},
        {"kana":"きたない", "meaning":"dirty", "latin":"ki da na i"},
        {"kana":"きのう", "meaning":"yesterday", "latin":"ki no u"},
        {"kana":"さかな", "meaning":"fish", "latin":"sa ga na"},
        {"kana":"なく", "meaning":"cry", "latin":"na gu"},
        {"kana":"にく", "meaning":"meat", "latin":"ni gu"},
        {"kana":"いぬ", "meaning":"dog", "latin":"i nu"},
        {"kana":"くに", "meaning":"country", "latin":"ku ni"},
        {"kana":"ぬく", "meaning":"pull", "latin":"nu gu"},
        {"kana":"きのこ", "meaning":"mushroom", "latin":"ki no go"}
    ],
    [
        // ha
        {"kana":"はい", "meaning":"yes", "latin":"ha i"}, 
        {"kana":"はこ", "meaning":"box", "latin":"ha go"},
        {"kana":"ひふ", "meaning":"skin", "latin":"hi hu"},
        {"kana":"ほそい", "meaning":"thin", "latin":"ho so i"},
        {"kana":"へいたい", "meaning":"soldier", "latin":"he i da i"},
        {"kana":"ふかい", "meaning":"deep", "latin":"hu ga i"},
        {"kana":"ひくい", "meaning":"low", "latin":"hi gu i"},
        {"kana":"ひかく", "meaning":"comparison", "latin":"hi ga gu"},
        {"kana":"はち", "meaning":"bee", "latin":"ha zi"},
        {"kana":"ひにち", "meaning":"daily", "latin":"hi ni zi"},
        {"kana":"きはく", "meaning":"spirit", "latin":"ki ha gu"},
        {"kana":"ひにく", "meaning":"irony", "latin":"hi ni gu"},
        {"kana":"へいき", "meaning":"weapon", "latin":"he i gi"},
        {"kana":"ほかの", "meaning":"other", "latin":"ho ga no"},
        {"kana":"ひと", "meaning":"people", "latin":"hi do"},
        {"kana":"ほす", "meaning":"dry", "latin":"ho su"},
        {"kana":"ひとこと", "meaning":"word", "latin":"hi do go do"},
        {"kana":"はくし", "meaning":"blank", "latin":"ha gu si"},
        {"kana":"はついく", "meaning":"development", "latin":"ha zu i gu"},
        {"kana":"はかせ", "meaning":"doctor", "latin":"ha ga se"},
        {"kana":"ひこうき", "meaning":"airplane", "latin":"hi go u gi"},
        {"kana":"ひさしい", "meaning":"long", "latin":"hi sa si i"},
        {"kana":"ふくし", "meaning":"Fukushima", "latin":"hu gu si"}
    ],
    [
        // ma
        {"kana":"もも", "meaning":"peach", "latin":"mo mo"},
        {"kana":"むし", "meaning":"insect", "latin":"mu si"},
        {"kana":"まめ", "meaning":"beans", "latin":"ma me"},
        {"kana":"むすめ", "meaning":"daughter", "latin":"mu su me"},
        {"kana":"かみさま", "meaning":"god", "latin":"ka mi sa ma"},
        {"kana":"まいにち", "meaning":"every day", "latin":"ma i ni ji"},
        {"kana":"きみ", "meaning":"kid", "latin":"ki mi"},
        {"kana":"さむい", "meaning":"cold", "latin":"sa mu i"},
        {"kana":"もの", "meaning":"thing", "latin":"mo no"},
        {"kana":"むすこ", "meaning":"son", "latin":"mu su go"},
        {"kana":"すまない", "meaning":"sorry", "latin":"su ma na i"},
        {"kana":"もくてき", "meaning":"purpose", "latin":"mo gu ze gi"},
        {"kana":"めめしい", "meaning":"pussy", "latin":"me me si i"},
        {"kana":"ひみつ", "meaning":"secret", "latin":"he mi zu"}
    ],
    [
        // ya
        {"kana":"やま", "meaning":"mountain", "latin":"ya ma"},
        {"kana":"やおや", "meaning":"greengrocer", "latin":"ya o ya"},
        {"kana":"よやく", "meaning":"reservation", "latin":"yo ya gu"},
        {"kana":"やみよ", "meaning":"dark night", "latin":"ya mi yo"},
        {"kana":"ゆかひ", "meaning":"miao", "latin":"yu ga hi"},
        {"kana":"かゆひ", "meaning":"miao", "latin":"ka yu hi"},
        {"kana":"おゆ", "meaning":"hot water", "latin":"o yu"},
        {"kana":"よく", "meaning":"well", "latin":"yo gu"},
        {"kana":"やさい", "meaning":"vegetable", "latin":"ya sa i"},
        {"kana":"やすい", "meaning":"miao", "latin":"mi a o"},
        {"kana":"ひやく", "meaning":"jump", "latin":"hi ya gu"},
        {"kana":"もやし", "meaning":"bean sprout", "latin":"mo ya si"},
        {"kana":"もよおす", "meaning":"miao", "latin":"mo yo o su"},
        {"kana":"ゆかた", "meaning":"yukata", "latin":"yu ga da"},
        {"kana":"ゆたか", "meaning":"rich", "latin":"yu da ga"},
        {"kana":"おかゆ", "meaning":"rice porridge", "latin":"o ga yu"},
        {"kana":"やさしい", "meaning":"easy", "latin":"ya sa si i"},
        {"kana":"やすみ", "meaning":"miao", "latin":"ya si mi"},
        {"kana":"ゆうみけ", "meaning":"miao", "latin":"yu u mi ke"},
        {"kana":"よこなき", "meaning":"miao", "latin":"yo go na gi"},
        {"kana":"よしあし", "meaning":"miao", "latin":"yo si a si"},
        {"kana":"よくない", "meaning":"bad", "latin":"yo gu na i"},
        {"kana":"よのなか", "meaning":"world", "latin":"yo no na ga"}
    ],
    [
        // ra
        {"kana":"はる", "meaning":"spring", "latin":"ha ru"},
        {"kana":"れきし", "meaning":"history", "latin":"re gi si"},
        {"kana":"おふろ", "meaning":"miao", "latin":"o hu ro"},
        {"kana":"きらい", "meaning":"hate", "latin":"ki ra i"},
        {"kana":"たりる", "meaning":"sufficient", "latin":"ta ri ru"},
        {"kana":"るす", "meaning":"miao", "latin":"ru si"},
        {"kana":"くもる", "meaning":"cloudy", "latin":"ku mo ru"},
        {"kana":"やるき", "meaning":"miao", "latin":"ya ru gi"},
        {"kana":"おさら", "meaning":"dish", "latin":"o sa ra"},
        {"kana":"ろうそく", "meaning":"candle", "latin":"ro u so gu"},
        {"kana":"しつれい", "meaning":"rude", "latin":"si zu re i"},
        {"kana":"きれい", "meaning":"pretty", "latin":"ki re i"},
        {"kana":"ふろしき", "meaning":"wrapping cloth", "latin":"fo ro si gi"},
        {"kana":"おもしろい", "meaning":"funny", "latin":"o mo si ro i"},
        {"kana":"ひれつ", "meaning":"despicable", "latin":"hi re zu"},
        {"kana":"あつまる", "meaning":"gather", "latin":"a zu ma ru"},
        {"kana":"ならう", "meaning":"learn", "latin":"na ra u"},
        {"kana":"ふるい", "meaning":"old", "latin":"hu ru i"},
        {"kana":"すらりと", "meaning":"miao", "latin":"si ra ri do"},
        {"kana":"ふりかえる", "meaning":"miao", "latin":"hu ri ga e ru"},
        {"kana":"きらく", "meaning":"miao", "latin":"ki ra gu"}
    ],
    [
        // wa
        {"kana":"わたし", "meaning":"miao", "latin":"mi a o"},
        {"kana":"かわ", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わたいれ", "meaning":"miao", "latin":"mi a o"},
        {"kana":"すわる", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わらろ", "meaning":"miao", "latin":"mi a o"},
        {"kana":"しわせ", "meaning":"miao", "latin":"mi a o"},
        {"kana":"きわめて", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わすわる", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わかす", "meaning":"miao", "latin":"mi a o"},
        {"kana":"おせわ", "meaning":"miao", "latin":"mi a o"},
        {"kana":"まわる", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わける", "meaning":"miao", "latin":"mi a o"},
        {"kana":"やわらかい", "meaning":"miao", "latin":"mi a o"},
        {"kana":"くわえる", "meaning":"miao", "latin":"mi a o"},
        {"kana":"いわう", "meaning":"miao", "latin":"mi a o"},
        {"kana":"あらわす", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わふく", "meaning":"miao", "latin":"mi a o"},
        {"kana":"わたる", "meaning":"miao", "latin":"mi a o"},
        {"kana":"さわる", "meaning":"miao", "latin":"mi a o"}
    ],
    [
        // n/m
        {"kana":"みあお", "meaning":"miao", "latin":"mi a o"},
        {"kana":"みあお", "meaning":"miao", "latin":"mi a o"},
        {"kana":"みあお", "meaning":"miao", "latin":"mi a o"}
    ]
];