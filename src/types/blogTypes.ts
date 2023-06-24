export type BlogList = {
    contents: BlogContent[];
    totalCount: number;
    offset: number;
    limit: number;
}

export type BlogContent = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    category?: BlogContentCategory
    eyecatch?: BlogContentEyecatch
}

export type BlogContentCategory = {
    name: string;
}

export type BlogContentEyecatch = {
    url: string;
    height: number;
    width: number;
}