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
        $("html")[0].className = "js-enabled";
        $("#search")[0].focus();
        initToggle();
        konami();
    }

    main();
})();