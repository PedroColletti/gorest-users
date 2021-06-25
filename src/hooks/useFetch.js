import React, {useEffect} from 'react';

export const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    useEffect(async () => {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
    });
    return response;
  };