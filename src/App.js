import React, { useState, useMemo } from 'react';


import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';

const offCell = {
  on: false,
  color: '#000000',
};
const initialCells = Array.from({ length: 64 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#000000');
  const classes = useStyles();

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  // const chatString = useMemo(
  //   () => cells.map((cell) => cell.color.slice(1)).join(','),
  //   [cells]
  // );
  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          />
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor}   />



    </div>
  );
}

export default App;