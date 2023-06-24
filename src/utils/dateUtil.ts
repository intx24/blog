import { PostDate } from "../types/postTypes";

export function toPostDate(value: string): PostDate {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const date = new Date(value);

    return {
        month: months[date.getMonth() + 1],
        date: date.getDate(),
    }
}