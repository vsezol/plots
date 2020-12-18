import Basic from './Basic';
import { LineNamespace, Point } from './types';

export default class Line extends Basic {
  constructor({ context, style }: LineNamespace.Props) {
    super({ context, style });
  }

  protected line([from, to]: [Point, Point]) {
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
  }

  draw(points: [Point, Point]) {
    this.wrapDraw(() => {
      this.line(points);
      this.ctx.stroke();
    });
  }
}
