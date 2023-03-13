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
        <form onSubmit={() => false}>
            <input 
                type='text'
                value={text}
                onChange={onInputChange}
                placeholder='¿Qué ciudad quieres consultar?'
            />
            <button
                type='submit'
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
        </form> 
    );
}

SearchBar.propTypes = {
    onSearch : PropTypes.func,
    loading : PropTypes.bool,
};
