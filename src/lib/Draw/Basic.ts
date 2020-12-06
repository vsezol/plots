import { BasicNamespace, Style, StyleKeys, StyleInner } from './types';

export default abstract class Basic {
  protected ctx!: CanvasRenderingContext2D;
  protected _style!: Style;

  constructor({ context, style }: BasicNamespace.Props) {
    this.ctx = context;
    this.style = style;
  }

  set style(style: Style) {
    this._style = style;
  }

  get style() {
    return this._style;
  }

  protected applyStyle() {
    const keys = Object.keys(this.style) as StyleKeys[];
    keys.forEach((key: StyleKeys) => {
      // @ts-ignore
      this.ctx[key] = this.style[key] as StyleInner;
    });
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

  protected wrapDraw = (draw: Function) => this.usePath(this.useStyle(draw))();
}
