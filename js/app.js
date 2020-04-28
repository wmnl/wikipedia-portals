(function() {
    function $(selector) {
        return document.querySelector(selector);
    }

    function $$(selector) {
        var els = document.querySelectorAll(selector);
        return Array.prototype.slice.call(els);
    }

    function addTouchClass() {
        if ('ontouchend' in window) {
            $("html").classList.add('has-touch');
        } else {
            $("html").classList.add('has-mouse');
        }
    }

    function initToggle() {
        $$("[data-toggle]").forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                var el = $(e.currentTarget.attributes.href.value);
                var toggleState = el.dataset.toggleState;
                el.dataset.toggleState = toggleState === 'hidden' ? 'show' : 'hidden';
            }, false);
        });
    }

    function konami() {
        var input = '';
        var key = '38384040373937396665';
        var url = 'https://en.wikipedia.org/wiki/Stroopwafel';

        document.addEventListener('keydown', function (e) {
            input += ("" + e.keyCode);

            if (input === key) {
                window.location = url;
            }

            if (!key.indexOf(input)) {
                return;
            }

            input = ("" + e.keyCode);
        });
    }

    function main() {
        $("html").classList.add('has-js');
        $("#search").focus();
        initToggle();
        addTouchClass();
        konami();
    }

    main();
})();