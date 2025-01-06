import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export default class Upload {
    constructor() {
        this.session = axios.create({
            baseURL: 'https://api.imgur.com',
            headers: {
                'Referer': 'https://imgur.com',
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
                'Authorization': `Client-ID e4f58fc81daec99`,
            },
        });
    }

    async uploadImage(image) {
        const form = new FormData();
        form.append('image', fs.createReadStream(image));
        try {
            const response = await this.session.post('/3/image', form, {
                headers: {
                    ...form.getHeaders(),
                },
            });

            return response.data;
        } catch (error) {
            console.error({
                error: true
            });
        }
    }
}