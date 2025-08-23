import React from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input = ({
    type,
    placeholder,
    name,
    error,
    ...props
}: InputProps): React.ReactElement => {
    return (
        <div {...props} className={styles.wrapper}>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={cn(styles.input, {
                    [styles.input__error]: error,
                })}
            />
            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
};
