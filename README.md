# XSOAR and Observable Framework
This repository demonstrates how we want to embed interactive views from
Observable Framework in XSOAR.

While the Observable Framework documentation explains
[embeds](https://observablehq.com/framework/embeds) in detail, what it reduces
to is the ability of XSOAR to insert this type of script tag into its pages.

```html
<script type="module">
    import {Chart} from "https://somehost.com/chart.js";
    document.body.append(await Chart());
</script>
```

## Repository Overview

This repository consists of two projects:

- `observable`: An Observable Framework application containing the
  [Chart](observable/src/chart.js) module that we want to embed.
- `xsoar`: This is just a single [index.html](xsoar/index.html) file containing
  the script that loads the module. It is meant to represent XSOAR.

Below is a diagram that shows the connection between XSOAR and the web app that
serves the Observable Framework build.

![XSOAR Demo Overview](overview.drawio.svg)