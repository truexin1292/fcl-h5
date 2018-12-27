// 娓愭樉鍏冪礌
function showElement() {
    switch (pageNumber) {
        case 1:
        case 2:
            var currentPage = pageNumber;
            if (isFlip[currentPage] === 2) {
                setTimeout(function () {
                    $(".p" + currentPage + "__f_des").addClass("fadeIn");
                }, 1000);
                setTimeout(function () {
                    $(".p" + currentPage + "__main").addClass("fadeIn");
                }, 1500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_band").addClass("fadeIn");
                    $(".p" + currentPage + "__f_1").addClass("fadeIn");
                    $(".p" + currentPage + "__f_2").addClass("fadeIn");
                }, 2000);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_avatar_1").addClass("fadeIn");
                }, 2500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_bubble_1").addClass("bubble_show");
                }, 3000);
            } else {
                setTimeout(function () {
                    $(".p" + currentPage + "__b_des").addClass("fadeIn");
                }, 1000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_band").addClass("fadeIn");
                    $(".p" + currentPage + "__b_1").addClass("fadeIn");
                    $(".p" + currentPage + "__b_2").addClass("fadeIn");
                }, 1500);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_avatar_1").addClass("fadeIn");
                }, 2000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_bubble_1").addClass("bubble_show");
                }, 2500);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_avatar_2").addClass("fadeIn");
                }, 3000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_bubble_2").addClass("bubble_show");
                }, 3500);
            }
            break;
        case 3:
            var currentPage = pageNumber;
            if (isFlip[currentPage] === 2) {
                setTimeout(function () {
                    $(".p" + currentPage + "__f_des").addClass("fadeIn");
                }, 1000);
                setTimeout(function () {
                    $(".p" + currentPage + "__main").addClass("fadeIn");
                }, 1500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_band").addClass("fadeIn");
                    $(".p" + currentPage + "__f_1").addClass("fadeIn");
                    $(".p" + currentPage + "__f_2").addClass("fadeIn");
                }, 2000);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_avatar_1").addClass("fadeIn");
                }, 2500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_bubble_1").addClass("bubble_show");
                }, 3000);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_avatar_2").addClass("fadeIn");
                }, 3500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_bubble_2").addClass("bubble_show");
                }, 4000);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_avatar_3").addClass("fadeIn");
                }, 4500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_bubble_3").addClass("bubble_show");
                }, 5000);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_avatar_4").addClass("fadeIn");
                }, 5500);
                setTimeout(function () {
                    $(".p" + currentPage + "__f_bubble_4").addClass("bubble_show");
                }, 6000);
            } else {
                setTimeout(function () {
                    $(".p" + currentPage + "__b_des").addClass("fadeIn");
                }, 1000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_band").addClass("fadeIn");
                    $(".p" + currentPage + "__b_1").addClass("fadeIn");
                    $(".p" + currentPage + "__b_2").addClass("fadeIn");
                }, 1500);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_avatar_1").addClass("fadeIn");
                }, 2000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_bubble_1").addClass("bubble_show");
                }, 2500);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_avatar_2").addClass("fadeIn");
                }, 3000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_bubble_2").addClass("bubble_show");
                }, 3500);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_avatar_3").addClass("fadeIn");
                }, 4000);
                setTimeout(function () {
                    $(".p" + currentPage + "__b_bubble_3").addClass("bubble_show");
                }, 4500);
            }
            break;
        case 4:
            setTimeout(function () {
                $(".p4__t_1").addClass("riseUp");
            }, 500);
            setTimeout(function () {
                $(".p4__t_2").addClass("riseUp");
            }, 700);
            setTimeout(function () {
                $(".p4__t_3").addClass("riseUp");
            }, 900);
            setTimeout(function () {
                $(".p4__hourglass").addClass("fadeIn");
            }, 2500);
            setTimeout(function () {
                $(".p4__t_4").addClass("fadeIn");
            }, 3500);
            break;
        case 5:
            setTimeout(function () {
                $(".p5__t_1").addClass("riseUp");
            }, 500);
            setTimeout(function () {
                $(".p5__t_2").addClass("riseUp");
            }, 700);
            setTimeout(function () {
                $(".p5__t_3").addClass("riseUp");
            }, 900);
            setTimeout(function () {
                $(".p5__lantern").addClass("fadeIn swing");
            }, 1600);
            setTimeout(function () {
                $(".p5__t_4").addClass("riseUp");
                //$(".p5__lantern").addClass("swing");
            }, 2500);
            setTimeout(function () {
                $(".p5__act-wrap").addClass("fadeIn");
                $(".p5__print-wrap").on("touchstart", function () {
                    $(".p5__scanner").css("display", "none");
                    $(".p5__scanner").removeClass("scanner");
                    $(".p5__print").css("opacity", "1");
                    setTimeout(function () {
                        showTheLast = 1;
                        screenForward();
                    }, 500);
                });
            }, 3500);
            break;
        default :
            break;
    }
}

