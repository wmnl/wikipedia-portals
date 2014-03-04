window.$ = (function() {
    var slice = Array.prototype.slice;

    function $(selector) {
        var els = document.querySelectorAll(selector);
        return slice.call(els);
    }

    return $;
})();