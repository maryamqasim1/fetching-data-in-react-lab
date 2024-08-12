import { useState } from 'react';
const BASE_URL = 'https://swapi.dev/api/starships/';

const show = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export { show };