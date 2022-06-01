import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    rounded = false,
    className,
    children,
    onClick,
    ...df
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...df,
    };
    // if (disabled) {
    //     delete props.onClick;
    // }
    // remove even listeners
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on')&& typeof props[key] === 'function'){
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, disabled,rounded,[className]: className, small, large, text });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
