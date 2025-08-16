"use client";

import { createContext } from "react";

type GitHubContextType = {
    link: string;
};

export const GithubContext = createContext<GitHubContextType | null>(null);

export function GitHubProvider({
    children,
    link,
}: {
    children: React.ReactNode;
    link: string;
}) {
    return (
        <GithubContext.Provider value={{ link }}>
            {children}
        </GithubContext.Provider>
    );
}
