import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
    children,
    type,
    ...props
}: ButtonProps): React.ReactElement => {
    return (
        <button {...props} type={type} className={styles.button}>
            {children}
        </button>
    );
};
