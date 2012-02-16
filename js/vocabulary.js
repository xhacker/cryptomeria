$(document).ready(function() {
    var html = "";
    for (var i = 0; i < 6; i++) {
        html += '<div class="vocabulary-row clearfix">';
        html += '<div class="title">';
        for (var j = 0; j < 5; j++) {
            html += "<p>" + hs[i * 5 + j] + "</p>";
        }
        // USING JSON!!!
        html += '</div>'
        html += '<div class="vocabulary">';
        $.each(vs[i], function(index, value) {
            html += '<p><span class="kana">';
            html += value['kana'] + '</span><span class="meaning">' + value['meaning'];
            html += '</span><span class="latin" data-latin="' + value['latin'] + '">latin</span></p>';
        });
        html += '</div>'
        html += '</div>';
    }
    $("#content").append(html);

	$(".latin").click(function() {
		$(this).html($(this).attr("data-latin"));
		$(this).addClass("active");
	});
});