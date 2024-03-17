import axios from "axios";
import { useEffect } from "react";

const Api = () => {

    useEffect(() => {
        //Appel API fetch
        //fetch('https://jsonplaceholder.typicode.com/posts', {
        //    method: 'POST',
        //    body: JSON.stringify({
        //        title: 'foo',
        //        body: 'bar',
        //        userId: 1,
        //    }),
        //    headers: {
        //        'Content-type': 'application/json; charset=UTF-8',
        //    },
        //})
        //    .then((response) => response.json())
        //    .then((json) => console.log(json));

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response.data);
            })
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Welcome on Api Page!</h1>
        </div>
    )
};

export default Api;