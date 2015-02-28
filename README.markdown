# canvas-gradient

(https://travis-ci.org/hemanth/canvas-gradient) [![npm version](https://badge.fury.io/js/canvas-gradient.svg)](http://badge.fury.io/js/canvas-gradient)
> Clear canvas.

## Installation

`npm install canvas-gradient --save`

## Usage

```js
var cnvsGrad = require('canvas-gradient');

cnvsGrad(ctx, gx1, gy1, gx2, gy2, colorStops, fx, fy, fw, fh) 
```

## API 

* ctx -> canvas 2D context.

* gx1 -> Gradiant start-x.

* gy1 -> Gradiant start-y.

* gx2 -> Gradiant end-x.

* gy2 -> Gradiant end-y.

* colorStops -> [{color,position}...]

* fx -> Fill start-x. [Optional param, defaults to 0]

* fy -> Fill start-y. [Optional param, defaults to 0]

* fw -> Fill width.   [Optional param, defaults to canvas.width]

* fh -> Fill height.  [Optional param, defaults to canvas.height]

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
cnvsGrad(ctx,0,0,500,0,cs);

```




