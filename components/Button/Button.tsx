import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
    children,
    type = "button",
    disabled = false,
    loading = false,
    ariaLabel,
    ...props
}: ButtonProps): React.ReactElement => {
    return (
        <button
            {...props}
            type={type}
            disabled={disabled || loading}
            aria-label={ariaLabel}
            aria-busy={loading}
            className={cn(styles.button, {
                [styles.button__disabled]: disabled,
                [styles.button__loading]: loading,
            })}
        >
            {loading && (
                <span className={styles.loader} aria-hidden="true"></span>
            )}
            <span className={cn({ [styles.text__hidden]: loading })}>
                {children}
            </span>
        </button>
    );
};
