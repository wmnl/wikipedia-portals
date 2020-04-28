(function() {
    function $(selector) {
        var els = document.querySelectorAll(selector);
        return Array.prototype.slice.call(els);
    }

    function initToggle() {
        $("[data-toggle]").forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                var el = $(e.target.attributes.href.value)[0]
                var toggleState = el.dataset.toggleState;
                el.dataset.toggleState = toggleState === 'hidden' ? 'show' : 'hidden';
            }, false);
        });
    }

    function main() {
        $("html")[0].className = "js-enabled";
        $("#search")[0].focus();
        initToggle();
    }

    main();
})();