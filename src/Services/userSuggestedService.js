import * as httpRequest from '~/utils/httpRequest';

export const getUserSuggested = async (page, per_page) => {
    try {
        const response = await httpRequest.get(`users/suggested`, {
            params: {
                page: page,
                per_page: per_page,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
