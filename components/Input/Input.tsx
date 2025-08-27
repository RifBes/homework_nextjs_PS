import React, { useId } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input = ({
    type = "text",
    placeholder,
    name,
    error,
    label,
    required = false,
    disabled = false,
    value,
    onChange,
    ...props
}: InputProps): React.ReactElement => {
    const id = useId();
    const errorId = `${id}-error`;

    return (
        <div {...props} className={styles.wrapper}>
            {label && (
                <label
                    htmlFor={id}
                    className={cn(styles.label, {
                        [styles.label__error]: error,
                        [styles.label__disabled]: disabled,
                    })}
                >
                    {label}
                    {required && (
                        <span aria-hidden="true" className={styles.required}>
                            *
                        </span>
                    )}
                </label>
            )}

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                aria-invalid={error ? "true" : "false"}
                aria-required={required ? "true" : "false"}
                aria-describedby={error ? errorId : undefined}
                className={cn(styles.input, {
                    [styles.input__error]: error,
                    [styles.input__disabled]: disabled,
                })}
            />

            {error && (
                <span
                    id={errorId}
                    className={styles.error}
                    role="alert"
                    aria-live="polite"
                >
                    {error.message}
                </span>
            )}
        </div>
    );
};
