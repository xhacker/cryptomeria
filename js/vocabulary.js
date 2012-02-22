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

    if (!localStorage['pref_direction']) { localStorage['pref_direction'] = "kanalatin"; }
    on_direction_update();

    function on_direction_update() {
        var selector_this = "#pref-direction button[data-direction=" + localStorage['pref_direction'] + "]";
        $("#pref-direction button.active").addClass("not-active").removeClass("active");
        $(selector_this).addClass("active").removeClass("not-active");

        if (localStorage['pref_direction'] == "kanalatin") {
            $(".latin").html("latin").removeClass("active");
            $(".kana").each(function() {
                $(this).html($(this).attr("data-kana"));
                $(this).addClass("active");
            });
        }
        else {
            $(".kana").html("kana").removeClass("active");
            $(".latin").each(function() {
                $(this).html($(this).attr("data-latin"));
                $(this).addClass("active");
            });
        }
    }

    $("#pref-direction button").click(function() {
        localStorage['pref_direction'] = $(this).attr("data-direction");
        on_direction_update();
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