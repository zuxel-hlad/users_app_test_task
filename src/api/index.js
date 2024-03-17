import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const api = {
    getUsers: async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/users`);

            return data;
        } catch (e) {
            throw e;
        }
    },

    getAlbum: async albumId => {
        try {
            const { data } = await axios.get(`${baseUrl}/albums/${albumId}`);
            return data;
        } catch (e) {
            throw e;
        }
    },

    getAlbums: async userId => {
        try {
            const { data } = await axios.get(`${baseUrl}/albums?userId=${userId}`);
            return data;
        } catch (e) {
            throw e;
        }
    },

    getPost: async postId => {
        try {
            const { data } = await axios.get(`${baseUrl}/posts/${postId}`);
            return data;
        } catch (e) {
            throw e;
        }
    },

    getPosts: async userId => {
        try {
            const { data } = await axios.get(`${baseUrl}/posts?userId=${userId}`);
            return data;
        } catch (e) {
            throw e;
        }
    }
};
