export default class FetchData {
    getResource = async (url) => {
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error('Произошла ошибка');
        }

        return await result.json();
    };

    getRocket = async () =>
        await this.getResource('https://api.spacexdata.com/v4/rockets');

    getLaunches = async () =>
        await this.getResource('https://api.spacexdata.com/v4/launches/past');

    getCompany = async () =>
        await this.getResource('https://api.spacexdata.com/v4/company');
}
