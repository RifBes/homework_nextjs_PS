import styles from "./Header.module.css";

import Link from "next/link";
import { GitHubLink } from "../GithubLink/GithubLink";

export const Header = (): React.ReactElement => {
    return (
        <header className={styles.header}>
            <nav aria-label="Основная навигация">
                <Link className={styles.header__title} href="/">
                    .my_blog
                </Link>
                <GitHubLink />
            </nav>
        </header>
    );
};
