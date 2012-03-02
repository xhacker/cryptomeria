$(document).ready(function() {
    var html = "";
    for (var i = 0; i < total_line; i++) {
        var type_class = 'basic';
        if (i >= youon_line[0]) { type_class = 'youon'; }
        else if (i >= dakuten_line[0]) { type_class = 'dakuten'; }
        
        html += '<div class="kana-row clearfix ' + type_class + '">';

        // line head
        html += '<div class="kana-row-head">';
        html += '<p class="kana-char">' + hs[i * 5] + '</p>';
        html += '<p class="kana-alpha">' + ls[i * 5] + '</p>';
        html += '</div>';

        for (var j = 0; j < 5; j++) {
            var kana_id = i * 5 + j;
            
            if (hs[kana_id] === "") {
                continue;
            }
            
            var dup_class = "";
            if (hs[kana_id][0] == '(') {
                dup_class = " dup";
            }
            
            html += '<div class="kana-item' + dup_class + '">';
            html += '<p class="kana-char">' + hs[kana_id] + '</p>';
            html += '<p class="kana-char">' + ks[kana_id] + '</p>';
            html += '<p class="kana-alpha">' + ls[kana_id] + '</p>';
            html += '</div>';
        }
        html += '</div>';
    }
    $("#content").append(html);
});