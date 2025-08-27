"use client";

import { useContext } from "react";
import GitIcon from "./GithubIcon.svg";
import { GithubContext } from "@/contexts/GitHubProvider";
import Link from "next/link";
import styles from "./GithubLink.module.css";

export function GitHubLink() {
    const { link } = useContext(GithubContext) || {};

    return link ? (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className={styles.link}
            aria-label="Посмотреть исходный код на GitHub (откроется в новой вкладке)"
            title="Исходный код на GitHub"
        >
            <i className={styles.svg} aria-hidden="true">
                <GitIcon />
            </i>
            <span className={styles.visuallyHidden}>
                Посмотреть исходный код на GitHub (откроется в новой вкладке)
            </span>
        </Link>
    ) : null;
}
