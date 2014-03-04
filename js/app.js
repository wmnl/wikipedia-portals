function App() {
    $("html")[0].className = "js-enabled";
    this.initToggle();
}

App.prototype = {
    initToggle : function() {
        $("[data-toggle]").forEach(function(el) {
            el.addEventListener('click', function(e) {
                var el = $(e.target.attributes.href.value)[0]
                el.classList.remove('toggle-hidden');
                el.classList.add('toggle-show');
            }, false);
        });
    }
};