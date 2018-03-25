import config from 'common/config.js';
import { reject } from 'when';

export function getMovieList (message) {
    const url = `${config.PROTOCOL}${config.HOST}:${config.PORT}/in_theaters?message=${message}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
         });
    });
}

export function getMovieDetail (id) {
    const url = `${config.PROTOCOL}${config.HOST}:${config.PORT}/getMovieDetail/${id}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
         });
    });
}