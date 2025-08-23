import React from "react";
import { CommentsProps } from "./Comments.props";
import styles from "./Comments.module.css";
import { Comment } from "../Comment/Comment";
import { Htag } from "../Htag/Htag";

export const Comments = ({
    comments,
    ...props
}: CommentsProps): React.ReactElement => {
    return (
        <div {...props}>
            <Htag tag="h2">Комментарии</Htag>
            <div className={styles.comments}>
                {comments.map((comment, index) => (
                    <div className={styles.item} key={index}>
                        <Comment comment={comment} />
                    </div>
                ))}
            </div>
        </div>
    );
};
