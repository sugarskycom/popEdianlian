$(document).ready(function (e) {
    $(".bj").on("click", function () {
        if ($(this).hasClass('keep')) {
            $(this).removeClass('keep');
            $(this).html("编辑");
            $(this).parent().parent().find('input').attr('disabled', 'disabled');
            $(this).parent().parent().removeClass('curre');
            $(this).parent().parent().find(".checked").removeClass('checked');
        } else {
            $(this).addClass('keep');
            $(this).html("保存");
            $(this).parent().parent().find('input').removeAttr('disabled', 'disabled');
            $(this).parent().parent().addClass('curre');
            $(this).parent().parent().find(".checkbox").addClass('checked');
        }
    });
    $(".add").on("click", function () {
        var a = $(".table1").clone(this).children("tbody").children().last();
        var b = $(".table1").children().append(a);
        $(a).children().children('input').attr('value', '');
        $(a).children().children('input').removeAttr("disabled");
        $(a).addClass('curre');
        $(a).find('.checkbox').addClass('checked');
        $(a).find('.bj').addClass('keep').html("保存");
    })

    $(".checkbox").live("click", function () {
        if ($(this).hasClass('checked')) {
            $(this).parent().parent().find('input').attr('disabled', 'disabled');
            $(this).parent().parent().removeClass('curre');
            $(this).removeClass('checked');
            $(this).siblings("input").removeAttr("checked", "checked");
            $(this).parent().parent().find(".bj").removeClass('keep');
            //$(this).parent().parent().find(".bj").html("编辑");
        } else {
            $(this).parent().parent().find('input').removeAttr('disabled', 'disabled');
            $(this).parent().parent().addClass('curre');
            $(this).addClass('checked');
            $(this).siblings("input").attr("checked", "checked");
            $(this).parent().parent().find(".bj").addClass('keep');
            //$(this).parent().parent().find(".bj").html("保存");
        }
    })
    $(".user").click(function (e) {
        $(".user-list").toggle();
        $(".ls-sj").toggle();
    });
});
//切换
function tab() {
    $("label[data-name='zdlx']").on("click", function () {
        $("div[data-name='zdlx']").show();
        $("div[data-name='qy']").hide();
        $("div[data-name='zddj']").hide();
    });
    $("label[data-name='qy']").on("click", function () {
        $("div[data-name='qy']").show();
        $("div[data-name='zdlx']").hide();
        $("div[data-name='zddj']").hide();
    });
    $("label[data-name='zddj']").on("click", function () {
        $("div[data-name='zddj']").show();
        $("div[data-name='qy']").hide();
        $("div[data-name='zdlx']").hide();
    });
    $("label[data-name='qzd']").on("click", function () {
        $("div[data-name='zddj']").hide();
        $("div[data-name='qy']").hide();
        $("div[data-name='zdlx']").hide();
    });
    $("label[data-name='zd']").on("click", function () {
        $("table[data-name='zd']").show();
        $("div[data-name='zd']").show();
        $("div[data-name='qc']").hide();
    });
    $("label[data-name='qc']").on("click", function () {
        $("table[data-name='zd']").hide();
        $("div[data-name='zd']").hide();
        $("div[data-name='qc']").show();
    });
}
//树形菜单
function snav() {
    var h1 = $(".tree1").find("h1");
    var h2 = $(".tree2").find("h2");
    var h3 = $(".tree3").find("h3");
    var h4 = $(".tree4").find("h4");
    var h5 = $(".tree5").find("h5");
    var tree_one = $(".tree1").find(".tree2");
    var tree_two = $(".tree2").find(".tree3");
    var tree_three = $(".tree3").find(".tree4");
    var tree_four = $(".tree4").find(".tree5");
    h1.each(function (i) {
        $(this).click(function () {
            //alert("ok");
            if ($(this).find(".t-jia").hasClass("t-jian")) {
                $(this).find(".t-jia").removeClass("t-jian");
            } else {
                //$(".tree1").find(".t-jia").removeClass("t-jian");
                $(this).find(".t-jia").addClass("t-jian");
            }
            tree_one.eq(i).slideToggle();
            tree_one.eq(i).parent().siblings().find(".tree2").slideUp();
        })
    })
    h2.each(function (i) {
        $(this).click(function () {
            //alert("ok");
            if ($(this).find(".t-jia").hasClass("t-jian")) {
                $(this).find(".t-jia").removeClass("t-jian");
            } else {
                //$(".tree1").find(".t-jia").removeClass("t-jian");
                $(this).find(".t-jia").addClass("t-jian");
            }
            tree_two.eq(i).slideToggle();
            tree_two.eq(i).parent().siblings().find(".tree3").slideUp();
        })
    })
    h3.each(function (i) {
        $(this).click(function () {
            //alert("ok");
            if ($(this).find(".t-jia").hasClass("t-jian")) {
                $(this).find(".t-jia").removeClass("t-jian");
            } else {
                //$(".tree1").find(".t-jia").removeClass("t-jian");
                $(this).find(".t-jia").addClass("t-jian");
            }
            tree_three.eq(i).slideToggle();
            tree_three.eq(i).parent().siblings().find(".tree4").slideUp();
        })
    })
    h4.each(function (i) {
        $(this).click(function () {
            //alert("ok");
            if ($(this).find(".t-jia").hasClass("t-jian")) {
                $(this).find(".t-jia").removeClass("t-jian");
            } else {
                //$(".tree1").find(".t-jia").removeClass("t-jian");
                $(this).find(".t-jia").addClass("t-jian");
            }
            tree_four.eq(i).slideToggle();
            tree_four.eq(i).parent().siblings().find(".tree5").slideUp();
        })
    })
    /*h2.each(function(i){
        $(this).click(function(){
            $(".lfnav2 li").removeClass("curre");
            $(this).parent("li").addClass("curre");
            tree_two.eq(i).slideToggle();
            tree_two.eq(i).parent().siblings().find(".lfnav3").slideUp();
        })
    })	
    $(".lfnav3 li").click(function(e) {
        $(".lfnav3 li").removeClass("curre");
        $(this).addClass("curre");
    });*/
}
//终端自定义tab切换
function tab2() {
    $(".head-list li[data-name='tab-1']").on("click", function () {
        $(".shu-box").hide();
        $("div[data-name='tab-1']").show();
    });
    $(".head-list li[data-name='tab-2']").on("click", function () {
        $(".shu-box").hide();
        $("div[data-name='tab-2']").show();
    });
    $(".head-list li[data-name='tab-3']").on("click", function () {
        $(".shu-box").hide();
        $("div[data-name='tab-3']").show();
    });
    $(".head-list li[data-name='tab-4']").on("click", function () {
        $(".shu-box").hide();
        $("div[data-name='tab-4']").show();
    });
}
//左侧导航
function nav() {
    var h3 = $(".lfnav1").find("h3");
    var tree_one = $(".lfnav1").find(".lfnav2");
    var h4 = $(".lfnav2").find("h4");
    h3.each(function (i) {
        $(this).click(function () {
            $(".lfnav1 li").removeClass("curre");
            $(this).parent("li").addClass("curre");
            tree_one.eq(i).slideToggle();
            tree_one.eq(i).parent().siblings().find(".lfnav2").slideUp();
        });
    });
    h4.each(function (i) {
        $(this).click(function () {
            $(".lfnav2 li").removeClass("curre");
            $(this).parent("li").addClass("curre");
        });
    });
    var url = window.location.pathname;
    var lis = $(".lfnav2").children();
    var isCheckNav = false;
    lis.each(function () {
        var liurl = $(this).find("a").attr("href");
        if (liurl == url) {
            $(this).addClass("curre");
            $(this).parent().parent().addClass("curre");
            $(this).parents('.lfnav2').show();
            isCheckNav = true;
            return;
        }
    });

    lis.each(function () {
        if (!isCheckNav)
        {
            var liurl = $(this).find("a").attr("href");
            if (liurl.substr(0, liurl.lastIndexOf('/') + 1) == url.substr(0, url.lastIndexOf('/') + 1)
                && ($(this).find("a").text() == $(".icon-jc").parent().next().text()
                || $(this).find("a").text() == $(".icon-jc").parent().text().replace('>', '').trim())) {
                $(this).addClass("curre");
                $(this).parent().parent().addClass("curre");
                $(this).parents('.lfnav2').show();
                isCheckNav = true;
                return;
            }
        }
    });
}