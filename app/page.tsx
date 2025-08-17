import styles from "./page.module.css";
import type { Metadata } from "next";
import { BlogCard } from "@/components";
import cat from "../public/assets/cat.jpg";
import { getPosts } from "@/api/posts";
import React from "react";

export async function generateMetaData(): Promise<Metadata> {
    // ...
    return {
        title: "Главная страница",
        description: "Стартовая страница",
        keywords: "Проект, блог, домашнее задание, учёба",
    };
}

export default async function Home() {
    const pages = await getPosts();
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                {pages.map((item, index) => (
                    <React.Fragment key={index}>
                        <BlogCard
                            image={cat}
                            themes={["Front-end", "Beginners"]}
                            date_publish="1 месяц назад"
                            count_likes={4}
                            time_read="3 минуты"
                            href={item.id}
                            like_id={item.userId}
                            title={item.title}
                            priority={true}
                            description={item.body}
                        ></BlogCard>
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}
