import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async()=>{
      const data = await getRemoteData();
      setData(data.data);
    })()
  },[])

  useEffect(() => {
    console.log('process', process.env)
  })

 const getRemoteData = async () => {
    const base_url =  process.env.REACT_APP_BASE_URL || 'http://localhost:4000/data';
    const data = await axios.get(`${base_url}/data`);
    return data;
  }
  return (
    <div>
    <p>{data && data.name}</p>
    <p>{data && data.age}</p>
    </div>
  );
}

export default App;