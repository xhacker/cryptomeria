$(document).ready(function() {
    var html = "";
    for (var i = 0; i < total_line; i++) {
        var type_class = 'basic';
        if (i >= youon_line[0]) { type_class = 'youon'; }
        else if (i >= dakuten_line[0]) { type_class = 'dakuten'; }
        
        html += '<div class="kana-row clearfix ' + type_class + '">';

        // line head
        var head_view = {
            kana_char: hs[i * 5],
            kana_alpha: ls[i * 5]
        };
        html += Mustache.render('<div class="kana-row-head">\
            <p class="kana-char">{{ kana_char }}</p>\
            <p class="kana-alpha">{{ kana_alpha }}</p>\
        </div>', head_view);

        for (var j = 0; j < 5; j++) {
            var kana_id = i * 5 + j;
            
            if (hs[kana_id] === "") {
                continue;
            }
            
            var item_view = {
                dup: function() {
                    return hs[kana_id][0] == '(';
                },
                hiragana: hs[kana_id],
                katakana: ks[kana_id],
                latin: ls[kana_id]
            };
            html += Mustache.render('<div class="kana-item{{#dup}} dup{{/dup}}">\
                <p class="kana-char">{{ hiragana }}</p>\
                <p class="kana-char">{{ katakana }}</p>\
                <p class="kana-alpha">{{ latin }}</p>\
            </div>', item_view);
        }
        html += '</div>';
    }
    $("#content").append(html);
});