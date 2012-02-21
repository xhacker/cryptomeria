$(document).ready(function() {
    var html = "";
    for (var i = 0; i < 11; i++) {
        html += '<div class="vocabulary-row clearfix" id="' + ls[i * 5] + '">';
        html += '<div class="title">';
        kana_per_line = 5;
        if (i == 10) kana_per_line = 1;
        for (var j = 0; j < kana_per_line; j++) {
            html += "<p>" + hs[i * 5 + j] + "</p>";
        }
        html += '</div>'
        html += '<div class="vocabulary">';
        $.each(vs[i], function(index, value) {
            html += '<p><span class="kana active" data-kana="' + value['kana'] + '">';
            html += value['kana'] + '</span><span class="meaning">' + value['meaning'];
            html += '</span><span class="latin" data-latin="' + value['latin'] + '">latin</span></p>';
        });
        html += '</div>'
        html += '</div>';
    }
    $("#content").append(html);

    $("#pref-direction button").click(function() {
        var direction = $(this).attr("data-direction");
        $("#pref-direction button.active").addClass("not-active");
        $("#pref-direction button.active").removeClass("active");
        $(this).addClass("active");
        $(this).removeClass("not-active");
        if (direction == "kanalatin") {
            $(".latin").html("latin");
            $(".latin").removeClass("active");
            $(".kana").each(function() {
                $(this).html($(this).attr("data-kana"));
                $(this).addClass("active");
            });
        }
        else {
            $(".kana").html("kana");
            $(".kana").removeClass("active");
            $(".latin").each(function() {
                $(this).html($(this).attr("data-latin"));
                $(this).addClass("active");
            });
        }
    });

    $(".latin").click(function() {
        $(this).html($(this).attr("data-latin"));
        $(this).addClass("active");
    });
    $(".kana").click(function() {
        $(this).html($(this).attr("data-kana"));
        $(this).addClass("active");
    });
});