# tslint-mango v0.1.2

TSLint preset

The recommended `.prettierrc` is included, but must be installed manually.

This preset extends the following presets (in order):

- [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
- [`alexjoverm/tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier)
- [`Glavin001/tslint-clean-code`](https://github.com/Glavin001/tslint-clean-code)
- [`palantir/tslint-react`](https://github.com/palantir/tslint-react)
- [`dividab/tslint-divid`](https://github.com/dividab/tslint-divid)
- [`jwbay/tslint-misc-rules`](https://github.com/jwbay/tslint-misc-rules)
- custom configuration

## Rules

Here are the rules I use from each of the presets.

Unlisted presets have all of their rules used.

### tslint-clean-code

- `"no-commented-out-code": true`

### tslint-react

- `(insert default rules here)`
- `"jsx-curly-spacing": [true, "never"]`
- `"jsx-equals-spacing": [true, "never"]`
- `"jsx-no-lambda": false`
- `"jsx-self-close": true`
- `"jsx-space-before-trailing-slash": true`

### tslint-divid

- [`"no-semicolon-interface": true`](https://github.com/dividab/tslint-divid#no-semicolon-interface)

### tslint-misc-rules

- [`"class-method-newlines": true`](https://github.com/jwbay/tslint-misc-rules#3)
- [`"jsx-no-closing-bracket-newline": true`](https://github.com/jwbay/tslint-misc-rules#6)
- [`"jsx-no-braces-for-string-attributes": true`](https://github.com/jwbay/tslint-misc-rules#7)
- [`"react-lifecycle-order": true`](https://github.com/jwbay/tslint-misc-rules#8)
