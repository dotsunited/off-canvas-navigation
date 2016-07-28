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
                    if (!panel.length || panel.index(e.target) >= 0 || $.contains(panel.get(0), e.target)) {
                        return;
                    }

                    close(toggle, panel);
                })
            ;

            root.addClass(openClass);
        }

        function close(toggle, panel) {
            $document
                .off('.' + namespace + '-internal')
            ;

            panel
                .attr('aria-hidden', 'true')
                .removeAttr('tabindex')
                .blur()
            ;

            toggle
                .attr('aria-expanded', 'false')
                .focus()
                .trigger(namespace + ':' + 'open', [toggle, panel])
            ;

            root.removeClass(openClass);
        }

        $document
            .on('click.' + namespace, toggleSelector, function(e) {
                var toggle = $(this);
                var target = toggle.attr('href');
                var panel, controls;

                if (!target) {
                    controls = toggle.attr('aria-controls');

                    if (!!controls) {
                        target = '#' + controls;
                    }
                }

                panel = !target ? $() : $(target);

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
