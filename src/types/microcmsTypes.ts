export type BlogsData = {
    contents: [
        {
            id: string;
            title: string;
            createdAt: string;
            category: {
                name: string;
            };
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