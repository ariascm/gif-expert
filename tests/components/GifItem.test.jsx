import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => {

    const title = "The batman"
    const url = "https://thebatman.com/batman.jpg"

    test('Pruebas en <GifItem/>', () => {

        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot()
    })


    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />)

        const { src, alt } = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('debe mostrar el texto del titulo', () => {

        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()

    })
})