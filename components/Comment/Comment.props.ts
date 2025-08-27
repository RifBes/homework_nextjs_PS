import { CommentItem } from '@/interfaces/comments.interface';

export interface CommentProps extends React.HTMLAttributes<HTMLDivElement> {
    comment: CommentItem;
    className?: string;
}