export namespace NCanvas {
  export abstract class AbstractCanvas {
    protected rootSelector!: string;

    protected element!: HTMLCanvasElement;
    protected rootNode!: Element;

    protected width!: number;
    protected height!: number;

    protected _context!: CanvasRenderingContext2D;
  }

  export interface IProps {
    rootSelector: string;
    width?: number;
    height?: number;
  }
}
