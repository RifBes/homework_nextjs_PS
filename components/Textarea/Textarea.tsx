import React, { useId } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

export const Textarea = ({
    error,
    placeholder,
    name,
    label,
    required = false,
    disabled = false,
    value,
    onChange,
    rows = 4,
    ...props
}: TextareaProps): React.ReactElement => {
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

            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                rows={rows}
                aria-invalid={error ? "true" : "false"}
                aria-required={required ? "true" : "false"}
                aria-describedby={error ? errorId : undefined}
                className={cn(styles.textarea, {
                    [styles.textarea__error]: error,
                    [styles.textarea__disabled]: disabled,
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
