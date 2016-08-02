# canvas-gradient 
> Gradient with canvas.

[![npm version](https://badge.fury.io/js/canvas-gradient.svg)](http://badge.fury.io/js/canvas-gradient)

## Installation

`npm install canvas-gradient --save`

## Usage

```js
var cnvsGrad = require('canvas-gradient');

// For linear gradient.
cnvsGrad(ctx, fx, fy, fw, fh).linear(gx1, gy1, gx2, gy2, colorStops);

// For radial gradient.
cnvsGrad(ctx, fx, fy, fw, fh).linear(x0, y0, r0, x1, y1, r1);

```

## API 

__Setup:__

* ctx -> canvas 2D context.

* fx -> Fill start-x. [Optional param, defaults to 0]

* fy -> Fill start-y. [Optional param, defaults to 0]

* fw -> Fill width.   [Optional param, defaults to canvas.width]

* fh -> Fill height.  [Optional param, defaults to canvas.height]

__For linear:__

* gx1 -> Gradiant start-x.

* gy1 -> Gradiant start-y.

* gx2 -> Gradiant end-x.

* gy2 -> Gradiant end-y.

* colorStops -> [{color,position}...]

__For radail:__

* x0 -> x-axis for start circle.

* y0 -> y-axis for end circle.

* r0 -> Radius of the start circle.

* x1 -> x-axis of the end circle.

* y1 -> y-axis of the end circle.

* r1 -> Radius of the end circle.

---

Checkout the live [demo](http://requirebin.com/?gist=020e9257b98e22fa90ee).


```js
var cnvsGrad = require('canvas-gradient');

//canvas setup
var canvas  =  document.createElement('canvas');
canvas.width = '500';
canvas.height = '300';
canvas.style.outline = "1px solid black";
document.body.appendChild(canvas);

// Get the context.
var ctx = canvas.getContext('2d');

// Set up color stop points
var cs = [
  {color:"black", position:0}, 
  {color:"grey",position:0.5},
  {color:"white",position:1}
];

// Draw gradient.
cnvsGrad(ctx).linear(0,0,500,0,cs);

// Similarly for radial 
cnvsGrad(ctx).radial(100,100,100,0,cs);

```




