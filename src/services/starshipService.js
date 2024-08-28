import { useState } from 'react';
const BASE_URL = 'https://swapi.dev/api/starships/';

const show = async (searchTerm) => {
    try {
        const queryString = searchTerm ? `?search=${searchTerm}` : ''
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export { show };