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

```html
<button
    aria-label="Open navigation"
    aria-controls="off-canvas-navigation-menu"
    aria-expanded="false"
    class="off-canvas-navigation-button"
    data-off-canvas-navigation-toggle
>
    <span><span></span></span>
</button>

<div aria-hidden="true" class="off-canvas-navigation-backdrop"></div>

<section
    id="off-canvas-navigation-menu"
    aria-hidden="true"
    hidden
    class="off-canvas-navigation-menu"
>
    <nav>
        <ul>
            <li>...</li>
        </ul>
    </nav>
</section>
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

Copyright (c) 2015-2016 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
