import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.modules.scss';
import className from 'classnames/bind';
import SideBar from '~/layouts/components/SideBar';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
