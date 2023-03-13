import PropTypes from 'prop-types';
import { useState } from 'react';
import './search-bar.css';

export function SearchBar({onSearch, loading, firstSearch}) {
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
        <form 
            onSubmit={() => false}
            className='searchBar'
        >
            <input 
                type='text'
                value={text}
                onChange={onInputChange}
                placeholder={
                    firstSearch ? (
                        '¿Qué ciudad quieres consultar?'
                    ) : (
                        'Nueva búsqueda'
                    )
                }
                
                className= 'searchInput'
            />
            <button
                type='submit'
                onClick={onButtonClick}
                disabled={loading || text.length === 0}
                className= 'searchButton'
            >
                {
                    loading ? (
                        <div>
                            loading
                        </div>
                    ) : (
                        <img
                            className='searchIcon'
                            src='/searchIcon.png'
                        >
                        </img>
                    )
                }
            </button>
        </form> 
    );
}

SearchBar.propTypes = {
    onSearch : PropTypes.func,
    loading : PropTypes.bool,
    firstSearch : PropTypes.bool,
};
