//about
function show() {
    $(document).ready(function() {
        $(".about").show();
    });
}

function hide() {
    $(document).ready(function() {
        $(".about").hide();
    });
}

$(document).ready(function() {
    $(".more").click(function() {
        $(".lala").toggle();
    });
});

function change() {
    $(document).ready(function() {
        $(".about").fadeTo("slow", 0.15);

    });
}

function changeback() {
    $(document).ready(function() {
        $(".about").fadeTo("slow", 1);

    });
}

//america
$(document).ready(function() {
    $(".america").click(function() {
        $(".am").slideDown("slow");
    });
});

function closesd() {
    $(document).ready(function() {
        $(".am").slideUp("slow");
    });
}

$(document).ready(function() {
    $(".LA").click(function() {
        $("#la").slideToggle("slow");
    });
});

$(document).ready(function() {
    $(".NY").click(function() {
        $("#ny").slideToggle("slow");
    });
});

//aussie
$(document).ready(function() {
    $(".aussie").click(function() {
        $(".au").fadeIn(2000);
    });
});

function closefi() {
    $(document).ready(function() {
        $(".au").fadeOut("slow");
    });
}

$(document).ready(function() {
    $(".SY").click(function() {
        $("#sy").fadeToggle("slow");
    });
});

$(document).ready(function() {
    $(".MELB").click(function() {
        $("#melb").fadeToggle("slow");
    });
});

//canada
$(document).ready(function() {
    $(".canada").click(function() {
        $(".cn").slideDown("slow");
    });
});

function closecn() {
    $(document).ready(function() {
        $(".cn").slideUp("slow");
    });
}

$(document).ready(function() {
    $(".VN").click(function() {
        $("#vn").fadeToggle("slow");
    });
});

$(document).ready(function() {
    $(".QC").click(function() {
        $("#qc").fadeToggle("slow");
    });
});

//europe
$(document).ready(function() {
    $(".europe").click(function() {
        $(".eu").fadeIn("slow");
    });
});

function closeeu() {
    $(document).ready(function() {
        $(".eu").fadeOut("slow");
    });
}

$(document).ready(function() {
    $(".PR").click(function() {
        $("#pr").slideToggle("slow");
    });
});
