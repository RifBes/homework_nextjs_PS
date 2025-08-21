import { getPost } from "@/api/post";
import { Metadata } from "next";
import React from "react";
import parse from "html-react-parser";
import styles from "./page.module.css";
import { Like } from "@/components";
import Image from "next/image";

type postByIdProps = Promise<{ id: string }>;

export async function generateMetadata({
    params,
}: {
    params: postByIdProps;
}): Promise<Metadata> {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function DetailPost({
    params,
}: {
    params: postByIdProps;
}) {
    const { id } = await params;
    const post = await getPost(id);
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.info}>
                    Front-end <span>·</span> 1 месяц назад <span>·</span> 3
                    минуты <span>·</span>
                    <div className={styles.info__like}>
                        4 <Like id={id} isInside={false} />
                    </div>
                </div>
                <div className={styles.image__wrapper}>
                    <Image
                        className={styles.image}
                        src={"/assets/myLove.png"}
                        alt="my man"
                        width={687}
                        height={386}
                    />
                </div>
                <div className={styles.body}>{parse(post.body)}</div>
                <div className={styles.like}>
                    <span>Понравилось? Жми</span>
                    <Like isInside={true} id={id} />
                </div>
            </div>
        </div>
    );
}
