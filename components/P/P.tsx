import React from "react";
import { Pprops } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({
    size = "md",
    children,
    className = "",
    ...props
}: Pprops): React.ReactElement => {
    return (
        <p className={cn(styles.p, styles[size], className)} {...props}>
            {children}
        </p>
    );
};
