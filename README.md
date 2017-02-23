# React Modaliz
React component which provide nice and simple modal popup window

## Example
https://ivanzusko.github.io/react-modaliz/

## Installation
Just run
```javascript
npm i react-modaliz
```
or (if you are using __Yarn__)
```javascript
yarn add react-modaliz
```

## Usage
```javascript
import Modaliz from 'react-modaliz';

<Modaliz
    className="any-custom-class"
    onClose={this.closeModal}
    show={this.state.showModal}
    speed={500}
>
    <h1>You title</h1>
    <div>
        <p>Lorem inpsum</p>
    </div>
</Modaliz>
```

## Customization

Property | Type | isRequired | Default value | Description
:---|:---|:---|:---|:---
`className` | string | `false` | | Set your className which will get suffix `-wrapper` for whole modal popup component, suffix `-container` for modal-box and suffix `-overlay` for overlay. E.g.: `yourName-wrapper`, `yourName-container`, `yourName-close` and `yourName-overlay`
`conditionalRender` | boolean | `false` | `false` | in some cases, if you need conditional render (e.g.: `{ifSomethingTrue && <Modaliz></Modaliz>}`) you should add `conditionalRender` property to `Modaliz` component
`discardDefaults` | boolean | `false` | `false` | Set it to be `true` if you very badly want to discard all default styles
`onClose` | Function | `true` |  | Handler for closing the modal window
`show` | boolean | `false` | `false` | flag responsible for showing Modal
`speed` | number | `false` | `100` | Speed of the fading in effect


### P.S.
Huge appreciation to [JULIAN ĆWIRKO](http://julian.io/) for his [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)
