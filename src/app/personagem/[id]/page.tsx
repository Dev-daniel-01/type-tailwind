
interface IPersonagens {
    params: {
        id: string
    }
}

interface IData  {
        name: string;
        gender: string;
        image: string;
        species: string;
        status: string;
}

interface IDataStaticIndex{
    results: {
        id: number;
    }[]
}

const Personagem = async ({params: {id}} : IPersonagens) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {cache: 'no-store'})
    const data: IData = await res.json()

    console.log(data)
    return(
        <div className="bg-black w-[100vw] h-[100vh]">
            <h1 className="font-black text-white pt-[3rem]">CU</h1>
            <p className="font-black text-white">{data.id}</p>
            <p className="font-black text-white">{data.name}</p>
            <p className="font-black text-white">{data.gender}</p>
            <p className="font-black text-white">{data.species}</p>
        </div>
    )
}

export default Personagem


export async function generateStaticParams(){
    const res = await fetch(('https://rickandmortyapi.com/api/character'))
    const data: IDataStaticIndex = await res.json()

    return data.results.map((item) => ({
        id: item.id.toString()
    }))
}