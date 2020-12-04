import { compose } from '../compose';
import { ArcNamespace, Style } from './types';

export default abstract class Arc {
  protected ctx: CanvasRenderingContext2D;
  protected options = {
    radius: 1,
  };

  protected style: Style = {};

  constructor({ context }: ArcNamespace.ConstructorProps) {
    this.ctx = context;
  }

  radius(r: number) {
    this.options.radius = r;
    return this;
  }

  protected arc(x: number, y: number) {
    this.ctx.arc(x, y, this.options.radius, 0, Math.PI * 2);
  }

  protected applyStyle() {
    Object.keys(this.style).forEach(key => {
      const item = this.style[key];
      // @ts-ignore
      typeof item !== 'function' ? (this.ctx[key] = item) : item();
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
}
