import Arc from './Arc';
import { DotNamespace, Point } from './types';

export default class Dot extends Arc {
  constructor({ context, options, style }: DotNamespace.Props) {
    super({ context, options, style });
  }

  draw(point: Point) {
    this.wrapDraw(() => {
      this.arc(point);
      this.ctx.fill();
    });
  }
}
