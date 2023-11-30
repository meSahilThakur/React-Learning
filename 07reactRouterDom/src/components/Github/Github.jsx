// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mesahilthakur')
    //     .then((response)=> response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     } )
    // },[])

  return (
    <div className=' bg-gray-600 text-white text-3xl p-8 flex flex-wrap justify-evenly items-center'>
        <div>
        <img className=' p-4' src={data.avatar_url} alt="git pic" width={300} />
        </div>
        
        <div >
        Github Folowers: {data.followers} 
        <br />
        Github Repos: {data.public_repos}
        </div>
        
    </div>
  )
}

export default Github

export const GithubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/mesahilthakur')
    return response.json()
}