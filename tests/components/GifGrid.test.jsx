import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")


describe('Prueba en <GifGrid/>', () => {

    const category = 'Marvel'

    test('Debe mostrar el loading inicial "cargando..." ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        // screen.debug()
        expect(screen.getByText('cargando...'))
        expect(screen.getByText(category))

    })

    test('debe mostrar el arreglo de gifs ', () => {

        const images = [{
            id: 'ABC',
            title: 'Batman',
            url: 'https://locahots/batman.jpg'
        },
        {
            id: 'CBA',
            title: 'Flash',
            url: 'https://locahots/flash.jpg'
        },]

        useFetchGifs.mockReturnValue({
            images,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)

    })

})