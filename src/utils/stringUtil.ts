export function removeTags(html: string) {
    return html.replace(/<[^>]*>/g, '');
}

export function truncate(str: string, digit: number) {
    if (str.length > digit) {
        return str.slice(0, digit) + "...";
    } else {
        return str;
    }
}