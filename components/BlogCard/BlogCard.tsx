"use client";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { BlogCardProps } from "./BlogCard.props";
import { Like, P, Htag } from "..";
import IconArrow from "./arrow.svg";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export const BlogCard = ({
    href,
    title,
    description,
    time_read,
    count_likes,
    date_publish,
    themes,
    image,
    like_id,
    priority = false,
    ...props
}: BlogCardProps): React.ReactElement => {
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
        },
    };

    return (
        <motion.div
            className={styles.wrapper}
            variants={variants}
            initial="hidden"
            animate="visible"
            {...props}
        >
            {/* Картинка */}
            <div className={styles.top}>
                <Image
                    priority={priority}
                    unoptimized={true}
                    fill={true}
                    src={image}
                    className={styles.image}
                    alt={title}
                />
            </div>
            {/* Низ с текстом */}
            <div className={styles.bottom}>
                {/* темы, дата публикации и лайки */}
                <div className={styles.head}>
                    <div className={styles.head__left}>
                        <div className={styles.themes}>
                            {themes.map((theme, index) => (
                                <React.Fragment key={index}>
                                    <span>{theme}</span>
                                    {index !== themes.length - 1 && (
                                        <span>|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className={styles.date}>
                            <span>·</span>
                            <span>{date_publish}</span>
                        </div>
                    </div>
                    <div className={styles.like__wrapper}>
                        {count_likes}
                        <Like id={like_id} isInside={false} />
                    </div>
                </div>
                {/* основная инфа */}
                <div className={styles.main}>
                    <Htag tag="h2" className={styles.title}>
                        {title}
                    </Htag>
                    <div className={styles.description}>
                        <P className={styles.customp}>{parse(description)}</P>
                    </div>
                </div>
                {/* время чтения и переход */}
                <div className={styles.footer}>
                    <span>{time_read}</span>
                    <Link className={styles.link} href={`post/${href}`}>
                        Читать
                        <IconArrow />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
