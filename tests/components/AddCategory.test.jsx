import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test en <AddCategory/>', () => {

    test('Debe de mostrar el nuevo valor del input', () => {

        const inputValue = 'Dc Comics'

        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: inputValue } })

        expect(input.value).toBe(inputValue)
    })

    test('debe llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = "DC Comics"

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form') 

        fireEvent.input(input, { target: { value: inputValue } })  
        fireEvent.submit(form)
        
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()    
        expect(onNewCategory).toHaveBeenCalledTimes(1) 
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    })

    test('no debe llamar el onNewCategory cuando el input esta vacio', () => {

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()

    })

})