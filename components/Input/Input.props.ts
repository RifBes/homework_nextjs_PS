import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    placeholder?: string;
    name?: string;
    error?: FieldError;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
