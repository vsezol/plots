import { Point } from './types';
import Dot from './Dot';

export default class MultiDot {
  protected dots: Dot[];
  constructor(dots: Dot[]) {
    this.dots = dots;
  }
  draw({ x, y }: Point) {
    this.dots.forEach(dot => dot.draw({ x, y }));
  }
}
