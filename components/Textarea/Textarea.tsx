import React from "react";
import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

export const Textarea = ({
    error,
    placeholder,
    name,
    ...props
}: TextareaProps): React.ReactElement => {
    return (
        <div {...props} className={styles.wrapper}>
            <textarea
                name={name}
                placeholder={placeholder}
                className={cn(styles.textarea, {
                    [styles.textarea__error]: error,
                })}
            />
            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
};
