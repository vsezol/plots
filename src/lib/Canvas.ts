import { NCanvas } from '../types/Canvas';

export default class Canvas extends NCanvas.AbstractCanvas {
  constructor({ rootSelector, tag }: NCanvas.IProps) {
    super();
    this.rootSelector = rootSelector;
    this.tag = tag;
  }

  create = () =>
    new Promise<void | Error>((res, rej) => {
      const rootNode = document.querySelector(this.rootSelector);
      if (!!rootNode) {
        this.rootNode = rootNode;
        this.element = document.createElement(this.tag);
        res();
      } else {
        rej(new Error(`rootNode(${this.rootSelector}) is falsy!`));
      }
    });

  mount() {
    this.rootNode.appendChild(this.element);
  }
}
