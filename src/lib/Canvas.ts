import { NCanvas } from '../types/Canvas';

export default class Canvas extends NCanvas.AbstractCanvas {
  constructor({ rootSelector, width = 600, height = 400 }: NCanvas.IProps) {
    super();
    this.rootSelector = rootSelector;
    this.width = width;
    this.height = height;
  }

  create = () =>
    new Promise<void | Error>((res, rej) => {
      const rootNode = document.querySelector(this.rootSelector);
      if (!!rootNode) {
        this.rootNode = rootNode;
        this.element = document.createElement('canvas');
        this._context = this.element.getContext('2d')!;
        this.element.setAttribute('width', this.withPx(this.width));
        this.element.setAttribute('height', this.withPx(this.height));
        res();
      } else {
        rej(new Error(`rootNode(${this.rootSelector}) is falsy!`));
      }
    });

  mount() {
    this.rootNode.appendChild(this.element);
  }

  get context() {
    return this._context;
  }

  private withPx(value: number) {
    return value + 'px';
  }
}
