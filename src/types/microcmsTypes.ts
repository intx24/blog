export type BlogsData = {
    contents: [
        {
            id: string;
            title: string;
            content: string;
            createdAt: string;
            category?: {
                name: string;
            };
            eyecatch?: Eyecatch
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

export type Eyecatch = {
    url: string;
    height: number;
    width: number;
}