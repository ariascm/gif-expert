import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test en <AddCategory/>', () => {

    test('Debe de mostrar el nuevo valor del input', () => {

        const inputValue = 'Dc Comics'

        render(<AddCategory onNewCategory={() => { }} />)   //el prop espera una función
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: inputValue } })

        expect(input.value).toBe(inputValue)
    })

    test('debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = "DC Comics"

        //crea funcion mock y evaluamos el comportamiento (la cual es enviada originalmente al componente padre)
        //sin necesidad de ver que se ejecuta en el padre, solamente evaluamos que sea enviada, que se ejecute ciertas veces, etc
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)   //enviamos la funcion mock de jest
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')  //debo agregar un aria-label en el elemento para que sea reconocido

        fireEvent.input(input, { target: { value: inputValue } })  //useState input = "Dc comics"
        fireEvent.submit(form)      //onSubmit input = ''
        // screen.debug()
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()    //que haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1)  //que se llame solo una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)  //llamada con el valor del arg inputValue

    })

    test('no debe llamar el onNewCategory cuando el input esta vacio', () => {

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()

    })

})