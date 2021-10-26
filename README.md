# react-js-nl2br

Replacing newline char with `<br>` in React

Does not generate any extra empty unnecessary lines and `<br>`

### Install

```cmd
npm i react-js-nl2br
```

or

```cmd
yarn add react-js-nl2br
```

### Get started

```javascript
import React from 'react';
import { nl2br } from 'react-js-nl2br';

function Component({ text }) {
    return (
        <div>{ nl2br(text) }</div>
    );
}
```

Do not rush to use this plugin, perhaps this CSS property will help you solve the problem: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space 😉
