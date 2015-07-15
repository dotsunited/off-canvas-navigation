Off-Canvas Navigation
=====================

Off-Canvas Navigation utilities.

Usage
-----

With webpack:

```javascript
var setup = require('dotsunited-off-canvas-navigation/lib/setup');
setup('off-canvas-navigation');
```

```less
@import "~dotsunited-off-canvas-navigation/lib/mixins";

.off-canvas-navigation-button {
    .dotsunited-off-canvas-navigation-button(off-canvas-navigation);
    
    // Custom styles
    position: absolute;
    top: 10px;
    right: 10px;
}

.off-canvas-navigation-menu {
    .dotsunited-off-canvas-navigation-menu(off-canvas-navigation);
}

.off-canvas-navigation-backdrop {
    .dotsunited-off-canvas-navigation-backdrop(off-canvas-navigation);
}
```

HTML
-----

If it's the only primary navigation menu on the page:

```html
<a aria-controls="off-canvas-navigation-menu" aria-expanded="false" href="#off-canvas-navigation-menu" role="button" class="off-canvas-navigation-button" data-off-canvas-navigation-toggle>
    <span><span></span></span>
</a>

<div aria-hidden="true" class="off-canvas-navigation-backdrop" data-off-canvas-navigation-toggle></div>

<nav id="off-canvas-navigation-menu" class="off-canvas-navigation-menu">
    <ul>
        <li>...</li>
    </ul>
</nav>
```

If there are more than one primary navigation menus, hiding the off-canvas menu
completely for screen readers:

```html
<button aria-hidden="true" class="off-canvas-navigation-button" data-off-canvas-navigation-toggle>
    <span></span>
</button>

<div aria-hidden="true" class="off-canvas-navigation-backdrop" data-off-canvas-navigation-toggle></div>

<nav aria-hidden="true" id="off-canvas-navigation-menu" class="off-canvas-navigation-menu">
    <ul>
        <li>...</li>
    </ul>
</nav>
```

How-tos
-------

### Change the size of the button

To change the size of the button, just set a different width and height for the
first nested `<span>`.

```css
@import "~dotsunited-off-canvas-navigation/lib/mixins";

.off-canvas-navigation-button {
    .dotsunited-off-canvas-navigation-button(off-canvas-navigation);

    > span {
        width: 100px;
        height: 90px;
    }
}
```

License
-------

Copyright (c) 2015 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
