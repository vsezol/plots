import Arc from './Arc';
import Point from './Point';
import { DartNamespace, Style } from './types';

export default class Dart extends Arc {
  protected style: Style = {
    fillStyle: 'black',
  };

  constructor({ context }: DartNamespace.ConstructorProps) {
    super({ context });
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
      }),
    )();
  }
}