// 闅愯棌鍐呭
function hideContent() {
    var currentPage = pageNumber;
    if (isFlip[currentPage] === 2) {
        $(".p" + currentPage + "__of").css("opacity", "0");
    } else {
        $(".p" + currentPage + "__ob").css("opacity", "0");
    }
}

// 鏄剧ず鍐呭
function showContent() {
    var currentPage = pageNumber;
    if (isFlip[currentPage] == 1) {
        setTimeout(function () {
            $(".p" + currentPage + "__of").css("opacity", "1");
        }, 1000);

    } else {
        setTimeout(function () {
            $(".p" + currentPage + "__ob").css("opacity", "1");
        }, 1000);
    }
}

// 缈昏浆鍥剧墖
function flipCard() {
    var selectorMain = ".p" + pageNumber + "__main";
    var selectorFI = ".p" + pageNumber + "__f_img";
    var selectorBI = ".p" + pageNumber + "__b_img";

    if (isFlip[pageNumber] === 2) {
        // 杞埌鍙嶉潰

        // 姝ｉ潰鍏冪礌娑堝け
        hideContent();

        // 鑳岄潰鍏冪礌鏄剧ず
        showContent();

        // 鐓х墖缈昏浆
        $(selectorMain).addClass("flip");

        if (bIsAndroid) {
            $(selectorFI).addClass("fadeOut");
            $(selectorBI).addClass("fadeIn");
        } else {
            $(selectorBI).css("z-index", "3");
            setTimeout(function () {
                $(selectorFI).css("display", "none");
            }, 500);
        }

        // 鑳屾櫙鍙樿壊
        $(".content-li").eq(pageNumber).addClass("fliped");

        // 鏄剧ず鎸囧紩
        setTimeout(function () {
            $(".notice-swipe-up").addClass("swipeMove");
        }, 1200);

        // 淇敼鍙傛暟
        isFlip[pageNumber] = 1;

        // 鍚庨潰鍏冪礌鏄剧ず
        showElement();
    } else {

        // 杞洖姝ｉ潰

        // 鑳岄潰鍏冪礌娑堝け
        hideContent();

        // 姝ｉ潰鍏冪礌鏄剧ず
        showContent();

        $(selectorMain).removeClass("flip");

        if (bIsAndroid) {
            $(selectorFI).removeClass("fadeOut");
            $(selectorBI).removeClass("fadeIn");
        } else {
            $(selectorBI).css("z-index", "1");
            setTimeout(function () {
                $(selectorFI).css("display", "block");
            }, 500);
        }

        $(".content-li").eq(pageNumber).removeClass("fliped");
        isFlip[pageNumber] = 2;

    }


}

// 婊戝姩灞忓箷鎿嶄綔鐩稿叧

// 涓婁竴灞�
function screenBack() {

    var translateString, transitionString;
    pageNumber--;

    if (pageNumber < 0) {
        pageNumber = 0;
    }
    currentDistance = screenHeight * pageNumber;
    translateString = "translate3d(0, -" + currentDistance + "px, 0)";
    transitionString = "all 0.5s ease-in";

    contentList.css({
        "-webkit-transform": translateString,
        "transform": translateString,
        "-webkit-transition": transitionString,
        "transition": transitionString
    });
}

// 涓嬩竴灞�
function screenForward() {

    var translateString, transitionString;
    pageNumber++;

    if (!showTheLast && pageNumber === 6) {
        pageNumber = 5;
    }

    if (pageNumber > 6) {
        pageNumber = 6;
    }
    currentDistance = screenHeight * pageNumber;
    translateString = "translate3d(0, -" + currentDistance + "px, 0)";
    transitionString = "all 0.5s ease-in";

    contentList.css({
        "-webkit-transform": translateString,
        "transform": translateString,
        "-webkit-transition": transitionString,
        "transition": transitionString
    });

    // 鏄剧ず鍏冪礌
    showElement();

    // 鏄剧ず寮曞
    if (pageNumber !== 6) {
        if (pageNumber === 5) {
            if (showTheLast) {
                setTimeout(function () {
                    $(".notice-swipe-up").addClass("swipeMove");
                }, 800);
            }
        } else {
            setTimeout(function () {
                $(".notice-swipe-up").addClass("swipeMove");
            }, 800);
        }

    } else {
        $(".notice-swipe-up").css("display", "none");
    }
}

