import { React, useState } from 'react';
import Select from 'react-select';
import './dropdown.css';
function Color ()
{
    const colors = [
        {
            id:"lime",
            label: "Lime",
        },
        {
            id:"lavender",
            label: "Lavender",
        },
        {
            id:"crimson",
            label: "Crimson",
        },
        {
            id:"darkblue",
            label: "Darkblue",
        },
        {
            id:"teal",
            label: "Teal",
        },
        {
            id:"rebec",
            label: "Rebeccapurple",
        },
        {
            id: "white",
            label: "Ghostwhite",
        },
        {
            id: "aquam",
            label: "Aquamarine",
        },
        {
            id: "alice",
            label: "Aliceblue",
        },
    ]
    const [color, setColor]=useState("");
    const click=(event)=>{
        setColor(event.label);
    }
    return (
        <div className='drop'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>
            <center>
            <h1>Color Changer</h1>
            </center>
            <div className="down">
                <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Color;