/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import DevTools from './DevTools';

/*
 * Puts Redux DevTools into a separate window.
 * Based on https://gist.github.com/tlrobinson/1e63d15d3e5f33410ef7#gistcomment-1560218.
 */
export default function createDevToolsWindow(store) {
  // Give it a name so it reuses the same window
  // const name = 'Redux DevTools';
  // const win = window.open(
  //   null,
  //   name,
  //   'menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=637,height=345'
  // );
  //
  // if (!win) {
  //   console.error(
  //     'Couldn\'t open Redux DevTools due to a popup blocker. ' +
  //     'Please disable the popup blocker for the current page.'
  //   );
  //   return;
  // }
  //
  // Reload in case it's reusing the same window with the old content.
  // win.location.reload();

  // Set visible Window title.
  // win.document.title = name;

  // Wait a little bit for it to reload, then render.
  // setTimeout(() => render(
  //   <DevTools store={store}/>,
  //   win.document.body.appendChild(document.createElement('div'))
  // ), 10);
}
