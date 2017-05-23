# react-text-on-svg
React component that draws an svg box with text on it.

## Features
It's a very easy to use React component, but it already has many possibile configurations:

- Height
- Width
- Text width inside the rectangle
- Font size
- Font weight
- Font family
- Custom class name
- Background color
- Text color

## Installation
Install the package with either yarn or npm.

With yarn:
```sh
$ yarn add react-text-on-svg
```

With npm:
```sh
$ npm install --save react-text-on-svg
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import TextOnSvg from 'react-text-on-svg';

class App extends React.Component {
  render() {
    return (
      <TextOnSvg
        className="text-on-svg",
        text="I am inside the rectangle, and wrapping!",
        width={512}
        height={448},
        textWidth={0.8},
        fontSize={48},
        fontWeight={500},
        fontFamily="OpenSans-Semibold, Open Sans, Helvetica, Arial, sans-serif",
        backgroundColor="#417505",
        color="#FFFFFF",
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

Parameter types are as follows:

- `className`: string
- `text`: string
- `width`: integer number
- `height`: integer number
- `textWidth`: floating point number - this is used as a percentage, see below
- `fontSize`: integer number
- `fontWeight`: integer number
- `fontFamily`: string
- `backgroundColor`: string
- `color`: string

`textWidth` is a percentage of the rectangle width. For example, if you pass 0.8 as text width, the text will use 80% of the rectangle width, always centered horizontally.

## Why u do dis
This component started as a way to experiment using svg elements inside React elements. I wanted to see how easy it could be to create something like Facebook's new posts with colored background. The outcome is not equal to theirs, but it's really close and it could definitely become equivalent by putting more work into this.

## Future developments
I have a couple things in mind that could make this more useful:

- Allowing gradients as a background
- Automatically scale down font size if the text is too long
- Being able to output also as an image (png for example)
