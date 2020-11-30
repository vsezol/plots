type Props<T, K> = IProps & ILifeCycleMethods<T, K>;

interface ILifeCycleMethods<T, K> {
  prepare: () => Promise<T>;
  init: (data: T) => Promise<K>;
  run: (data: K) => void;
}

interface IProps {
  isLoop?: boolean;
  delay?: number;
}

export default class App<T, K> {
  prepare;
  init;
  run;

  prepareData!: T;
  initData!: K;

  constructor({ prepare, init, run }: Props<T, K>) {
    this.prepare = prepare;
    this.init = init;
    this.run = run;
  }

  async start() {
    try {
      this.prepareData = await this.prepare();
      this.initData = await this.init(this.prepareData);
      await this.run(this.initData);
    } catch (err) {
      console.log(err);
    }
  }
}
