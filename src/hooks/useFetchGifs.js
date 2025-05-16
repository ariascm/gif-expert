import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState([true])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }


    // Solo va a ejecutarse la primera vez que se renderiza el componente.
    // Aún si tuviese alguna constante con useState aqui, al renderizarse el componente, 
    // no volveria a ejecutar el useEffect, a menos que agreguemos alguna dependencia en []
    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}
