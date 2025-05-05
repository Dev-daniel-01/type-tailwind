"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import {api} from "@/constants/api"
import { error } from "console";

interface IData{
    name: string;
    gender: string;
    image: string;
    species: string;
    status: string;
}

const AxiosPage = () => {
const [data, setData] = useState<IData[]>([])

useEffect(() => {
api.get(`/character`).then((res) => {
    console.log(res.data.results)
    setData(res.data.results)
}).catch((error) => {
    console.log("deu ruim tua requisicao", error)
})
}, [])


    return(
        <>
        <h1>Axios Page client side</h1>
        <Suspense fallback={<div>Loading...</div>}>  
                  {data.map((item, index) => {
                        return(
                            <div key={index}>
                                <h2>{item.name}</h2>
                                <Image src={item.image} alt={item.name} width={200} height={200}/>
                                <p>{item.species}</p>
                                <p>{item.status}</p>
                                <p>{item.gender}</p>
                            </div>
                        )
                    })}  
        </Suspense>
        </>
    )
}

export default AxiosPage