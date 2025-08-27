import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface TextareaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder?: string;
    name?: string;
    error?: FieldError;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}
