import PropTypes from 'prop-types';
import './history.css';

export function History({items, onSearch}) {
    return (
        <div className='historyBox'>
            Búsquedas recientes
            <div className='historyBoxContent'>
                {
                    items.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => onSearch(item)}
                            className='historyItem'
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
            
        </div> 
    );
}

History.propTypes = {
    items : PropTypes.arrayOf(PropTypes.string),
    onSearch : PropTypes.func,
};