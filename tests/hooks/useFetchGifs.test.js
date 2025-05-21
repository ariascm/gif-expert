import { render, renderHook, screen, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => {

    test('Debe evaluar el estado inicial', () => {

        const category = "DC comics"
        // render(useFetchGifs(category))   //hook solo debe ejecutarse dentro de un functional component
        //entonces usamos renderHook para simular que se ejecuta en un FC
        const { result } = renderHook(() => useFetchGifs(category))

        expect(result.current.images.length).toBe(0)
        expect(result.current.isLoading).toBeTruthy()

    })

    test('debe mostrar arreglo con las imagenes y isLoading en false', async () => {

        const category = "DC comics"
        const { result } = renderHook(() => useFetchGifs(category))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        expect(result.current.images.length).toBeGreaterThan(0)
        expect(result.current.isLoading).toBeFalsy()
    })

})