$(document).ready(function() {
    var html = "";
    for (var i = 0; i < 11; i++) {
        html += '<div class="vocabulary-row clearfix" id="' + ls[i * 5] + '">';
        
        html += '<div class="title">';
        for (var j = 0; j < 5; j++) {
            var kana = hs[i * 5 + j];
            if (kana[0] === "") {
                continue;
            }
            if (kana[0] == '(') {
                kana = kana[1];
            }
            html += "<p>" + kana + "</p>";
        }
        html += '</div>'
        
        var vocabulary_view = {};
        vocabulary_view.rows = vs[i];
        if (vocabulary_view.rows[5])
            vocabulary_view.rows[5].fifth = true;
        html += Mustache.render('<div class="vocabulary">\
            {{#rows}}\
            {{#fifth}}<p class="more">Show more...</p>{{/fifth}}\
            <p>\
                <span class="kana active" data-kana="{{ kana }}">{{ kana }}</span>\
                <span class="meaning">{{ meaning }}</span>\
                <span class="latin" data-latin="{{ latin }}">latin</span>\
            </p>\
            {{/rows}}\
        </div>', vocabulary_view);
        
        html += '</div>';
    }
    $("#content").append(html);
    $(".vocabulary p:nth-child(n+7)").hide();

    if (!localStorage.pref_direction) { localStorage.pref_direction = "kanalatin"; }
    on_direction_update();

    function on_direction_update() {
        var selector_this = "#pref-direction button[data-direction=" + localStorage.pref_direction + "]";
        $("#pref-direction button.active").addClass("not-active").removeClass("active");
        $(selector_this).addClass("active").removeClass("not-active");

        if (localStorage.pref_direction == "kanalatin") {
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
        localStorage.pref_direction = $(this).attr("data-direction");
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

    $(".more").click(function() {
        $("p", $(this).parent()).show();
        $(this).hide();
    });
});