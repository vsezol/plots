import { NDraw } from '../types/Draw';

export default class Draw extends NDraw.AbstractDraw {
  constructor({ canvas }: NDraw.IProps) {
    super();
    this.canvas = canvas;
    this.ctx = this.canvas.context;
  }

  configLine({
    fillStyle = 'black',
    strokeStyle = 'black',
    lineWidth = 1,
    lineCup = 'butt',
    lineJoin = 'bevel',
    lineDash = [],
  }: NDraw.IConfigLineProps) {
    const useConfig = () => {
      this.ctx.fillStyle = fillStyle;
      this.ctx.strokeStyle = strokeStyle;
      this.ctx.lineWidth = lineWidth;
      this.ctx.lineCap = lineCup;
      this.ctx.lineJoin = lineJoin;
      this.ctx.setLineDash(lineDash);
    };

    return this.line.bind(this, useConfig);
  }

  line(useConfig: Function, { from, to }: NDraw.ILineProps) {
    this.ctx.beginPath();
    useConfig();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  configDart({ fillStyle = 'black', radius = 1 }: NDraw.IConfigDartProps) {
    const useConfig = () => {
      this.ctx.fillStyle = fillStyle;
    };

    const useClose = () => {
      this.ctx.fill();
      this.ctx.closePath();
    };

    return this.arc.bind(this, { radius, useConfig, useClose });
  }

  configHole({
    strokeStyle = 'black',
    lineWidth = 1,
    radius = 1,
  }: NDraw.IConfigHoleProps) {
    const useConfig = () => {
      this.ctx.strokeStyle = strokeStyle;
      this.ctx.lineWidth = lineWidth;
    };

    const useClose = () => {
      this.ctx.stroke();
      this.ctx.closePath();
    };

    return this.arc.bind(this, { radius, useConfig, useClose });
  }

  arc(
    {
      radius, useConfig, useClose,
    }: { radius: number; useConfig: Function; useClose: Function },
    { x, y }: NDraw.IPoint,
  ) {
    this.ctx.beginPath();
    useConfig();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    useClose();
  }

  configMultiArcs(arcs: Function[]) {
    return this.multiArcs.bind(this, arcs);
  }

  multiArcs(arcs: Function[], { x, y }: NDraw.IPoint) {
    arcs.forEach(arc => arc({ x, y }));
  }
}
