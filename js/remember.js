$(document).ready(function() {
    // load preferences
    if (!localStorage.pref_range) { localStorage.pref_range = 1; }
    if (!localStorage.pref_hork) { localStorage.pref_hork = "h"; }
    if (!localStorage.pref_direction) { localStorage.pref_direction = "kanalatin"; }

    // init
    on_range_update();
    on_hork_update();
    on_direction_update();
    randomize();

    function randomize() {
        kana_range = localStorage.pref_range * 5;

        id_array = new Array;
        id_pointer = 0;
        for (var array_i = 0, kana_i = 0; kana_i < kana_range; kana_i++) {
            if (hs[kana_i] && hs[kana_i][0] != '(') {
                id_array[array_i++] = kana_i;
            }
        }
        id_array.sort(function() { return 0.5 - Math.random(); });
    }

    var prev_hork;
    function get_next() {
        $("#select button.option.green").addClass("blue");
        $("#select button.option.red").addClass("blue");
        $("#select button.option.green").removeClass("green");
        $("#select button.option.red").removeClass("red");
        $("#next").html("?");
        $("#next").attr("data-state", "ask");

        var kana_id = id_array[id_pointer++];
        if (kana_id === undefined) {
            randomize();
            kana_id = id_array[id_pointer++];
        }

        if (localStorage.pref_hork == "h") {
            hork = "h";
        }
        else if (localStoragepref_hork == "k") {
            hork = "k";
        }
        else {
            hork = (prev_hork == "h") ? "k" : "h";
            prev_hork = hork;
        }

        if (localStorage.pref_direction == "kanalatin") {
            ch = (hork == "h") ? hs[kana_id] : ks[kana_id];
        }
        else {
            ch = ls[kana_id];
        }
        $("#kana").html(ch);

        var which_right = parseInt(Math.random() * 4, 10);
        $("#next").attr("data-right", which_right);
        if (localStorage.pref_direction == "kanalatin") {
            right_ch = ls[kana_id];
        }
        else {
            right_ch = (hork == "h") ? hs[kana_id] : ks[kana_id];
        }
        $($("#select button")[which_right]).html(right_ch);

        var used_id = [kana_id];
        for (var i = 0; i <= 3; i++) {
            if (i == which_right) {
                continue;
            }
            var rand_id = parseInt(Math.random() * kana_range, 10);
            while (used_id.indexOf(rand_id) >= 0 || ls[rand_id][0] == '(') {
                rand_id = parseInt(Math.random() * kana_range, 10);
            }
            used_id.push(rand_id);
            if (localStorage.pref_direction == "kanalatin") {
                option_ch = ls[rand_id];
            }
            else {
                option_ch = (hork == "h") ? hs[rand_id] : ks[rand_id];
            }
            $($("#select button")[i]).html(option_ch);
        }
    }
    
    function on_range_update() {
        var range = localStorage['pref_range'];
        var range_text = 'あ-' + hs[(range - 1) * 5];
        $("#pref-range-text").html(range_text);
        reset_counter();
        randomize();
        get_next();
    }

    function on_hork_update() {
        var selector_this = "#pref-hork button[data-hork=" + localStorage['pref_hork'] + "]";
        $("#pref-hork button.active").addClass("not-active").removeClass("active");
        $(selector_this).addClass("active").removeClass("not-active");
        reset_counter();
        randomize();
        get_next();
    }

    function on_direction_update() {
        var selector_this = "#pref-direction button[data-direction=" + localStorage['pref_direction'] + "]";
        $("#kana").removeClass("kana").removeClass("latin");
        $("#kana").addClass($(selector_this).attr("data-main-display"));

        $("#pref-direction button.active").addClass("not-active").removeClass("active");
        $(selector_this).addClass("active").removeClass("not-active");

        reset_counter();
        randomize();
        get_next();
    }
    
    function reset_counter() {
        $("#counter-ac").html("0");
        $("#counter-total").html("0");
        $("#counter").hide();
    }

    $("#next").click(function() {
        if ($(this).attr("data-state") == "ask") {
            $("#counter").show();
            $("#counter-total").html(parseInt($("#counter-total").html()) + 1);
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
        $("#counter").show();
        if ($("#next").attr("data-state") == "ask") {
            // first click on the option
            $("#counter-total").html(parseInt($("#counter-total").html()) + 1);
        }
        var which_right = $("#next").attr("data-right");
        if ($(this).attr("data-id") == which_right) {
            if ($("#next").attr("data-state") == "ask") {
                // first click on the option
                $("#counter-ac").html(parseInt($("#counter-ac").html()) + 1);
            }
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
        if (localStorage['pref_range'] <= 1) {
            return;
        }
        localStorage['pref_range']--;
        on_range_update();
    });
    $("#pref-range-increase").click(function() {
        if (localStorage['pref_range'] >= total_line) {
            return;
        }
        localStorage['pref_range']++;
        on_range_update();
    });
    
    // `hork` means `hiragana or katakana`.
    $("#pref-hork button").click(function() {
        localStorage['pref_hork'] = $(this).attr("data-hork");
        on_hork_update();
    });

    $("#pref-direction button").click(function() {
        localStorage['pref_direction'] = $(this).attr("data-direction");
        on_direction_update();
    });
    
    get_next();
});