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
    var $document = $(window.document);

    return function(namespace) {
        var toggleSelector = '[data-' + namespace + '-toggle]';
        var openClass = namespace + '--open';

        var root = $('html').addClass(namespace);

        function open(toggle, panel) {
            root.addClass(openClass);

            toggle
                .attr('aria-expanded', 'true')
                .trigger(namespace + ':' + 'open', [toggle, panel])
            ;

            panel
                .attr('aria-hidden', 'false')
                .removeAttr('hidden')
                .attr('tabindex', -1)
                .scrollTop(0)
                .focus()
            ;

            $document
                .on('keydown.' + namespace + '-internal', function(e) {
                    if (e.keyCode !== 27) {
                        return;
                    }

                    close(toggle, panel);
                })
                .on('click.' + namespace + '-internal', function(e) {
                    if (panel.index(e.target) >= 0 || $.contains(panel.get(0), e.target)) {
                        return;
                    }

                    close(toggle, panel);
                })
            ;
        }

        function close(toggle, panel) {
            $document
                .off('.' + namespace + '-internal')
            ;

            root.removeClass(openClass);

            panel
                .attr('aria-hidden', 'true')
                .attr('hidden', 'true')
                .removeAttr('tabindex')
                .blur()
            ;

            toggle
                .attr('aria-expanded', 'false')
                .focus()
                .trigger(namespace + ':' + 'open', [toggle, panel])
            ;
        }

        $document
            .on('click.' + namespace, toggleSelector, function(e) {
                var toggle = $(this);
                var target = toggle.attr('href');

                if (!target) {
                    target = '#' + toggle.attr('aria-controls');
                }

                var panel = $(target);

                if (!panel.length) {
                    return;
                }

                e.preventDefault();

                if (root.hasClass(openClass)) {
                    close(toggle, panel);
                } else {
                    open(toggle, panel);
                }
            })
        ;
    };
}));
