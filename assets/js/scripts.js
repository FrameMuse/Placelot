// Profile

$(".reveal-block__summary").click(function () {
    $(this).parent().toggleClass("reveal-block--revealed");
});


var topbar_wallet_cancel = false;
$(".topbar-wallet").on({
    mouseenter: function () {
        topbar_wallet_cancel = true;
        $(".topbar-wallet__dropdown-menu").css({ display: "grid" });
    },
    mouseleave: function () {
        topbar_wallet_cancel = false;
        setTimeout(() => {
            if (topbar_wallet_cancel) return;
            $(".topbar-wallet__dropdown-menu").css({ display: "" });
        }, 250);
    }
});