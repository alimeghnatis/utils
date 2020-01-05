# template-now-storybook

Inspired by (https://github.com/zeit/now-examples/tree/master/storybook), made more featureful

## Features

+ Babel 7 integration
+ Storybook 5.2.8 for React
+ React Proptypes integration
+ Storybook Docs Addon
+ Eslint Config
+ Stylelint Config (From Palantir)
+ Compiles to both cjs and esm for integration into your apps
+ Made to be deployed on zeit/now. In the continuous deployment style.

## Compatibility

Module | Version
React | 16.8
Babel | 7.7.7
Storybook | 5.2.8

This has not been tested on previous versions

## Installation

1. Clone / Fork the template
2. Install the local packages : `npm i`
3. To compile : (done automatically if you install the package through npm) : `npm run compile` or `npm run compile:show` (displays the output file tree)
4. (optional) configure the linters to match your coding style : `.eslintrc.js` for js and `.stylelintrc` for scss
5. (optional) Install a scss library (see below)
6. (optional) Syncronize with zeit.now. NEw project / Select from github your fork of this template. It goes automatically online.
6. Create your new components !


## Install a SCSS Library

`sass-loader`, `node-sass` are already installed as devDependencies

1. CLone the scss library to src/scss (for instance)
2. Import the scss lib main file in `.storybook/config.js` for instance `import 'scss/main.scss` if you installed it in `src/scss`
3. (Optional) If you want to add the scss library to the context of the components scss files (so that you can reuse the scss variables in the other components), add the path the to the sass-loader, as follows 

```
const ADD_SCSS_LIB_TO_CONTEXT = '../src/scss'

...


{
 test: /\.scss$/,
  loaders: [
    "style-loader",
    "css-loader",
    { loader:'sass-loader', options: {
      sassOptions: {
        includePaths: [path.resolve(__dirname, ADD_SCSS_LIB_TO_CONTEXT)],
      },
    }},
],
 include: path.resolve(__dirname, "../")
}
```

## Create new components

To create new modules in the same coding style

1. Create the module
```
cd ui/module_group
yo @fwrlines/react-component FancyButton
echo "export { FancyButton } from './FancyButton'" >> ./index.js #The local index.js file, at ui/module_group
```

2. Create the story

```
cd src/stories
yo @fwrlines/storybook-story module_group|FancyButton
```

3. The story automatically appears in the storybook


(bonus) To make things a bit faster ... in you .bashrc or .zshrc

```
alias comp="yo @fwrlines/react-component"

alias story="yo @fwrlines/storybook-story
```
