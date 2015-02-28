# canvas-gradient

[![Build Status](https://travis-ci.org/hemanth/canvas-gradient.svg)](https://travis-ci.org/hemanth/canvas-gradient) [![npm version](https://badge.fury.io/js/canvas-gradient.svg)](http://badge.fury.io/js/canvas-gradient)
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

## Demo 

Checkout the live [demo](http://requirebin.com/?gist=a16d9e7380ca40a7dd96).

## API

```js
clear(ctx, saveTransform);
```

```ctx``` : 2D canvas context.

```saveTransform```: [Optional] Defaults to `true`, need if you need to preverse the state.




