import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = className.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <h2>SideBar</h2>
        </div>
    );
}

export default SideBar;
