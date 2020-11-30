import Canvas from './lib/Canvas';
import App from './App';

interface prepareData {
  canvas: Canvas;
}

interface initData {
  canvas: Canvas;
}

const app = new App<prepareData, initData>({
  prepare: async () => {
    const canvas = new Canvas({ rootSelector: '#chart-root', tag: 'canvas' });
    return {
      canvas,
    };
  },

  init: async ({ canvas }) => {
    try {
      await canvas.create();
      canvas.mount();
    } catch (err) {
      throw err;
    } finally {
      return { canvas };
    }
  },

  run: async ({ canvas }) => {
    return { canvas };
  },
});

window.onload = () => app.start();
