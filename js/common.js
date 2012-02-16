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
        {"kana":"きく", "meaning":"listen", "latin":"ki gu"}
    ],
    [
        {"kana":"あさ", "meaning":"morning", "latin":""},
        {"kana":"アイス", "meaning":"ice", "latin":""},
        {"kana":"そこく", "meaning":"homeland", "latin":""},
        {"kana":"しあい", "meaning":"game", "latin":""},
        {"kana":"しお", "meaning":"salt", "latin":""},
        {"kana":"すいか", "meaning":"watermelon", "latin":""},
        {"kana":"せかい", "meaning":"world", "latin":""}
    ],
    [
        {"kana":"あい", "meaning":"miao", "latin":""},
        {"kana":"いう", "meaning":"miao", "latin":""}
    ],
    [
        {"kana":"あい", "meaning":"miao", "latin":""},
        {"kana":"いう", "meaning":"miao", "latin":""}
    ],
    [
        {"kana":"あい", "meaning":"miao", "latin":""},
        {"kana":"いう", "meaning":"miao", "latin":""}
    ]
];