import { Ref, useEffect, useMemo, useRef, useState } from 'react';
import { PaintCanvas } from 'src/components/organisms/PaintCanvas';
import { classNames } from 'src/utils/ClassNames';
import Styles from './index.module.scss';

const HomeScreen = () => {
  const canvas: Ref<HTMLCanvasElement> = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>();
  const [ratio, setRatio] = useState<number>(1);

  const onMouseDown = (e: MouseEvent) => {
    setIsMouseDown(true);
    if (!isMouseDown || !canvasContext) return;
    const [x, y] = [e.clientX, e.clientY];
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
    if (!isMouseDown || !canvasContext) return;
    canvasContext.closePath();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isMouseDown || !canvasContext) return;
    const [x, y] = [e.clientX, e.clientY];
    canvasContext.strokeStyle = '1px';
    canvasContext.lineTo(x, y);
    canvasContext.stroke();
  };
  
  useEffect(() => {
    if (!canvas.current) return;
    setCanvasContext(canvas.current.getContext('2d'));

    setRatio(window.devicePixelRatio);
  }, []);

  useEffect(() => {
    if (!canvas.current) return;
    console.log(ratio, window.devicePixelRatio);

    const [width, height] = [
      Number(canvas.current.getAttribute('data-width')),
      Number(canvas.current.getAttribute('data-height')),
    ];

    canvas.current.width = width * ratio;
    canvas.current.height = height * ratio;

    canvasContext?.scale(ratio, ratio);

  }, [ratio]);
  

  return (
    <div className="HomeScreen">
      <PaintCanvas
        ref={canvas}
        onMouseUp={ onMouseUp }
        onMouseDown={ onMouseDown }
        onMouseMove={ onMouseMove }
      ></PaintCanvas>
    </div>
  );
};

export default HomeScreen;
