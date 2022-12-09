import { useState } from 'react';
import { Stage, Layer, Star, Rect } from 'react-konva';
import styles from '../App.module.css';

const Lab8 = () => {
  const [draggable, setDraggable] = useState({
    x: 300,
    y: 200,
    isDragging: false,
  });

  const handleDragStart = (e) => {
    const id = e.target.id();
    setDraggable({
      ...draggable,
      isDragging: draggable.id === id,
    });
  };
  const handleDragEnd = () => {
    setDraggable({
      ...draggable,
      isDragging: false,
    });
  };

  return (
    <div className={styles.root}>
      <p>Лабораторная работа №8 </p>
      <Stage  width={300} height={200} className={styles.stage}>
        <Layer>
          <Star
            draggable
            numPoints={5}
            innerRadius={72}
            outerRadius={90}
            fill="red"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            x={draggable.x}
            y={draggable.y}
          />
        </Layer>
      </Stage>
    </div>
  );
};
export default Lab8;
