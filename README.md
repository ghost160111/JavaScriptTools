# JavaScriptTools

Library - JavaScript tools which consists set of classes that solves basic code duplicates in your code like checking type, setting custom exception handlers, manipulating, traversing, seleting in Document Object Model, object methods, array methods, and basic Ajax GET, POST functionalities with custom data manipulation.

## How to use library

```js
import JavaScriptTools from 'javascript-tools-library';

// destructure this class

const [
   Ajax,
   Traversing,
   Manipulation,
   DOMTools,
   ArrayTools,
   ObjectTools,
   ...
] = JavaScriptTools;

// and use it

Ajax.getAjax('https://foo-bar.com', (data) => console.log(data));
Ajax.postAjax('https://foo-bar.com', (data) => alert(data + ' is posted!'));
```
