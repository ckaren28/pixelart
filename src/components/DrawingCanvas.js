import React, {useRef} from "react";
import { exportComponentAsPNG } from "react-component-export-image"

import Row from "./Row"

export default function DrawingCanvas(props) {
    const { width, height, selectedColor } = props

    const panelRef = useRef()
  
    let rows = []
  
    for (let i = 0; i < height; i++) {
      rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }
  
    return (
        <div id="drawingPanel">
        <div id="pixels" ref={panelRef}>
          {rows}
        </div>
        <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
          Export as PNG
        </button>
      </div>
    )
  }