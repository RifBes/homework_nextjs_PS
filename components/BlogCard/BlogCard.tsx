import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

import { BlogCardProps } from "./BlogCard.props.";
import { Like, P, Htag } from "..";

import IconArrow from "./arrow.svg";

import styles from "./BlogCard.module.css";

export const BlogCard = ({
    href,
    title,
    description,
    time_read,
    count_likes,
    date_publish,
    themes,
    image,
    priority = true,
    ...props
}: BlogCardProps): React.ReactElement => {
    return (
        <div className={styles.wrapper} {...props}>
            {/* Картинка */}
            <div className={styles.top}>
                <Image
                    priority={priority}
                    unoptimized={true} //чтобы картинка с другого домена загрузилась (когда вставляю просто ссылку)
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
                    <div className={styles.head_left}>
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
                    <div>
                        <Like>{count_likes}</Like>
                    </div>
                </div>
                {/* основная инфа */}
                <div className={styles.main}>
                    <Htag tag="h2" className={styles.title}>
                        {title}
                    </Htag>
                    <div className={styles.description}>
                        <P className={styles.custom_P}>{parse(description)}</P>
                    </div>
                </div>
                {/* время чтения и переход */}
                <div className={styles.footer}>
                    <span>{time_read}</span>
                    <a className={styles.link} href={href}>
                        Читать
                        <IconArrow />
                    </a>
                </div>
            </div>
        </div>
    );
};
