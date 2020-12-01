import { NDraw } from '../types/Draw';

export default class Draw extends NDraw.AbstractDraw {
  constructor({ canvas }: NDraw.IProps) {
    super();
    this.canvas = canvas;
    this.ctx = this.canvas.context;
  }

  config({
    fillStyle = 'black',
    strokeStyle = 'black',
    lineWidth = 1,
    lineCup = 'butt',
    lineJoin = 'bevel',
    lineDash = [],
  }: NDraw.IConfigProps) {
    this.ctx.fillStyle = fillStyle;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.lineWidth = lineWidth;
    this.ctx.lineCap = lineCup;
    this.ctx.lineJoin = lineJoin;
    this.ctx.setLineDash(lineDash);

    return this;
  }

  line({ from, to }: NDraw.ILineProps) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

    return this;
  }
}
