import React from "react";
import { LikeProps } from "./Like.props";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";

export const Like = ({ children }: LikeProps): React.ReactElement => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.like}>{children}</span>
            <LikeIcon />
        </div>
    );
};
