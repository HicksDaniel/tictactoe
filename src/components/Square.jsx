import { useState } from "react";
import "./square.css"

export default function Square({ value, onSquareClick }) {
    return (<button className="square" onClick={onSquareClick}>
        {value}
    </button>
    );
}
