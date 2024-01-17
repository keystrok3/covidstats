

export const fetch_data = async (country) => {

    const url = `https://api.api-ninjas.com/v1/covid19?country=${country}`;

    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': '5rxY2l3JJzR8dxdZJeptwg==k5fMkobdo1EsRn0g'
        }
    }

        try {
            const response = await fetch(url, options);
            const result = await response.json()
            console.log(result)
            return result;
        } catch (error) {
            console.error(error);
            alert(error);
        }

}