import Canvas from './lib/Canvas';
import App from './App';
import { Point, Dart } from './lib/Draw';

interface prepareData {
  canvas: Canvas;
  width: number;
  height: number;
}

interface initData extends prepareData {
  dart: Dart;
  dataset: Point[];
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

    const dart = new Dart({
      context: canvas.context,
      options: {
        radius: 20,
      },
      style: {
        fillStyle: 'black',
      },
    });

    // const doubleDart = createMultiDart({
    //   styles: [{ fillStyle: 'black' }, { fillStyle: 'white' }],
    //   options: [{ radius: 10 }, { radius: 5 }],
    //   context: canvas.context,
    // });

    return { canvas, width, height, dart, dataset };
  },

  run: async ({ dart, dataset }) => {
    console.log(dataset);

    dataset.forEach(({ x, y }) => dart.draw({ x, y }));
  },
});

window.onload = () => app.start();
