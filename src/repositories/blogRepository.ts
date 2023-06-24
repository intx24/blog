import { microcmsClient } from '../api/microcms';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { BlogDetail, Blog } from '../types/blogTypes';

export const findAll = async (queries: MicroCMSQueries): Promise<Blog> => {
    return microcmsClient.get({
        endpoint: "blogs",
        queries,
    })
        .then((res) => {
            return res;
        })
        .catch((err) => console.error(err));
};

export const findById = async (contentId: string): Promise<BlogDetail> => {
    return microcmsClient.get({
        endpoint: "blogs",
        contentId,
    })
        .then((res) => {
            return res;
        })
        .catch((err) => console.error(err));
}
