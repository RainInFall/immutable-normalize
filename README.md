# immutable-normalize
---
![build status](https://travis-ci.org/RainInFall/immutable-normalize.svg?branch=master)
## Usage

```js
import Immutable from 'immutable';
import wrap, {set} from 'immutable-normalize';

let data = wrap(Immutable.Map({a:1, b:2}));
console.log(data.a); //1
console.log(data.b); //2
console.log(data.set); //undefined
```
