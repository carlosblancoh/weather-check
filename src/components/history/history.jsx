import PropTypes from 'prop-types';

export function History({items}) {
    return (
        <div>
            History
            {
                items.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))
            }
        </div> 
    );
}

History.propTypes = {
    items : PropTypes.arrayOf(PropTypes.string),
};