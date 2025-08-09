import React from "react";
import styles from "./Header.module.css";

import GitIcon from "./GithubIcon.svg";
import Link from "next/link";

export const Header = (): React.ReactElement => {
    return (
        <header className={styles.header}>
            <Link className={styles.header__title} href="/">
                .my_blog
            </Link>
            <div className={styles.header__git}>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/RifBes"
                >
                    <i className={styles.svg}>
                        <GitIcon />
                    </i>
                </Link>
            </div>
        </header>
    );
};
