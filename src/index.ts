import Canvas from './lib/Canvas';
import App from './App';
import {
  Point,
  createDoubleDot,
  MultiDot,
} from './lib/Draw';

interface prepareData {
  canvas: Canvas;
  width: number;
  height: number;
}

interface initData extends prepareData {
  dataset: Point[];
  doubleDot: MultiDot;
}

const app = new App<prepareData, initData>({
  prepare: async () => {
    const width = 1000;
    const height = 500;

    const canvas = new Canvas({ rootSelector: '#chart-root', width, height });

    await canvas.create();
    canvas.mount();

    return { canvas, width, height };
  },

  init: async ({ canvas, width, height }) => {
    const dataset = new Array(5)
      .fill('')
      .map(i => ({ x: Math.random() * width, y: Math.random() * height }));

    const doubleDot = createDoubleDot({
      multiStyle: {
        fillStyle: ['green', 'red'],
      },
      multiOptions: {
        radius: [10, 5],
      },
      context: canvas.context,
    });

    return { canvas, width, height, doubleDot, dataset };
  },

  run: async ({ dataset, doubleDot }) => {
    dataset.forEach(({ x, y }) => doubleDot.draw({ x, y }));
  },
});

window.onload = () => app.start();
