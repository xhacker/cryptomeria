$(document).ready(function() {
    pref_range = 1;
    pref_hork = "h";

    var prev_id = -1;
    var prev_hork;
    function get_next() {
        $("#select button.option.green").addClass("blue");
        $("#select button.option.red").addClass("blue");
        $("#select button.option.green").removeClass("green");
        $("#select button.option.red").removeClass("red");
        $("#next").html("?");
        $("#next").attr("data-state", "ask");

        var kana_id = parseInt(Math.random() * pref_range * 5);
        while (kana_id == prev_id) {
            kana_id = parseInt(Math.random() * pref_range * 5);
        }
        prev_id = kana_id;
        var which_right = parseInt(Math.random() * 4);
        $("#next").attr("data-right", which_right);
        if (pref_hork == "h" || (pref_hork == "both" && prev_hork == "k")) {
            kana = hs[kana_id];
            prev_hork = "h";
        }
        else {
            kana = ks[kana_id];
            prev_hork = "k";
        }
        $("#kana").html(kana);
        $($("#select button")[which_right]).html(ls[kana_id]);
        var used_id = [kana_id];
        for (var i = 0; i <= 3; i++) {
            if (i == which_right) {
                continue;
            }
            var rand_id = parseInt(Math.random() * pref_range * 5);
            while (used_id.indexOf(rand_id) >= 0) {
                rand_id = parseInt(Math.random() * pref_range * 5);
            }
            used_id.push(rand_id);
            $($("#select button")[i]).html(ls[rand_id]);
        }
    }
    
    function update_range_text() {
        $("#pref-range-text").html(pref_range);
    }

    $("#next").click(function() {
        if ($(this).attr("data-state") == "ask") {
            var which_right = $(this).attr("data-right");
            $($("#select button")[which_right]).removeClass("blue");
            $($("#select button")[which_right]).addClass("green");
            $(this).html("→");
            $(this).attr("data-state", "next");
        }
        else if ($(this).attr("data-state") == "next") {
            get_next();
        }
    });

    $(".option").click(function() {
        var which_right = $("#next").attr("data-right");
        if ($(this).attr("data-id") == which_right) {
            get_next();
        }
        else {
            $("#next").html("→");
            $("#next").attr("data-state", "next");
            $(this).removeClass("blue");
            $(this).addClass("red");
            $($("#select button")[which_right]).removeClass("blue");
            $($("#select button")[which_right]).addClass("green");
        }
    });
    
    $("#pref-range-decrease").click(function() {
        if (pref_range <= 1) {
            return;
        }
        pref_range--;
        update_range_text();
        get_next();
    });
    $("#pref-range-increase").click(function() {
        if (pref_range >= 6) {
            return;
        }
        pref_range++;
        update_range_text();
        get_next();
    });
    
    // `hork` means `hiragana or katakana`.
    $("#pref-hork button").click(function() {
        pref_hork = $(this).attr("data-hork");
        $("#pref-hork button.active").addClass("not-active");
        $("#pref-hork button.active").removeClass("active");
        $(this).addClass("active");
        $(this).removeClass("not-active");
        get_next();
    });
    
    get_next();
});