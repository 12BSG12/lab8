import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styles from '../App.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormGroup, InputLabel, Slider } from '@mui/material';

const Pentagon = ({ position, rotate, speed }) => {
  const ref = React.useRef('null');
  useFrame(() => (ref.current.rotation[rotate] += speed));

  return (
    <mesh ref={ref} position={position}>
      <dodecahedronGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const SelectRotateAndCut = ({ rotate, setRotate, setSpeed, speed, cut, setCut }) => {
  return (
    <FormGroup row sx={{ mb: 5 }}>
      <FormGroup row>
        <FormControl sx={{ mt: 2, mb: 1, minWidth: 135, color: 'white' }} size="small">
          <InputLabel sx={{ color: 'white' }} id="demo-select-small">
            Вращать по
          </InputLabel>
          <Select
            sx={{ color: 'white' }}
            value={rotate}
            label="Вращать по"
            onChange={(e) => setRotate(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="x">X</MenuItem>
            <MenuItem value="y">Y</MenuItem>
            <MenuItem value="z">Z</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ ml: 2, mt: 2, mb: 1, minWidth: 135, color: 'white' }} size="small">
          <InputLabel sx={{ color: 'white' }} id="demo-select-small">
            Отрезать
          </InputLabel>
          <Select
            sx={{ color: 'white' }}
            value={cut}
            label="Вращать по"
            onChange={(e) => setCut(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="lr">лево и право</MenuItem>
            <MenuItem value="tb">вверх и низ</MenuItem>
            <MenuItem value="lrtb">все четыре стороны</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

      <Slider
        step={0.01}
        valueLabelDisplay="auto"
        min={0.01}
        max={100}
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
    </FormGroup>
  );
};

const Lab8 = () => {
  const [rotate, setRotate] = React.useState('');
  const [speed, setSpeed] = React.useState(0.01);
  const [cut, setCut] = React.useState('');
  return (
    <div className={styles.root}>
      <p>Лабораторная работа №8 </p>
      <SelectRotateAndCut
        rotate={rotate}
        setRotate={setRotate}
        speed={speed}
        setSpeed={setSpeed}
        cut={cut}
        setCut={setCut}
      />
      <span className={styles.x}>X</span>
      <span className={styles.y}>Y</span>
      <span className={styles.z}>Z</span>
      <Canvas style={{ width: 600 }} dpr={[1, 2]} camera={{ position: [5, 5, 5], fov: 25 }}>
        <Pentagon position={[0, 0, 0]} rotate={rotate} speed={speed} />
        <axesHelper position={[0, 0, 0]} args={[2]} />
      </Canvas>
      {cut === 'lr' && (
        <>
          <div className={styles.left}>left</div>
          <div className={styles.right}>right</div>
        </>
      )}
      {cut === 'tb' && (
        <>
          <div className={styles.top}>top</div>
          <div className={styles.bottom}>bottom</div>
        </>
      )}
      {cut === 'lrtb' && (
        <>
          <div className={styles.left}>left</div>
          <div className={styles.right}>right</div>
          <div className={styles.top2}>top</div>
          <div className={styles.bottom2}>bottom</div>
        </>
      )}
    </div>
  );
};

export default Lab8;
