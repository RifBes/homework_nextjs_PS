import styles from "./page.module.css";
import type { Metadata } from "next";
import { BlogCard } from "@/components";
import cat from "../public/assets/cat.jpg";

export async function generateMetaData(): Promise<Metadata> {
    // ...
    return {
        title: "Главная страница",
        description: "Стартовая страница",
        keywords: "Проект, блог, домашнее задание, учёба",
    };
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <BlogCard
                    image={cat}
                    themes={["Front-end", "Beginners"]}
                    date_publish="1 месяц назад"
                    count_likes={4}
                    time_read="3 минуты"
                    href="#"
                    like_id="1"
                    title="Как работать с CSS Grid"
                    priority={true}
                    description="<a href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве."
                ></BlogCard>
                <BlogCard
                    image={cat}
                    themes={["Front-end", "Beginners"]}
                    date_publish="1 месяц назад"
                    count_likes={666}
                    time_read="3 минуты"
                    href="#"
                    like_id="1"
                    title="Как работать с CSS Grid"
                    priority={true}
                    description="<a href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве."
                ></BlogCard>
                <BlogCard
                    image={cat}
                    themes={["Front-end", "Beginners"]}
                    date_publish="1 месяц назад"
                    count_likes={34}
                    time_read="3 минуты"
                    href="#"
                    like_id="1"
                    title="Как работать с CSS Grid"
                    priority={true}
                    description="<a href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'>Грид-раскладка (CSS Grid Layout)</a> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве."
                ></BlogCard>
            </div>
        </main>
    );
}
