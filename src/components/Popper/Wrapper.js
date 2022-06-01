import className from 'classnames/bind';
import style from './Popper.module.scss';

const cx = className.bind(style);
function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
