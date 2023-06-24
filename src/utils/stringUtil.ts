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

export function addHtmlClass(clazz: string, array?: string[]) {
    if (array == null || array.length == 0) {
        return clazz;
    }
    return clazz + " " + array?.join(' ');
}