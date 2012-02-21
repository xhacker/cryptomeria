$(document).ready(function() {
    var html = "";
    for (var i = 0; i < 11; i++) {
        html += '<div class="kana-row clearfix">';
        kana_per_line = 5;
        if (i == 10) kana_per_line = 1;
        for (var j = 0; j < kana_per_line; j++) {
            var kana_id = i * 5 + j;
            html += '<div class="kana-item">';
            html += '<span class="kana-char">' + hs[kana_id] + '</span>';
            html += '<br />';
            html += '<span class="kana-char">' + ks[kana_id] + '</span>';
            html += '<br />';
            html += '<span class="kana-alpha">' + ls[kana_id] + '</span>';
            html += '</div>';
        }
        html += '</div>';
    }
    $("#content").append(html);
});