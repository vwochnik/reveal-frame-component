---
layout: default
title: Reveal Frame Component
---

> A privacy-minded iFrame placeholder component.

This component will hide iframes behind a placeholder until the user clicks on it. No request is made until the user clicks on the placeholder. This way, it is possible to ask for consent before an external iframe is being loaded.

## Installation

You can use NPM to install this component.

```
npm i --save reveal-frame-component
```

## Usage

To use this web component in your project you can utilize one of the following styles of syntax.

```
/* In an existing module / web component */
import 'reveal-frame-component';
/* At top of an application */
<script type="module" src="node_modules/reveal-frame-component/dist/bundle.js"></script>
/* Alternatives for top of application */
<script type="module">
  import 'reveal-frame-component';
</script>
```

Now, you can replace `iframe` tags with `reveal-frame` and a placeholder text.

```
<reveal-frame width="560" height="315" src="https://www.youtube.com/embed/4YxTa1AUqps" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
  <p><b>Click to play.</b></p>
  <p>By clicking, data will be sent to YouTube.</p>
</reveal-frame>
```

## Properties

<table>
  <tr>
    <th>Property</th>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><code>width</code></td>
    <td><code>width</code></td>
    <td>String</td>
    <td>Width in pixels or percentual value.</td>
    <td><code>100%</code></td>
  </tr>
  <tr>
    <td><code>height</code></td>
    <td><code>height</code></td>
    <td>String</td>
    <td>Height in pixels.</td>
    <td><code>160</code></td>
  </tr>
  <tr>
    <td><code>src</code></td>
    <td><code>src</code></td>
    <td>String</td>
    <td>IFrame source URL.</td>
    <td><code>http://example.com/</code></td>
  </tr>
  <tr>
    <td><code>allow</code></td>
    <td><code>allow</code></td>
    <td>String</td>
    <td>Feature policy for iFrame</td>
    <td><code>fullscreen</code></td>
  </tr>
</table>

## License

MIT
