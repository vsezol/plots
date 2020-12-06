import { DotNamespace, MultiDotNamespace, Style, StyleKeys } from './types';
import Dot from './Dot';
import MultiDot from './MultiDot';

export function createDoubleDot(props: MultiDotNamespace.CreateDoubleDotProps) {
  return createMultiDot({ count: 2, ...props });
}

export function createMultiDot(props: MultiDotNamespace.CreateMultiDotProps) {
  const range = new Array(props.count).fill(0);
  const dots = range.map((_, i) => {
    const style: Style = Object.fromEntries(
      getStyleEntries(i, props.multiStyle)
    );
    const options: DotNamespace.Options = Object.fromEntries(
      getOptionsEntries(i, props.multiOptions)
    );

    return new Dot({ style, options, context: props.context });
  });

  return new MultiDot(dots);
}

function getStyleEntries(i: number, styles: MultiDotNamespace.MultiStyle) {
  return Object.keys(styles).map(key => {
    const styleKey = key as StyleKeys;
    const styleInner = styles[styleKey] as MultiDotNamespace.MultiStyleInner;
    return [key, styleInner[i]];
  });
}

function getOptionsEntries(i: number, options: MultiDotNamespace.MultiOptions) {
  return Object.keys(options).map(key => {
    const optionsKey = key as MultiDotNamespace.OptionsKeys;
    const optionsInner = options[
      optionsKey
    ] as MultiDotNamespace.OptionsInner[];
    return [key, optionsInner[i]];
  });
}
