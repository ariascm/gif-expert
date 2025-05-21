import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {


    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()

        // screen.debug()
    })

    test('Submitear dos veces la misma categoria y que se muestre una sola vez', () => {

        const nuevoValor = "Marvel"

        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: nuevoValor } })

        expect(input.value).toBe(nuevoValor)

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(screen.getByText(nuevoValor)).toBeTruthy()

        fireEvent.input(input, { target: { value: nuevoValor } })
        fireEvent.submit(form)
        // screen.debug()
        expect(screen.getAllByText(nuevoValor).length).toBe(1)
    })

})