import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Проект блог",
    description: "Добро пожаловать в мой блог",
    keywords: "Главная, блог, карточки, учёба",
    applicationName: "my_blog",
    authors: [{ name: "RifBes", url: "https://github.com/RifBes" }],
    creator: "RifBes",
    openGraph: {
        title: "my_blog",
        description: "Добро пожаловать в мой блог",
        siteName: "my_blog",
        locale: "ru_RU",
        type: "website",
    },
    pinterest: { richPin: true },
    appleWebApp: {
        capable: true,
        title: "my_blog",
        statusBarStyle: "black",
    },
    icons: {
        icon: "../favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${openSans.variable}`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
