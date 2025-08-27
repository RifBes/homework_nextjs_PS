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
    const [error, setError] = useState<string | null>(null);

    const makeLike = async () => {
        const url = baseUrl;
        setLoading(true);
        setError(null);
        try {
            const newState = !isLiked;
            const res = await fetch(url + "/posts/" + id, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    newState,
                }),
            });

            if (!res.ok) {
                throw new Error(`Ошибка HTTP: ${res.status}`);
            }

            const json = await res.json();
            const status = json.newState;
            setIsLiked(status);
        } catch (error) {
            console.error(error);
            setError("Не удалось поставить лайк. Попробуйте еще раз.");
        } finally {
            setLoading(false);
        }
    };

    const getAriaLabel = () => {
        if (loading) return "Загрузка...";
        return isLiked ? "Убрать лайк" : "Поставить лайк";
    };

    return (
        <div className={styles.wrapper}>
            <button
                {...props}
                className={cn(styles.like, {
                    [styles.like__inside]: isInside,
                    [styles.like__active]: isLiked,
                    [styles.loading]: loading,
                })}
                disabled={loading}
                onClick={makeLike}
                aria-label={getAriaLabel()}
                aria-pressed={isLiked}
                aria-busy={loading}
            >
                <i className={styles.svg} aria-hidden="true">
                    <LikeIcon />
                </i>
                {loading && (
                    <span className={styles.visuallyHidden}>Загрузка...</span>
                )}
            </button>
            {error && (
                <div className={styles.error} role="alert" aria-live="polite">
                    {error}
                </div>
            )}
        </div>
    );
};
