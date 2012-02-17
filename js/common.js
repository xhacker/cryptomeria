_ls = "a|i|u|e|o|ka|ki|ku|ke|ko|sa|shi|su|se|so|ta|chi|tsu|te|to|na|ni|nu|ne|no|ha|hi|fu|he|ho|ma|mi|mu|me|mo|ra|ri|ru|re|ro|ya|yu|yo|wa|o (wo)|n/m";
_hs = "あ|い|う|え|お|か|き|く|け|こ|さ|し|す|せ|そ|た|ち|つ|て|と|な|に|ぬ|ね|の|は|ひ|ふ|へ|ほ|ま|み|む|め|も|ら|り|る|れ|ろ|や|ゆ|よ|わ|を|ん";
_ks = "ア|イ|ウ|エ|オ|カ|キ|ク|ケ|コ|サ|シ|ス|セ|ソ|タ|チ|ツ|テ|ト|ナ|ニ|ヌ|ネ|ノ|ハ|ヒ|フ|ヘ|ホ|マ|ミ|ム|メ|モ|ラ|リ|ル|レ|ロ|ヤ|ユ|ヨ|ワ|ヲ|ン";
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
        {"kana":"しあい", "meaning":"game", "latin":"shi a i"},
        {"kana":"しお", "meaning":"salt", "latin":"shi o"},
        {"kana":"すいか", "meaning":"watermelon", "latin":"su i ga"},
        {"kana":"せかい", "meaning":"world", "latin":"se ga i"},
        {"kana":"きせき", "meaning":"miracle", "latin":"ki se gi"},
        {"kana":"あさい", "meaning":"shallow", "latin":"a sa i"},
        {"kana":"きそ", "meaning":"basis", "latin":"ki so"},
        {"kana":"あす", "meaning":"tomorrow", "latin":"a su"},
        {"kana":"しき", "meaning":"four seasons", "latin":"shi gi"},
        {"kana":"あし", "meaning":"foot", "latin":"a shi"}
    ],
    [
    	{"kana":"おたく", "meaning":"home", "latin":"o da gu"},
    	{"kana":"ちかてつ", "meaning":"subway", "latin":"chi ga de zu"},
    	{"kana":"たたかう", "meaning":"fight", "latin":"ta da ga u"},
    	{"kana":"きたい", "meaning":"expect", "latin":"ki da i"},
    	{"kana":"ちかく", "meaning":"near", "latin":"chi ga gu"},
    	{"kana":"ちしき", "meaning":"knowledge", "latin":"chi shi gi"},
    	{"kana":"あいて", "meaning":"opponent", "latin":"a i de"},
    	{"kana":"てあし", "meaning":"hands and feet", "latin":"te a shi"},
    	{"kana":"あと", "meaning":"later", "latin":"a do"},
    	{"kana":"いたい", "meaning":"painful", "latin":"i da i"},
    	{"kana":"とち", "meaning":"land", "latin":"to ji"},
    	{"kana":"とけい", "meaning":"watch", "latin":"to ge i"},
    	{"kana":"いと", "meaning":"intent", "latin":"i do"},
    	{"kana":"ちかう", "meaning":"pledge", "latin":"qi ga u"}
    ],
    [
        {"kana":"みみみ", "meaning":"miao", "latin":""},
        {"kana":"みみみ", "meaning":"miao", "latin":""}
    ],
    [
        {"kana":"みみみ", "meaning":"miao", "latin":""},
        {"kana":"みみみ", "meaning":"miao", "latin":""}
    ]
];