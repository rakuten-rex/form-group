# ReX React UI Component: form-group

This project is part of ReX Design System and it can be used to create UI Components compatible with:

React, HTML/CSS and Vue.js  

# How to install

<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />

```
npm install @rakuten-rex/form-group@1.2.0 --save
```

<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/yarn.svg?sanitize=true" height="16" />

```
yarn add @rakuten-rex/form-group@1.2.0
```

# Getting started

## Storybook Live examples

For a complete guide of properties for React and HTML classes please visit our Storybook page:  

[<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/storybook.svg?sanitize=true" height="16" />](https://rakuten-rex.github.io/form-group/)   

https://rakuten-rex.github.io/form-group/   


**Storybook features**
- [x] Stories by component types
- [x] HTML raw output
- [x] JSX output
- [x] Stories source code
- [x] Knobs with multiple options

## ZeroHeight Documentation

For a complete Documentation including all ReX Design System Components, Live HTML/React examples and Demos please visit:

[<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/zh_logo.svg?sanitize=true" height="16" />](https://rakuten-rex.github.io/)   

https://rakuten-rex.github.io/   


# How to integrate ReX in your project
## A) JavaScript modules

### <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

`my-component.jsx`

```jsx
// inline layout
<FormGroup m={1}>
  <FormGroup row={true} mr={3}>
    <input type='text' defaultValue='Element1' readOnly={true} />
  </FormGroup>
  <FormGroup row={true} mr={3}>
    <input type='text' defaultValue='Element2' readOnly={true} />
  </FormGroup>
  <FormGroup row={true}>
    <input type='text' defaultValue='Element3' readOnly={true} />
  </FormGroup>
</FormGroup>

// block layout
<FormGroup mb={3}>
  <label htmlFor='firstName'>
    First Name:
  </label>
  <br />
  <input id='firstName' type='text' defaultValue='First Name' />
</FormGroup>
<FormGroup mb={3}>
  <label htmlFor='lastName'>
    Last Name:
  </label>
  <br />
  <input id='lastName' type='text' defaultValue='Last Name' />
</FormGroup>
<FormGroup>
  <FormGroup mb={3}>
    <label htmlFor='email'>
      Mail Address:
    </label>
    <br />
    <input id='email' type='text' defaultValue='Mail Address' />
  </FormGroup>
  <FormGroup mb={3}>
    <label htmlFor='password'>
      Password:
    </label>
    <br />
    <input id='password' type='text' defaultValue='Password' />
  </FormGroup>
</FormGroup>
```


[Click here](https://rakuten-rex.github.io/form-group/) to see all working examples in Storybook.


### <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

#### Using CSS Variables (Modern Websites and WebApps)

Example: 

`my-component.jsx`

```jsx
import '@rakuten-rex/form-group/FormGroup/css';

function MyCustomComponent() {
  return (
    <!-- inline layout -->
    <div class="rex-form-group rex-m-1">
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element1" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element2" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row"><input type="text" value="Element3" readonly="" /></div>
    </div>
    
    <!-- block layout  -->
    <div class="rex-form-group rex-mb-3"><label for="firstName">First Name:</label><br /><input type="text" id="firstName" value="First Name" /></div>
    <div class="rex-form-group rex-mb-3"><label for="lastName">Last Name:</label><br /><input type="text" id="lastName" value="Last Name" /></div>
    <div class="rex-form-group">
      <div class="rex-form-group rex-mb-3"><label for="email">Mail Address:</label><br /><input type="text" id="email" value="Mail Address" /></div>
      <div class="rex-form-group rex-mb-3"><label for="password">Password:</label><br /><input type="text" id="password" value="Password" /></div>
    </div>
  );
}
```

#### Using Static CSS (Legacy Websites)

Example: 

`my-component.jsx`

```jsx
import '@rakuten-rex/form-group/FormGroup/css/static';

function MyCustomComponent() {
  return (
    <!-- inline layout -->
    <div class="rex-form-group rex-m-1">
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element1" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element2" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row"><input type="text" value="Element3" readonly="" /></div>
    </div>
    
    <!-- block layout  -->
    <div class="rex-form-group rex-mb-3"><label for="firstName">First Name:</label><br /><input type="text" id="firstName" value="First Name" /></div>
    <div class="rex-form-group rex-mb-3"><label for="lastName">Last Name:</label><br /><input type="text" id="lastName" value="Last Name" /></div>
    <div class="rex-form-group">
      <div class="rex-form-group rex-mb-3"><label for="email">Mail Address:</label><br /><input type="text" id="email" value="Mail Address" /></div>
      <div class="rex-form-group rex-mb-3"><label for="password">Password:</label><br /><input type="text" id="password" value="Password" /></div>
    </div>
  );
}
```

[Click here](https://rakuten-rex.github.io/form-group/) to see all working examples in Storybook.


### <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/sass.svg?sanitize=true" height="16" /> Sass mixins

For your own customization of styles (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-styles.scss`

```scss
@import '~@rakuten-rex/form-group/FormGroup/sass/styles.mixin';

.my-component-with-rex-styles {
  @include rex-form-group();
}
```

### <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/vue.svg?sanitize=true" height="16" /> Vue.js

A basic implementation based on HTML structure and import CSS styles into your component.

Example: 

`my-component.vue`

```vue
<template>
    <!-- inline layout -->
    <div class="rex-form-group rex-m-1">
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element1" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element2" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row"><input type="text" value="Element3" readonly="" /></div>
    </div>
    
    <!-- block layout  -->
    <div class="rex-form-group rex-mb-3"><label for="firstName">First Name:</label><br /><input type="text" id="firstName" value="First Name" /></div>
    <div class="rex-form-group rex-mb-3"><label for="lastName">Last Name:</label><br /><input type="text" id="lastName" value="Last Name" /></div>
    <div class="rex-form-group">
      <div class="rex-form-group rex-mb-3"><label for="email">Mail Address:</label><br /><input type="text" id="email" value="Mail Address" /></div>
      <div class="rex-form-group rex-mb-3"><label for="password">Password:</label><br /><input type="text" id="password" value="Password" /></div>
    </div>
</template>
<script>
export default {
  name: 'MyComponent',
}
</script>
<style scoped>
@import "~@rakuten-rex/form-group/FormGroup/css";
</style>
```


## B) Static HTML

Copy-paste the stylesheet `<link>` into your `<head>` tag to load our CSS styles.

### Using CSS Variables (Modern Websites and WebApps)
**Production mode URL** (recommended for Static HTML projects):  
```
https://unpkg.com/@rakuten-rex/form-group@1.2.0/FormGroup/FormGroup.production.min.css
```


Development mode URL (for local testing):  

```
https://unpkg.com/@rakuten-rex/form-group@1.2.0/FormGroup/FormGroup.development.css
```


### Using Static CSS (Legacy Websites)

```
https://unpkg.com/@rakuten-rex/form-group@1.2.0/FormGroup/FormGroup.static.css
```

### <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> Single component integration
Add it from unpkg.com CDN (NPM) into your HTML template or HTML static page.

Example: 

`my-page.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Page</title>
    <!-- ReX form-group -->
    <link href="https://unpkg.com/@rakuten-rex/form-group@1.2.0/FormGroup/FormGroup.production.min.css" rel="stylesheet">
  </head>
  <body>
    <!-- inline layout -->
    <div class="rex-form-group rex-m-1">
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element1" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row rex-mr-3"><input type="text" value="Element2" readonly="" /></div>
      <div class="rex-form-group rex-form-group-row"><input type="text" value="Element3" readonly="" /></div>
    </div>
    
    <!-- block layout  -->
    <div class="rex-form-group rex-mb-3"><label for="firstName">First Name:</label><br /><input type="text" id="firstName" value="First Name" /></div>
    <div class="rex-form-group rex-mb-3"><label for="lastName">Last Name:</label><br /><input type="text" id="lastName" value="Last Name" /></div>
    <div class="rex-form-group">
      <div class="rex-form-group rex-mb-3"><label for="email">Mail Address:</label><br /><input type="text" id="email" value="Mail Address" /></div>
      <div class="rex-form-group rex-mb-3"><label for="password">Password:</label><br /><input type="text" id="password" value="Password" /></div>
    </div>
  </body>
</html>
```

## Documentation, source code and distribution

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/github-icon.svg?sanitize=true" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/zh_logo.svg?sanitize=true" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

## Project Stack

| Front-end |
|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> HTML5 <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS3 & Sass  <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/javascript.svg?sanitize=true" height="16" /> JavaScript ES6 <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React |

| Tools |
|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/webpack.svg?sanitize=true" height="16" /> webpack <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/storybook-icon.svg?sanitize=true" height="16" /> Storybook <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/babel.svg?sanitize=true" height="16" /> Babel <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/eslint.svg?sanitize=true" height="16" /> ESLint <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/logos/prettier.svg?sanitize=true" height="16" /> Prettier |

## Features

| Styles features |  JavaScript features |
|-------------|-------------|
| Theme support via CSS variables |  React components splitted by type |
| Static CSS styles available for HTML/VueJS/AngularJS | Universal Module Definition support |
| Sass mixins for custom builds |
| Reset CSS styles already bundled by HTML tags |
| Removed duplicated CSS props |
| CSS classes prefix `rex-` |

## Browser Support

| PC | Mobile 
|-------------|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/chrome.svg?sanitize=true" height="14" /> Chrome 49+ | <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/apple.svg?sanitize=true" height="14" /> iOS 9+ (Safari 9.3+, Chrome 78+) |
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/safari.svg?sanitize=true" height="14" /> Safari 9.1+ | <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/android-icon.svg?sanitize=true" height="14" /> Android 6+ (Chrome 78+, Android Browser 76+) |
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/firefox.svg?sanitize=true" height="14" /> Firefox 31+ | |
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/microsoft-edge.svg?sanitize=true" height="14" /> MS Edge 15+ | |
| <img src="https://raw.githubusercontent.com/rakuten-rex/form-group/master/project-scripts/webpack/markdown/browsers/internetexplorer.svg?sanitize=true" height="14" /> IE 11+ | |



