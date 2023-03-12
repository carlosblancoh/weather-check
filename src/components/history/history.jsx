import PropTypes from 'prop-types';

export function History({items, onSearch}) {
    return (
        <div>
            History
            {
                items.map((item, index) => (
                    <a 
                        key={index}
                        onClick={() => onSearch(item)}
                    >
                        {item}
                    </a>
                ))
            }
        </div> 
    );
}

History.propTypes = {
    items : PropTypes.arrayOf(PropTypes.string),
    onSearch : PropTypes.func,
};