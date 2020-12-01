import Canvas from './lib/Canvas';
import Draw from './lib/Draw';
import App from './App';

interface prepareData {
  canvas: Canvas;
}

interface initData {
  draw: Draw;
}

const app = new App<prepareData, initData>({
  prepare: async () => {
    const canvas = new Canvas({ rootSelector: '#chart-root' });
    await canvas.create();
    canvas.mount();

    return { canvas };
  },

  init: async ({ canvas }) => {
    try {
      const draw = new Draw({ canvas });

      return { draw };
    } catch (err) {
      throw err;
    }
  },

  run: async ({ draw }) => {
    const d = draw.config({
      lineWidth: 5,
      lineJoin: 'round',
      lineCup: 'round',
      strokeStyle: 'purple',
    });

    const dataset = new Array(10)
      .fill('')
      .map(i => ({ x: Math.random() * 600, y: Math.random() * 400 }));

    dataset.reduce((from, to) => {
      d.line({from, to});
      return to;
    });
  },
});

window.onload = () => app.start();
