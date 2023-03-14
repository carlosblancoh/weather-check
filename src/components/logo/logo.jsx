import PropTypes from 'prop-types';
import './logo.css';

export function Logo({onClearPage, logoBigSize}) {
    return (
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
    );
}

Logo.propTypes = {
    onClearPage : PropTypes.func,
    logoBigSize : PropTypes.bool,
};