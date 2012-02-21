_ls = "a|i|u|e|o|ka|ki|ku|ke|ko|sa|si|su|se|so|ta|ci|cu|te|to|na|ni|nu|ne|no|ha|hi|hu|he|ho|ma|mi|mu|me|mo|ya|i|yu|e|yo|ra|ri|ru|re|ro|wa|i|u|e|o|n/m";
_hs = "あ|い|う|え|お|か|き|く|け|こ|さ|し|す|せ|そ|た|ち|つ|て|と|な|に|ぬ|ね|の|は|ひ|ふ|へ|ほ|ま|み|む|め|も|や|い|ゆ|え|よ|ら|り|る|れ|ろ|わ|い|う|え|を|ん";
_ks = "ア|イ|ウ|エ|オ|カ|キ|ク|ケ|コ|サ|シ|ス|セ|ソ|タ|チ|ツ|テ|ト|ナ|ニ|ヌ|ネ|ノ|ハ|ヒ|フ|ヘ|ホ|マ|ミ|ム|メ|モ|ヤ|イ|ユ|エ|ヨ|ラ|リ|ル|レ|ロ|ワ|イ|ウ|エ|ヲ|ン";
ls = _ls.split("|");
hs = _hs.split("|");
ks = _ks.split("|");

vs = [
    [
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
        {"kana":"いか", "meaning":"squid", "latin":"i ga"},
        {"kana":"かう", "meaning":"buy", "latin":"ka u"},
        {"kana":"おく", "meaning":"place", "latin":"o gu"},
        {"kana":"ここ", "meaning":"here", "latin":"ko go"},
        {"kana":"かかく", "meaning":"price", "latin":"ka ga gu"},
        {"kana":"きかい", "meaning":"opportunity", "latin":"ki ga i"},
        {"kana":"きこく", "meaning":"return", "latin":"ki go gu"},
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
        {"kana":"あさ", "meaning":"morning", "latin":"a sa"},
        {"kana":"アイス", "meaning":"ice", "latin":"a i su"},
        {"kana":"そこく", "meaning":"homeland", "latin":"so go gu"},
        {"kana":"しあい", "meaning":"game", "latin":"si a i"},
        {"kana":"しお", "meaning":"salt", "latin":"si o"},
        {"kana":"すいか", "meaning":"watermelon", "latin":"su i ga"},
        {"kana":"せかい", "meaning":"world", "latin":"se ga i"},
        {"kana":"きせき", "meaning":"miracle", "latin":"ki se gi"},
        {"kana":"あさい", "meaning":"shallow", "latin":"a sa i"},
        {"kana":"きそ", "meaning":"basis", "latin":"ki so"},
        {"kana":"あす", "meaning":"tomorrow", "latin":"a su"},
        {"kana":"しき", "meaning":"four seasons", "latin":"si gi"},
        {"kana":"あし", "meaning":"foot", "latin":"a si"}
    ],
    [
        {"kana":"おたく", "meaning":"home", "latin":"o da gu"},
        {"kana":"ちかてつ", "meaning":"subway", "latin":"ci ga de zu"},
        {"kana":"たたかう", "meaning":"fight", "latin":"ta da ga u"},
        {"kana":"きたい", "meaning":"expect", "latin":"ki da i"},
        {"kana":"ちかく", "meaning":"near", "latin":"ci ga gu"},
        {"kana":"ちしき", "meaning":"knowledge", "latin":"ci si gi"},
        {"kana":"あいて", "meaning":"opponent", "latin":"a i de"},
        {"kana":"てあし", "meaning":"hands and feet", "latin":"te a si"},
        {"kana":"あと", "meaning":"later", "latin":"a do"},
        {"kana":"いたい", "meaning":"painful", "latin":"i da i"},
        {"kana":"とち", "meaning":"land", "latin":"to ji"},
        {"kana":"とけい", "meaning":"watch", "latin":"to ge i"},
        {"kana":"いと", "meaning":"intent", "latin":"i do"},
        {"kana":"ちかう", "meaning":"pledge", "latin":"qi ga u"}
    ],
    [
        {"kana":"かない", "meaning":"wife", "latin":"ka na i"},
        {"kana":"なに", "meaning":"what", "latin":"na ni"},
        {"kana":"あなた", "meaning":"you", "latin":"a na da"},
        {"kana":"にあう", "meaning":"match", "latin":"ni a u"},
        {"kana":"きぬ", "meaning":"silk", "latin":"ki nu"},
        {"kana":"きたない", "meaning":"dirty", "latin":"ki da na i"},
        {"kana":"ぬの", "meaning":"cloth", "latin":"nu no"},
        {"kana":"きのう", "meaning":"yesterday", "latin":"ki no u"},
        {"kana":"さかな", "meaning":"fish", "latin":"sa ga na"},
        {"kana":"なく", "meaning":"cry", "latin":"na gu"},
        {"kana":"にく", "meaning":"meat", "latin":"ni gu"},
        {"kana":"いぬ", "meaning":"dog", "latin":"i nu"},
        {"kana":"ねこ", "meaning":"cat", "latin":"ne go"},
        {"kana":"くに", "meaning":"country", "latin":"ku ni"},
        {"kana":"のこす", "meaning":"leave", "latin":"no go su"},
        {"kana":"ぬく", "meaning":"pull", "latin":"nu gu"},
        {"kana":"きのこ", "meaning":"mushroom", "latin":"ki no go"}
    ],
    [
        {"kana":"はい", "meaning":"yes", "latin":"ha i"}, 
        {"kana":"はこ", "meaning":"box", "latin":"ha go"},
        {"kana":"ひふ", "meaning":"skin", "latin":"hi hu"},
        {"kana":"ふかい", "meaning":"deep", "latin":"hu ga i"},
        {"kana":"ほそい", "meaning":"thin", "latin":"ho so i"},
        {"kana":"へいたい", "meaning":"soldier", "latin":"he i da i"},
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
    ],
    [
    ],
    [
    ],
    [
    ],
    [
    ]
];