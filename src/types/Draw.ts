import Canvas from 'lib/Canvas';

export namespace NDraw {
  export abstract class AbstractDraw {
    protected rootSelector!: string;
    protected canvas!: Canvas;
    protected ctx!: CanvasRenderingContext2D;
  }

  export interface IConfigLineProps {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    lineCup?: CanvasLineCap;
    lineJoin?: CanvasLineJoin;
    lineDash?: number[];
  }

  export interface IConfigDartProps {
    fillStyle?: string;
    radius?: number;
  }

  export interface IConfigHoleProps {
    strokeStyle?: string;
    radius?: number;
    lineWidth?: number;
  }

  export interface ILineProps {
    from: IPoint;
    to: IPoint;
  }

  export interface IPoint {
    x: number;
    y: number;
  }

  export interface IProps {
    canvas: Canvas;
  }
}
