import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en Componente <GifItem />', () => {

    const title = "Luffy Gomu Gomu no Bazuka"
    const url= "https://one-piece.com/luffy.jpg"

    test('debe de hacer match con la snapshot', () => {
        const { container } = render( <GifItem title={title} url={url} /> )
        expect( container ).toMatchSnapshot();
    })

    test('debe mostrarme la imagen con el URL y el Alt indicado', () => {
        render( <GifItem title={title} url={url} /> );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('debe mostrarme el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    })
})