import { postCountPerPage } from "../consts";
import { PageNumbers } from "../types/pageTypes";

export function toPageNumbers(value: string, totalCount: number): PageNumbers {

    let current: number = value == null ? 1 : parseInt(value);
    if (current <= 0) {
        current = 1;
    }

    let next = current + 1;
    // すでに最後の生地に到達している場合
    if (totalCount <= current * postCountPerPage) {
        next = current;
    }

    let prev = current - 1;
    if (prev <= 0) {
        prev = 1;
    }

    return {
        prev,
        current,
        next
    };
}