import PropTypes from 'prop-types';
import { useState } from 'react';

export function SearchBar({onSearch, loading}) {
    const [text, setText] = useState('');

    const onInputChange = event => {
        setText(event.target.value);
    }

    const onButtonClick = event => {
        if (onSearch) {
            onSearch(text);
            setText('');
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
                disabled={loading || text.length === 0}
            >
                {
                    loading ? (
                        <div>
                            loading
                        </div>
                    ) : (
                        <div>
                            buscar
                        </div>
                    )
                }
            </button>
        </div> 
    );
}

SearchBar.propTypes = {
    onSearch : PropTypes.func,
    loading : PropTypes.bool,
};
