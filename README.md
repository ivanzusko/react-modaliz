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
#### normal variant
with custom markup which will be passed as the children:
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
#### simple variant
without any children, just passed as the props `title` and `text`:
```javascript
import Modaliz from 'react-modaliz';

<Modaliz
    className="any-custom-class"
    onClose={this.closeModal}
    show={this.state.showModal}
    simple
    speed={500}
    text="Lorem inpsum"
    title="You title"
/>
```
Under the hood `title` will appear as `h1` and `text` as a `p` in the `div`

## Customization

Property | Type | isRequired | Default value | Description
:---|:---|:---|:---|:---
`className` | string | `false` | | Set your className which will get suffix `-wrapper` for whole modal popup component, suffix `-container` for modal-box and suffix `-overlay` for overlay. E.g.: `yourName-wrapper`, `yourName-container`, `yourName-close` and `yourName-overlay`
`conditionalRender` | boolean | `false` | `false` | in some cases, if you need conditional render (e.g.: `{ifSomethingTrue && <Modaliz></Modaliz>}`) you should add `conditionalRender` property to `Modaliz` component
`discardDefaults` | boolean | `false` | `false` | Set it to be `true` if you very badly want to discard all default styles
`onClose` | Function | `true` |  | Handler for closing the modal window
`show` | boolean | `false` | `false` | flag responsible for showing Modal
`simple` | boolean | `false` | `false` | If you do not want to pass any children into Modaliz and just want to display some **title** and **text**, then set `simple` and just pass `title` and `text` as the props. If `simple` is present/true and for some reason children are passed, then children will be ignored
`speed` | number | `false` | `100` | Speed of the fading in effect
`text` | string | `false` | `''` | Pass any string as content of the **Modaliz**. Works only if `simple` is present/true
`title` | string | `false` | `''` | Pass any string as title of the **Modaliz**. Works only if `simple` is present/true


### P.S.
Huge appreciation to [JULIAN ĆWIRKO](http://julian.io/) for his [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)
