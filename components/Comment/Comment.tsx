import React from "react";
import { CommentProps } from "./Comment.props";
import styles from "./Comment.module.css";
import cn from "classnames";

export const Comment = ({
    comment,
    className,
    ...props
}: CommentProps): React.ReactElement => {
    return (
        <article
            className={cn(styles.wrapper, className)}
            aria-labelledby={`comment-${comment.id}-author`}
            {...props}
        >
            <div className={styles.top}>
                <p id={`comment-${comment.id}-author`} className={styles.name}>
                    {comment.name}
                </p>
                <span aria-hidden="true">·</span>
                <a
                    href={`mailto:${comment.email}`}
                    className={styles.email}
                    aria-label={`Email автора: ${comment.email}`}
                >
                    {comment.email}
                </a>
            </div>
            <div className={styles.body}>
                <p>{comment.body}</p>
            </div>
        </article>
    );
};
