import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    href: string;
    title: string;
    description: string;
    time_read: string;
    count_likes: number;
    date_publish: string;
    themes: string[]; // тем может быть несколько
    image: string | StaticImageData;
    priority?: boolean; //предварительная загрузка. Если изображение большое (как с хаски), то появляется предупреждение
}