import cls from 'classnames';

import {ButtonProps} from '~/components/Utils/Button/types.ts';

export default function Button({
                                   children,
                                   name = '',
                                   className = '',
                                   onClick,
                                   icon,
                                   iconSize = '16px',
                                   disable = false,
                                   iconPosition = 'right',
                                   type = 'button',
                               }: ButtonProps) {
    const content = name || children;

    return (
        <button
            type={type}
            disabled={disable}
            className={cls(
                'font-test-SemiBold flex cursor-pointer gap-[8px] rounded bg-[#005EFF] px-4 py-[10px] text-[14px] text-white hover:bg-blue-400',
                className
            )}
            onClick={onClick}
        >
            {iconPosition === 'left' && icon && (
                <div className="flex items-center">
                    <img
                        className={`w-[${iconSize}] h-[${iconSize}]`}
                        src={icon}
                        alt="icon"
                    />
                </div>
            )}
            {content}
            {iconPosition === 'right' && icon && (
                <div className="flex items-center">
                    <img
                        className={`w-[${iconSize}] h-[${iconSize}]`}
                        src={icon}
                        alt="icon"
                    />
                </div>
            )}
        </button>
    );
}
