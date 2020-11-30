export namespace NCanvas {
  export abstract class AbstractCanvas {
    protected rootSelector!: string;
    protected tag!: keyof HTMLElementTagNameMap;

    protected element!: HTMLElement;
    protected rootNode!: Element;
  }

  export interface IProps {
    rootSelector: string;
    tag: keyof HTMLElementTagNameMap;
  }
}