function startTouch(event) {
    if (!event.originalEvent.touches.length) {
        return;
    }
    tmpEndY = 0;
    var touch = event.originalEvent.touches[0];
    tmpStartY = touch.pageY;
}

function moveTouch(event) {
    event.preventDefault();
    if (!event.originalEvent.touches.length) {
        return;
    }
    var touch = event.originalEvent.touches[0];
    tmpEndY = touch.pageY;
}

// 瑙︽懜缁撴潫鏃跺垽鏂墽琛屼笂缈绘垨鑰呬笅缈�
function endTouch() {
    var endY = tmpEndY;
    var startY = tmpStartY;
    if (endY && endY !== startY && endY - startY <= -25) {
        console.log(pageNumber + ":" + isFlip[pageNumber]);
        if (isFlip[pageNumber] <= 1) {
            screenForward();
            $(".notice-swipe-up").removeClass("swipeMove");

        } else {
            flipCard();
        }

    } else if (endY && endY !== startY && endY - startY >= 25) {
        console.log(pageNumber + ":" + isFlip[pageNumber]);
        if (!isFlip[pageNumber] || isFlip[pageNumber] === 2) {
            screenBack();
        } else {
            flipCard();
        }

    }
}

// 婊戝姩鐩稿叧 end

// 棰勫姞杞藉浘鐗�

function preImg(ele) {
    var img_src = $(ele).css("background-image");
    img_src = img_src.split("(")[1].split(")")[0];
    var preImg = new Image();
    preImg.src = img_src;
    return preImg;
}

// 姝ｅ紡寮€濮�

// 瀹氫箟鍙橀噺
var screenHeight = $(window).height();
var pageNumber = 0;
var currentDistance = 0;
var contentList = $(".content-list");
var tmpEndY, tmpStartY;
var isFlip = [0, 2, 2, 2, 0, 0, 0];
var showTheLast = 0;


// 鍒ゆ柇鏄惁瀹夊崜

var sUserAgent = navigator.userAgent.toLowerCase();
var bIsAndroid = sUserAgent.match(/android/i) == "android";

// 鍒ゆ柇鏄惁鐭睆鎵嬫満
var isShort;
if ($(window).height() <= 416) {
    isShort = true;
}


// 姣忎竴椤甸珮搴﹁嚜閫傚簲
$(".content-li").each(function () {
    $(this).css("height", $(window).height());
});

// 闀垮睆骞曞鍔犺儗鏅�
if (screenHeight > 504) {
    var gapHeight = (screenHeight - 504) / 2;
    $(".p5__extra").css({"top": -gapHeight, "height": gapHeight + 5});
    $(".p6__extra").css({"top": -gapHeight, "height": gapHeight + 5});
}

// 棣栧睆鍔ㄧ敾
setTimeout(function () {
    $(".p0__bubble").addClass("riseUp");
}, 500);
setTimeout(function () {
    $(".p0__t_1").addClass("riseUp");
}, 800);
setTimeout(function () {
    $(".p0__t_2").addClass("riseUp");
}, 1000);
setTimeout(function () {
    $(".p0__t_3").addClass("riseUp");
}, 1200);


// 缁戝畾缈婚〉
contentList.on("touchstart", function (e) {
    startTouch(e);
});
contentList.on("touchmove", function (e) {
    moveTouch(e);
});
contentList.on("touchend", function (e) {
    endTouch(e);
});

// 杞藉叆鍚庢樉绀烘寚寮�
setTimeout(function () {
    $(".notice-swipe-up").addClass("swipeMove");
}, 500);

// 鏄剧ず鍒嗕韩娴眰
$(".p6__share-btn").on("tap", function () {
    $(".speaker").css("display", "none");
    $(".share-mask").css({
        "display": "block",
        "-webkit-transition": "display 0.3s ease-in",
        "transition": "display 0.3s ease-in"
    });
    setTimeout(function () {
        $(".share-mask").css("display", "none");
        $(".speaker").css("display", "block");
    }, 1500);
});

// 鎺у埗澹伴煶
$(".speaker").on("click", function () {
    var audioEle = document.querySelector("audio");
    if (audioEle.paused) {
        $(".speaker").removeClass("speaker_muted");
        audioEle.play();
    } else {
        $(".speaker").addClass("speaker_muted");
        audioEle.pause();
    }
});

// 鐐瑰嚮鎴栬Е纰板姩浣滄敮鎸�
function clickForward() {
    if (isFlip[pageNumber] <= 1) {
        screenForward();
        $(".notice-swipe-up").removeClass("swipeMove");
    } else {
        flipCard();
    }
}

$(".notice-swipe-up").on("click", function (e) {
    clickForward(e);
});

