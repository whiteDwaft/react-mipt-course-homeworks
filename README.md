## HW1 (Comments)

+ request ```/``` is empty (now are available:
    + ```/boards``` 
    + ```/{board's key}```

+ this script:
```
<Route path="/TB1" component={() => Tasks(data1)}/>
<Route path="/TB2" component={() => Tasks(data2)}/>
<Route path="/TB3" component={() => Tasks(data3)}/>
<Route path="/CTS" component={() => Tasks(data4)}/>
``` 
(I use 4 urls instead of single one, because component choosing depends on json(not on board's key), but, of cource, I can write converter (board's key => json)
## HW2(Comments)

+ bug fixes of HW1

+ new Urls:
    + ```/boards```
    + ```/board/:key```

+ Integration with the server (+loaging state , +error state)
```js
const [dat, setResBody] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
    fetch(url)
        .then(resp => resp.json())
        .then(data => setResBody(data))
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
}, [url]);

return [dat, loading, error];
    
```
