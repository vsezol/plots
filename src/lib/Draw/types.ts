export namespace MultiDartNamespace {}

export namespace DartNamespace {
  export interface ConstructorProps extends ArcNamespace.ConstructorProps {}
}

export namespace ArcNamespace {
  export interface ConstructorProps {
    context: CanvasRenderingContext2D;
    options: Options;
  }

  export interface Options {
    radius: number;
  }  
}

export interface Point {
  x: number;
  y: number;
}

export type StyleKeys = keyof Style;
export interface Style extends
  Partial <
    Pick <
      CanvasFillStrokeStyles,
      'fillStyle' | 'strokeStyle'
    >
    & Omit <
      CanvasPathDrawingStyles,
      'getLineDash' | 'setLineDash'
    >
  > {}
export type StyleInner = NonNullable<Style[StyleKeys]>;