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

 const getRemoteData = async () => {
    const base_url = 'http://localhost:4000' || process.env.REACT_APP_BASE_URL;
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