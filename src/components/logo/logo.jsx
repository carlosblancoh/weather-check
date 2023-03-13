import PropTypes from 'prop-types';

export function Logo({onClearPage}) {
    return (
        <a 
            onClick={onClearPage}
        >
            Logo
        </a> 
    );
}

Logo.propTypes = {
    onClearPage : PropTypes.func,
};