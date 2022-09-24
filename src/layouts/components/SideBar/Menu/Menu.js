import Proptypes from 'prop-types';
function Menu({ children }) {
    return <nav>{children}</nav>;
}

Menu.propTypes = {
    children: Proptypes.node.isRequired,
};

export default Menu;
