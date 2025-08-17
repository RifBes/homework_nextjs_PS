import { getPost } from "@/api/post";
import { Metadata } from "next";
import React from "react";

import styles from "./page.module.css";

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
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
                <p>userId: {post.userId}</p>
                <p>id: {post.id}</p>
            </div>
        </div>
    );
}
