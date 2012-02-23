$(document).ready(function() {
    var html = "";
    for (var i = 0; i < 11; i++) {
        html += '<div class="kana-row clearfix">';
        kana_per_line = 5;
        if (i == 10) kana_per_line = 1;

        // line head
        html += '<div class="kana-row-head">';
        html += '<p class="kana-char">' + hs[i * 5] + '</p>';
        html += '<p class="kana-alpha">' + ls[i * 5] + '</p>';
        html += '</div>';

        for (var j = 0; j < kana_per_line; j++) {
            var kana_id = i * 5 + j;
            var dup_class = "";
            if (hs[kana_id][0] == '(') { dup_class = " dup"; }
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