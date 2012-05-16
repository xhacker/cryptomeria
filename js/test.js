// get a random integer between a and b
function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a, 10);
}

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
        kana_range = parseInt(localStorage.pref_range) * 5;

        id_array = new Array;
        id_pointer = 0;
        for (var array_i = 0, kana_i = 0; kana_i < kana_range; kana_i += 1) {
            if (hs[kana_i] && hs[kana_i][0] != '(') {
                id_array[array_i] = kana_i;
                array_i += 1;
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

        var kana_id = id_array[id_pointer];
        id_pointer += 1;
        if (kana_id === undefined) {
            randomize();
            kana_id = id_array[id_pointer];
            id_pointer += 1;
        }

        if (localStorage.pref_hork == "h") {
            hork = "h";
        }
        else if (localStorage.pref_hork == "k") {
            hork = "k";
        }
        else {
            hork = (prev_hork == "h") ? "k" : "h";
            prev_hork = hork;
        }

        var toguess_char;
        if (localStorage.pref_direction == "kanalatin") {
            toguess_char = (hork == "h") ? hs[kana_id] : ks[kana_id];
        }
        else {
            toguess_char = ls[kana_id];
        }
        $("#kana").html(toguess_char);

        // place options
        var which_right = randint(0, 3);
        $("#next").attr("data-right", which_right);
        if (localStorage.pref_direction == "kanalatin") {
            right_char = ls[kana_id];
        }
        else {
            right_char = (hork == "h") ? hs[kana_id] : ks[kana_id];
        }
        $($("#select button")[which_right]).html(right_char);

        var used_id = [kana_id];
        var option_range = get_section_range_by_id(kana_id);
        if (option_range.end > kana_range - 1) {
            option_range.end = kana_range - 1;
        }
        for (var i = 0; i <= 3; i++) {
            if (i == which_right) {
                continue;
            }
            
            var rand_id;
            do {
                rand_id = randint(option_range.start, option_range.end);
            }
            while (used_id.indexOf(rand_id) >= 0 || !ls[rand_id] || ls[rand_id][0] == '(');
            
            used_id.push(rand_id);
            if (localStorage.pref_direction == "kanalatin") {
                option_char = ls[rand_id];
            }
            else {
                option_char = (hork == "h") ? hs[rand_id] : ks[rand_id];
            }
            $($("#select button")[i]).html(option_char);
        }
    }
    
    function on_range_update() {
        var range = parseInt(localStorage.pref_range);
        var range_text = 'あ-' + hs[(range - 1) * 5];
        $("#pref-range-text").html(range_text);
        reset_counter();
        randomize();
        get_next();
    }

    function on_hork_update() {
        var selector_this = "#pref-hork button[data-hork=" + localStorage.pref_hork + "]";
        $("#pref-hork button.active").addClass("not-active").removeClass("active");
        $(selector_this).addClass("active").removeClass("not-active");
        reset_counter();
        randomize();
        get_next();
    }

    function on_direction_update() {
        var selector_this = "#pref-direction button[data-direction=" + localStorage.pref_direction + "]";
        $("#kana").attr("lang", $(selector_this).attr("data-main-display"));

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
        if (parseInt(localStorage.pref_range) <= 1) {
            return;
        }
        localStorage.pref_range = parseInt(localStorage.pref_range) - 1;
        on_range_update();
    });
    $("#pref-range-increase").click(function() {
        if (parseInt(localStorage.pref_range) >= total_line) {
            return;
        }
        localStorage.pref_range = parseInt(localStorage.pref_range) + 1;
        on_range_update();
    });
    
    // `hork` means `hiragana or katakana`.
    $("#pref-hork button").click(function() {
        localStorage.pref_hork = $(this).attr("data-hork");
        on_hork_update();
    });

    $("#pref-direction button").click(function() {
        localStorage.pref_direction = $(this).attr("data-direction");
        on_direction_update();
    });
    
    get_next();
});