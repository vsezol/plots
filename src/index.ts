import El from './lib/El';

const canvas = new El('#chart-root', 'canvas');

function init() {
  return new Promise((res, rej) => {
    canvas
      .create()
      .then(() => {
        canvas.mount();
        res();
      })
      .catch(err => rej(err));
  });
}

function main() {
  
}

window.onload = async () => {
  try {
    await init();
    main();
  } catch (err) {
    console.log(err);
  }
};
