import React from 'react';
import { Arrow } from './Arrow';
import './InputBox.css'

// props = { onSubmit: (str) => {}, placeholder: string}
export function InputBox({ onSubmit, placeholder }) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [type, setType] = React.useState("movie");

    const showContentType = type === "show" ? false : true;

    return (
        <form className="inputBar" onSubmit={(e) => {
            e.preventDefault();
            onSubmit(searchTerm, type)
            return false;
        }}>
            <select name="type" id="type" className="inputDropdown" onChange={(e) => setType(e.target.value)} required>
                <option value="movie">Movie</option>
                <option value="show">TV Show</option>
            </select>
            <input
                type='text'
                className="inputTextBox"
                id="inputTextBox"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
            />
            <input type='text' className='inputOptionBox' id='inputOptionBoxSeason' placeholder='s' required={showContentType} hidden={showContentType}/>
            <input type='text' className='inputOptionBox' id='inputOptionBoxEpisode' placeholder='e' required={showContentType} hidden={showContentType}/>
            <button className="inputSearchButton"><span className="text">Search<span className="arrow"><Arrow /></span></span></button>
        </form>
    )
}
