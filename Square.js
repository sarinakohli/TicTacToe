import { useState } from "react";

export default function Square({value, onSquareCLick})
{
    return <button className="square" onClick={onSquareCLick}>{value}</button>
}