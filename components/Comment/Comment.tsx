import React from "react";
import { CommentProps } from "./Comment.props";
import styles from "./Comment.module.css";

export const Comment = ({
    comment,
    ...props
}: CommentProps): React.ReactElement => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.top}>
                <p className={styles.name}>{comment.name}</p>
                <span>·</span>
                <p className={styles.email}>{comment.email}</p>
            </div>
            <div className={styles.body}>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};
