'use strict';

/**
 * The Viewport represents the entire drawable area in the browser
 */
class Viewport {
  constructor({ darkMode = false } = {}) {
    // Get viewport dimensions
    this.width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    this.height = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    // Create a 'screen' that covers the whole viewport
    this.screen = document.createElement('div');
    this.screen.style.position = 'absolute';
    this.screen.style.top = 0;
    this.screen.style.right = 0;
    this.screen.style.bottom = 0;
    this.screen.style.left = 0;
    this.screen.style.backgroundColor = darkMode ? '#000' : '#fff';
    document.body.appendChild(this.screen);
  }
}

/**
 * A Pixel is a div that has a background color and an opacity
 */
class Pixel {
  constructor({ color, opacity } = {}) {
    this.pixel = document.createElement('div');
    this.setColor(color);
    this.setOpacity(opacity);
  }
  setColor(newColor = '#000') {
    this.color = newColor;
    this.pixel.style.backgroundColor = newColor;
  }
  setOpacity(newOpacity = 1) {
    this.opacity = newOpacity;
    this.pixel.style.opacity = newOpacity;
  }
}

/**
 * The Grid covers the Viewport in a series of Pixels
 */
class Grid {
  constructor({ darkMode = false } = {}) {
    this.viewport = new Viewport({ darkMode });
  }
}

const test = new Grid({ darkMode: true });
