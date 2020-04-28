(function() {
    function $(selector) {
        var els = document.querySelectorAll(selector);
        return Array.prototype.slice;.call(els);
    }

    function initToggle() {
        $("[data-toggle]").forEach(function(el) {
            el.addEventListener('click', function(e) {
                var el = $(e.target.attributes.href.value)[0]
                el.classList.remove('toggle-hidden');
                el.classList.add('toggle-show');
            }, false);
        });
    }

    function main() {
        $("html")[0].className = "js-enabled";
        $("#search")[0].focus();
        initToggle();
    }
})();