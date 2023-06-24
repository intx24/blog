export type Blog = {
    contents: [
        {
            id: string;
            title: string;
            content: string;
            createdAt: string;
            category?: BlogContentCategory
            eyecatch?: BlogContentEyecatch
        }
    ];
    totalCount: number;
    offset: number;
    limit: number;
}

export type BlogDetail = {
    id: string;
    createdAt: string;
    title: string;
    content: string;
}

export type BlogContentCategory = {
    name: string;
}

export type BlogContentEyecatch = {
    url: string;
    height: number;
    width: number;
}