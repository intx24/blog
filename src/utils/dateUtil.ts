import { PostCardEyecatchDate } from '../types/postTypes';

export function toPostCardEyecatchDate(value: string): PostCardEyecatchDate {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const date = new Date(value);

    return {
        month: months[date.getMonth() + 1],
        date: ('00' + date.getDate()).slice(-2),
    };
}

export function toPostDate(value: string): string {

    const date = new Date(value);

    return `${date.getFullYear().toString()}-${('00' + (date.getMonth() + 1)).slice(-2)}-${('00' + date.getDate()).slice(-2)}`;
}