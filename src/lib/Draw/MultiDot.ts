import { Point, MultiDotNamespace, StyleKeys } from './types';
import Dot from './Dot';

// дописать функцию создания мультиточек
// export function createMultiDart(props: MultiDotNamespace.CreateMultiDartProps) {
//   const styles = Object.keys(props.styles).map((key, index) => [index, []]);
// }

export default class MultiDot {
  protected darts: Dot[];
  constructor(darts: Dot[]) {
    this.darts = darts;
  }
  draw({ x, y }: Point) {
    this.darts.forEach(({ draw }) => draw({ x, y }));
  }
}

type DartProps = MultiDotNamespace.DotProps;
