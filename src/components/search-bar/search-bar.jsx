import PropTypes from 'prop-types';
import { useState } from 'react';

export function SearchBar({onSearch}) {
    const [text, setText] = useState('');

    const onInputChange = event => {
        setText(event.target.value);
    }

    const onButtonClick = event => {
        if (onSearch) {
            onSearch(text);
        }
    }

    return (
        <div>
            <input 
                type='text'
                value={text}
                onChange={onInputChange}
            />
            <button
                onClick={onButtonClick}
            >
                buscar
            </button>
        </div> 
    );
}

SearchBar.propTypes = {
    onSearch : PropTypes.func,
};
