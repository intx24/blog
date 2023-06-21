import { microcmsClient } from '../api/microcms';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { BlogDetail, BlogsData } from '../types/microcmsTypes';

export const getAllBlogs = async (queries: MicroCMSQueries): Promise<BlogsData> => {
    return microcmsClient.get({
        endpoint: "blogs",
        queries,
    })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => console.error(err));
};

export const getDetail = async (contentId: string): Promise<BlogDetail> => {
    return microcmsClient.get({
        endpoint: "blogs",
        contentId,
    })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => console.error(err));
}
