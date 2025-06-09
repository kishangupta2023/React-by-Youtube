import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/kishangupta2023')
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data);
    //     setData(data)
    //    })
    // },[])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github follower: {data.followers}
        <img className='text-center p-4 m-4 rounded-full bg-black' src = {data.avatar_url} alt="Git picture"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response =await fetch('https://api.github.com/users/kishangupta2023')
  return response.json()
}