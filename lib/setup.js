var $ = require('jquery');

module.exports = function(namespace) {
    var toggleSelector = '[data-' + namespace + '-toggle]';
    var openClass = namespace + '--open';

    var body = $(document.body).addClass(namespace);

    $(document)
        .on('click.' + namespace, toggleSelector, function(e) {
            e.preventDefault();

            var expanded = body
                .toggleClass(openClass)
                .hasClass(openClass)
            ;

            $(toggleSelector)
                .attr('aria-expanded', (expanded ? 'true' : 'false'))
                .trigger(namespace + ':' + (expanded ? 'open' : 'close'), [this]);
        })
    ;
};
