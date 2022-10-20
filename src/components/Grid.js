import React, { useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import useStyles from "./Grid.styles";

const offCell = {
  on: false,
  color: "#000000",
};

const Grid = ({ currentColor, cells, setCells }) => {
  const classes = useStyles();
  const updateCell = (i) => (e) => {
    e.preventDefault();
    // if left or right click is pressed
    if (e.buttons === 1 || e.buttons === 2) {
      setCells(
        cells.map((cell, cellIndex) => {
          if (cellIndex === i) {
            if (e.buttons === 1) {
              return {
                on: true,
                color: currentColor,
              };
            }
            return offCell;
          }
          return cell;
        })
      );
    }
  };

  const panelRef = useRef();

  return (
    <div>
      <div className={classes.grid} ref={panelRef}>
        {cells.map((cell, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            style={{ background: cell.on ? cell.color : "#ffffff" }}
            className={classes.cell}
            onMouseOver={updateCell(i)}
            onMouseDown={updateCell(i)}
            onContextMenu={(e) => e.preventDefault()}
          />
        ))}
      </div>

      <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
    </div>
  );
};

export default Grid;
