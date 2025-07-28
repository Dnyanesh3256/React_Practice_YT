import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function GitHub() {
    const data = useLoaderData();
    console.log(data);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Dnyanesh3256")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])
    return(
        <div className="text-center m-4 text-3xl p-4 bg-gray-600 text-white">
            GitHub Username: {data.login}
            <img src={data.avatar_url} alt="github profile pic" width={300}/>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Dnyanesh3256");
    return response.json();
}