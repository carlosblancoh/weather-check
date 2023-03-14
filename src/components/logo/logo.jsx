import PropTypes from 'prop-types';
import './logo.css';

export function Logo({onClearPage, logoBigSize}) {
    return (
        <div className='logoWrapper'>
            <img 
                onClick={onClearPage}
                className= {
                    logoBigSize ? (
                        'logoBig'
                    ) : (
                        'logo'
                    )
                }
                src='/logo.png'
                alt='logo'
            />
        </div>
        
    );
}

Logo.propTypes = {
    onClearPage : PropTypes.func,
    logoBigSize : PropTypes.bool,
};