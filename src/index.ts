import El from './lib/El';
import App from './App';

interface prepareData {
  canvas: El;
}

interface initData {
  canvas: El;
}

const app = new App<prepareData, initData>({
  prepare: async () => {
    const canvas = new El('#chart-root', 'canvas');
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
