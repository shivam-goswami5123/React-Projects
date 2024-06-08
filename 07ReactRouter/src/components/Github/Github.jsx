import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    
    const data=useLoaderData();

    
  return (
    <div className='flex flex-col gap-1 items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <p>Name : {data.name}</p>
    <img className='h-[200px] w-[200px] ' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async({params})=>{
  const username=params.username || 'hiteshchoudhary'
  const response=await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

