export namespace DartNamespace {
  export interface ConstructorProps extends ArcNamespace.ConstructorProps {}

  export interface Options extends ArcNamespace.Options {}
}

export namespace ArcNamespace {
  export interface ConstructorProps {
    context: CanvasRenderingContext2D;
  }

  export interface Options {
    radius: number;
  }
}

export interface Point {
  x: number;
  y: number;
}

export interface Style {
  [key: string]: number | string | Function;
}
