$(document).ready(function() {
    var html = "";
    for (var i = 0; i < 6; i++) {
        html += '<div class="kana-row clearfix">';
        for (var j = 0; j < 5; j++) {
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