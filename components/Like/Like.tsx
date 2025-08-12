"use client";

import React, { useState } from "react";
import { LikeProps } from "./Like.props";
import styles from "./Like.module.css";
import LikeIcon from "./like.svg";
import { BASE_URL } from "../../constants";
import cn from "classnames";

export const Like = ({
    isInside,
    id,
    ...props
}: LikeProps): React.ReactElement => {
    const baseUrl = BASE_URL;
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const makeLike = async () => {
        const url = baseUrl + id;
        setLoading(true);
        try {
            const newState = !isLiked;
            const res = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    newState,
                }),
            });
            const json = await res.json();
            const status = json.newState;
            setIsLiked(status);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            {...props}
            className={cn(styles.like, {
                [styles.like__inside]: isInside,
                [styles.like__active]: isLiked,
                [styles.loading]: loading,
            })}
            disabled={loading}
            onClick={makeLike}
        >
            <i className={styles.svg}>
                <LikeIcon />
            </i>
        </button>
    );
};
