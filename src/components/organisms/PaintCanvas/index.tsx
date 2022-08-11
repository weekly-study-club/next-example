import { forwardRef, MouseEventHandler, Ref, useEffect } from 'react';
import Styles from './index.module.scss';

export interface PropsType {
  onMouseMove?: MouseEventHandler<HTMLCanvasElement>;
  onMouseDown?: MouseEventHandler<HTMLCanvasElement>;
  onMouseUp?: MouseEventHandler<HTMLCanvasElement>;
  width?: number;
  height?: number;
};

export const PaintCanvas = forwardRef((
  props: PropsType,
  ref: Ref<HTMLCanvasElement>
) => {
  return (
    <canvas
      ref={ref}
      className={Styles.Canvas}
      width={props.width ?? 400}
      height={props.height ?? 400}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onMouseMove={props.onMouseMove}
      data-width={props.width ?? 400}
      data-height={props.height ?? 400}
    ></canvas>
  );
});
