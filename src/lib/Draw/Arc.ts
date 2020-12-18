import Basic from './Basic';
import { ArcNamespace, Point } from './types';

export default class Arc extends Basic {
  protected _options!: ArcNamespace.Options;

  constructor({ context, options, style }: ArcNamespace.Props) {
    super({ context, style });
    this.options = options;
  }

  set options(options: ArcNamespace.Options) {
    this._options = options;
  }

  get options() {
    return this._options;
  }

  protected arc({x, y}: Point) {
    this.ctx.arc(x, y, this.options.radius!, 0, Math.PI * 2);
  }
}
