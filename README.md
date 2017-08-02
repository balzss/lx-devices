# lx-devices.js
Customizable and easy to use IOS, Android and OSX device frames in one line of HTML!

## How it looks
![Imgur](http://i.imgur.com/seSABLA.png)

## Features
- Easy to use, easy to customize
- No icon font dependency, every icon is included as SVG
- Multiple builtin box shadow
- Working clock in the topbar
- Lightweight: ~3KB minified and gzipped

## How to use it
- Download with npm or CDN:
```
npm install lx-devices
```
```
<script src="https://cdn.rawgit.com/balzss/lx-devices/2e0606ed/dist/lx-devices.min.js"></script>
```

- Include it in your html:
``` html
<div class="lx-android" data-width="225px" data-height="400px" data-shadow="3"></div>
```
- Where the classname should be `lx-android`, `lx-ios` or `lx-osx` based on your needs
- **Every data attribute is optional**
- The shadow attribute accepts numbers 1 to 5 and sets a material shadow [according to this](https://codepen.io/sdthornton/pen/wBZdXq)
- If you only set the height or only the width the other value will be 16/9 or 3/2 proportion to that. (for Android/IOS
  and OSX relatively)
- If you don't provide neither width nor height attribute itt will set to 225px width and 400px height for Android/IOS
  and 480px width 320px height for OSX
- You can also use the `data-title` attribute for OSX to set the window's title
- The font is set to Roboto and defaults to sans-serif, so if you include Roboto in your project it will set itself to it
- If you want to target the topbar bottombar or the screen on the devices with your CSS you can do that with the
  `lx-topbar`, `lx-bottombar` and `lx-screen` respectively

## Other
- If you have any question, suggestion or found a bug please open an issue
- You can contact me at [balazs.saros@gmail.com](mailto:balazs.saros@gmail.com)
