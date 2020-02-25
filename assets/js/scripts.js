// Classes

class popup {
    static on = { };
    static tend(option) {
        var element = ".popup-window__" + option;
        return $(element);
    }

    static wEdit(options = {}) {
        for (var option in options) {
            this.tend(option).html(options[option]);
        }
    }

    static fadeIn(obj) {
        $(".popup").removeAttr("hidden");
        setTimeout(() => {
            obj.removeClass("scale-out scale-in").addClass("scale-in")
        }, 50);
    }

    static fadeOut() {
        var popup = $(".popup");
        popup.find("> *:not(.popup__cover)").removeClass("scale-out scale-in").addClass("scale-out");
        setTimeout(() => {
            return popup.attr("hidden", "");
        }, 200);
    }

    static open($window, options = {}) {
        // Clearing
        this.wEdit({
            title: null,
            summary: null,
            content: null,
        });

        this.on[$window].apply(this, options);

        // Animation
        this.fadeIn($(".popup-window"));
    }

    static close(force = false) {
        if (force) this.fadeOut();
        $(".popup-window__close, .popup__cover").click();
    }
}

// Profile

$(document).click(function () {
    $(".topbar-wallet__dropdown-menu").removeClass("topbar-wallet__dropdown-menu--active");
});

$(".reveal-block__summary").click(function () {
    $(this).parent().toggleClass("reveal-block--revealed");
});

$(".topbar-wallet > .topbar-wallet__text").click(function (e) {
    e.stopPropagation();
    $(".topbar-wallet__dropdown-menu").toggleClass("topbar-wallet__dropdown-menu--active");
});

$(document).on("click", ".popup-window__close, .popup__cover", () => {
    popup.fadeOut();
});

popup.on["profile_settings"] = function () {
    this.wEdit({
        title: "Header",
        summary: "Summary",
        content: "Content",
    });
};