# What it is

This is a simple patient monitor emulator designed for multi-screen use in training medical students. It displays a basic patient monitor in one window, and allows you to control that display from another.

# How to use it

Open the control panel on one monitor, and the display panel in another (in separate windows of the same browser.) They need to be loaded from the same place for data transfer to work, and they run just fine on github, so you can just load http://itaniknight.github.io/monitor and http://itaniknight.github.io/monitor/display.html .

To update the display, click the links on the display panel, and type things in the boxes. That's all there is to it. You can't break anything accidentally, so just play around with it.

# Credits

- ECG images drawn by Chris Robinson

- Base16's **Tomorrow Night** colours: https://chriskempson.github.io/base16/
- Just the grid from **Bootstrap 4**: https://v4-alpha.getbootstrap.com/
- Probably didn't need **jQuery**: https://vuejs.org/
- Debounce function from **Lodash**: https://lodash.com/
- For everything else, **Vue.js**: https://vuejs.org/

# Troubleshooting

If anything goes wrong, the first thing to do is refresh the control panel. This won't delete the current data, as it's all stored in your browser. If data _is_ the problem, click the _reset everything_ button at the bottom of the screen. This fixes most things refreshing doesn't.

# Caveats

No attempt has been made to support Internet Explorer or Safari on any system. The app should work fine in Firefox and Chrome, assuming updates to either don't break it.

# Known Bugs

- If you've used the app before, and I've update it since then, you might need to _reset everything_ to get the new data.

- Sometimes the UI font doesn't load and the browser displays nothing instead. Browser refreshing fixes this most of the time.

- The ECG images don't display on tablet browsers. No idea why; they display in desktop Chrome, and in desktop Chrome's tablet view, but not in tablet Chrome or Safari.

- The storage event doesn't fire in Chrome if you're running the app locally. This is a deliberate security feature, and you can disable it in Chrome, but you're generally better off running it from the github URL instead.
