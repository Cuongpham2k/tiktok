import classNames from 'classnames/bind';
import style from './Account.module.scss';
import { AiFillCheckCircle } from 'react-icons/ai';
const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avata')}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEVjo/INTqMASJ5nqPdhofE/e8wARZtdneweW68GS6Boqfg1cMFTkeFXluVcnOswa70XVqpHhNQmYrQRUaYxbb5NitpFgdE8d8gAQJhUkuEpZbcB6W3KAAADz0lEQVR4nO2c61LiQBBGSQaBoIsXvL//gy67a7lqDrmBlW7rnJ8qVHfNl5nprzsuFiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi0ma3Ps7csZ2Fh+fVUeoyd3RnoFw31VFWL3OHdw7q4wlWzf0PWMSHrgyrJn+G5a5DpFVVP8wd4MksO5ewaq7TL+Jjd4ZVM3eAp1I2nSL9ATLdrboTrJrX3DItFz1LeFjEuWM8jXLTl2BV384d5En86hPpQaZ3mWVannpFeri5Zb5+l/78DjJ9nDvME7jqF+mBzXbuOCdT7geI9CDT3dyBTgcSpB9dpN1roKxoLiHFm6wZltd2NqvFHmT6a+5QJwJlRXO3hQOkeUq6iLftDOvb8gL76z5nhlT71stFIZnmtGvW7cX6c0MrsNc0lxkXsUDt+/eWfQU1cUq7ZgtlxUGkfJWrr+YOdwJQVvyrdlGmCV1Fqn3fHAuSacI6mLbMtzQKXGsS2jUvcNy/WTJ0Ic/nKtLD9r5OuJvOGu4EcMN8/+1PkCks038hUjsqm11DOXxYJerWrJYzxjuBnieNZJrLrqHa98NuiTJNZddsqaz4uJWgTDO5ikuoAT8fB3Stecyz11BZ8flIJ4Mjk11DLbUv5x3KNI+rSC21r3MlpOM0riKVFV/Lo9wypZZaq8QFmyqPq0gttbZNQXeCJK4itdTaVhNPoSTJECIHHwZlmsNVxJZae3HWJNMUriLeOSFylGkOV5HqBjILaZYohauIk3q0NCjTBHYNHeX8eOG4VAK7hib16t22tNnSbprArqGwqw0Dfxl/CKx3Uq+P8OY3bR+jaIIPgVHtOzLD4K4itdRGEtxV7B0n7Se2qzhoUq+P0K4itdRGE9qugZbaeCLbNdRSm0Bku+Yc+YW2a6jzOYG4dk3nW2pjiDsEdp4lDCzT7rfURhDVrqGW2lRiZkgttcN69EEfWsW0a7CsaJ4uusEjNOYQGNe+e/IvPoGLGNKuwbKif8/gIyaiXcNvqdX9+z5eEyK6ivyW2pCzmz4XUab4ltqQ+xdf1+PJlGvfQb0klmk4V5HfUtsPKde3+NE6ml2Dte+wIuGITIO5ivyW2sAbND/CwewaPrcHVkHs7gQbAsOyYmgle+QoDTUEhtMxw8s8fh96EylD/ucXgx0lvi2EchWxpTbcbmGZRnIVuawY4UVwMyCQq8gttREBFmqWBrJruKU2RmRHviGMq1j2q7rN85iNYv0M31DHma5ZImf4ju8JV0RERERERERERERERERERERERERERERERERERERE5Lv5DQUnKU9DzdC7AAAAAElFTkSuQmCC"
                alt="hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span className> Nguyen Van Hoa</span>
                    <AiFillCheckCircle className = {cx('check-icon')}/>
                </p>
                <span className={cx('usename')}>nguybana</span>
            </div>
        </div>
    );
}

export default AccountItem;
