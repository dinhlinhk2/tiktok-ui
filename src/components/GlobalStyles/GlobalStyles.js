import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.proTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
