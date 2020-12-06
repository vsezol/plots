export namespace MultiDotNamespace {
  export type DotProps = DotNamespace.Props;

  export interface CreateDoubleDotProps
    extends Omit<CreateMultiDotProps, 'count'> {}

  export interface CreateMultiDotProps {
    multiOptions: MultiOptions;
    multiStyle: MultiStyle;
    context: CanvasRenderingContext2D;
    count: number;
  }

  export type MultiStyleInner = NonNullable<StyleInner[]>;
  export type MultiStyle = { [key in StyleKeys]?: MultiStyleInner };

  export type MultiOptions = { [key in OptionsKeys]?: OptionsInner[] };
  export type OptionsInner = NonNullable<DotNamespace.Options[OptionsKeys]>;
  export type OptionsKeys = keyof DotNamespace.Options;
}

export namespace DotNamespace {
  export interface Props extends ArcNamespace.Props {}

  export interface Options extends ArcNamespace.Options {}
}

export namespace ArcNamespace {
  export interface Props extends BasicNamespace.Props {
    options: Options;
  }

  export interface Options {
    radius: number;
  }
}

export namespace BasicNamespace {
  export interface Props {
    context: CanvasRenderingContext2D;
    style: Style;
  }
}

export interface Point {
  x: number;
  y: number;
}

export type StyleInner = NonNullable<Style[StyleKeys]>;

export type StyleKeys = keyof Style;

export interface Style
  extends Partial<
    Pick<CanvasFillStrokeStyles, 'fillStyle' | 'strokeStyle'> &
      Omit<CanvasPathDrawingStyles, 'getLineDash' | 'setLineDash'>
  > {}
