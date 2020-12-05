import Arc from './Arc';
import { DartNamespace, Style, Point } from './types';

export default class Dart extends Arc {
  protected _style: Style = {
    fillStyle: 'black',
  };

  constructor({ context, options }: DartNamespace.ConstructorProps) {
    super({ context, options });
  }

  fillStyle(fillStyle: string) {
    this.style.fillStyle = fillStyle;
    return this;
  }

  draw({ x, y }: Point) {
    this.usePath(
      this.useStyle(() => {
        this.arc(x, y);
        this.ctx.fill();
      })
    )();
  }
}
