"use client";

import { useContext } from "react";
import GitIcon from "./GithubIcon.svg";
import { GithubContext } from "@/contexts/GitHubProvider";
import Link from "next/link";
import styles from "./GithubLink.module.css";

export function GitHubLink() {
    const { link } = useContext(GithubContext) || {};
    return link ? (
        <Link target="_blank" rel="noopener noreferrer" href={link}>
            <i className={styles.svg}>
                <GitIcon />
            </i>
        </Link>
    ) : null;
}
