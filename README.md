# eslint-plugin-banno-web

Custom ESLint rules for banno-web

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-banno-web`:

```
$ npm install eslint-plugin-banno-web --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-banno-web` globally.

## Usage

Add `banno-web` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "banno-web"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "banno-web/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





