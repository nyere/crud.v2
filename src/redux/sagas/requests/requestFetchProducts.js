export const requestFetchProducts = async () => {
    const response = await fetch(
        'https://62c021bfd40d6ec55ccb69eb.mockapi.io/api/v1/products'
    );
    return response;
};
