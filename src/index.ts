import Canvas from '#src/lib/Canvas';
import App from './App';

import { Point, createDoubleDot, MultiDot, Line } from '#src/lib/Draw';

interface prepareData {
  canvas: Canvas;
  width: number;
  height: number;
}

interface initData extends prepareData {
  dataset: Point[];
  doubleDot: MultiDot;
  line: Line;
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
    const dataset = new Array(6)
      .fill('')
      .map(i => ({ x: Math.random() * width, y: Math.random() * height }));

    const doubleDot = createDoubleDot({
      multiStyle: {
        fillStyle: ['green', 'yellow'],
      },
      multiOptions: {
        radius: [10, 5],
      },
      context: canvas.context,
    });

    const line = new Line({
      context: canvas.context,
      style: {
        strokeStyle: 'brown',
        lineWidth: 5,
        setLineDash: [10, 5],
      },
    });

    return { canvas, width, height, doubleDot, dataset, line };
  },

  run: async ({ dataset, doubleDot, line }) => {
    dataset.reduce((prev, curr) => {
      line.draw([prev, curr]);
      return curr;
    }, dataset[0]);
    dataset.forEach(p => doubleDot.draw(p));
  },
});

window.onload = () => app.start();
