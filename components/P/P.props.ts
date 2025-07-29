import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode,
    className?: string;
}