import { Point, MultiDartNamespace } from './types';
import Dart from './Dart';

export default class MultiDart {
  protected darts: Dart[];
  constructor(darts: Dart[]) {
    this.darts = darts;
  }
  draw({ x, y }: Point) {
    this.darts.forEach(({draw}) => draw({ x, y }));
  }
}

// export class DoubleDart extends MultiDart {
//   constructor({
//     radius: 2,
//     fillStyle: 1
//   }, {

//   }) {
    
//   }
// }


const createMultiDart = (dartsConfig: Dart[]) => {
}