export default class El {
  rootSelector: string;
  tagName: keyof HTMLElementTagNameMap;

  element!: HTMLElement;
  rootNode!: Element;

  constructor(rootSelector: string, tagName: keyof HTMLElementTagNameMap) {
    this.rootSelector = rootSelector;
    this.tagName = tagName;
  }

  create = () =>
    new Promise<void | Error>((res, rej) => {
      const rootNode = document.querySelector(this.rootSelector);
      if (!!rootNode) {
        this.rootNode = rootNode;
        this.element = document.createElement(this.tagName);
        res();
      } else {
        rej(new Error(`rootNode(${this.rootSelector}) is falsy!`));
      }
    });

  mount() {
    this.rootNode.appendChild(this.element);
  }
}
