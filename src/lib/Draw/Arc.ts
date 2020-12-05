import { ArcNamespace, Style, StyleKeys, StyleInner } from './types';

export default abstract class Arc {
  protected ctx!: CanvasRenderingContext2D;

  protected _options: ArcNamespace.Options = {
    radius: 1,
  };

  protected _style: Partial<Style> = {};

  constructor({ context, options }: ArcNamespace.ConstructorProps) {
    this.ctx = context;
    this.options = options;
  }

  config(style: Partial<Style> = {}) {
    this.style = style;
    return this;
  }

  set style(style: Partial<Style>) {
    this._style = style;
  }

  get style() {
    return this._style;
  }

  set options(options: ArcNamespace.Options) {
    this._options = options;
  }

  get options() {
    return this._options;
  }

  protected arc(x: number, y: number) {
    this.ctx.arc(x, y, this.options.radius!, 0, Math.PI * 2);
  }

  protected applyStyle() {
    const keys = Object.keys(this.style) as StyleKeys[];

    keys.forEach((key: StyleKeys) => {
      let property = this.ctx[key];
      property = this.style[key] as StyleInner;
    });

    console.log(this.style);
  }

  protected useStyle = (fn: Function) => () => {
    this.applyStyle();
    fn();
  };

  protected usePath = (fn: Function) => () => {
    this.ctx.beginPath();
    fn();
    this.ctx.closePath();
  };
}
