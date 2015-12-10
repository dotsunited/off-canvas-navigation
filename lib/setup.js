(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else {
        window.dotsunitedOffCanvasNavigation = factory(window, window.jQuery || window.Zepto);
    }
}(typeof window !== 'undefined' ? window : this, function(window, $) {
    return function(namespace) {
        var toggleSelector = '[data-' + namespace + '-toggle]';
        var openClass = namespace + '--open';

        var root = $('html').addClass(namespace);

        $(window.document)
            .on('click.' + namespace, toggleSelector, function(e) {
                e.preventDefault();

                var expanded = root
                    .toggleClass(openClass)
                    .hasClass(openClass)
                ;

                $(toggleSelector)
                    .attr('aria-expanded', (expanded ? 'true' : 'false'))
                    .trigger(namespace + ':' + (expanded ? 'open' : 'close'), [this]);
            })
        ;
    };
}));
