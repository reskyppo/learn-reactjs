import axios from 'axios'
import {onlineRoot, rootPath} from './Config'

const Put = (path,root,data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? onlineRoot : rootPath}/${path}`, data)
        .then((result) =>{
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise
}

export default Put;