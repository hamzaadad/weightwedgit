# weightwedgit

> a fun project

![alt text](https://github.com/hamzaadad/weightwedgit/blob/master/demo.png?raw=true)


[![NPM](https://img.shields.io/npm/v/weightwedgit.svg)](https://www.npmjs.com/package/weightwedgit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save weightwedgit
```

## Usage

```jsx
import React, { Component } from 'react'

import Weightwedgit from 'weightwedgit'

class Example extends Component {
  render () {
    const props = {name: 'wight', unit: 'kg', step: 5, value: 80, min: 20, max: 180};
    return (
      <Weightwedgit ...props />
    )
  }
}
```

## RoadMap
get rid of setTimeout.... uuukh
## License

MIT © [Hamza ADAD](https://github.com/Hamza ADAD)
