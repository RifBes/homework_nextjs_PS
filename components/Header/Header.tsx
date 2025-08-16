import styles from "./Header.module.css";

import Link from "next/link";
import { GitHubLink } from "../GithubLink/GithubLink";

export const Header = (): React.ReactElement => {
    return (
        <header className={styles.header}>
            <Link className={styles.header__title} href="/">
                .my_blog
            </Link>
            <GitHubLink />
        </header>
    );
};
