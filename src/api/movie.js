import config from 'common/config.js';
import { reject } from 'when';

export function getMovieList (pageInfo) {
    pageInfo = JSON.stringify(pageInfo);
    const url = `${config.PROTOCOL}${config.HOST}:${config.PORT}/movie/list?pageInfo=${pageInfo}`;
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
    const url = `${config.PROTOCOL}${config.HOST}:${config.PORT}/movie/detail/${id}`;
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