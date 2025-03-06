import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {
    
    const inputValue = 'One Piece'
    
    test('Debe de poder describirse en el input', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe(inputValue)
    })

    test('Debe de poder mandarse el formulario', () => {
        render( <GifExpertApp /> )
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        
        expect( input.value ).toBe(inputValue);
        
        fireEvent.submit( form );

        expect( input.value ).toBe('');
    })

    test('debe de hacer match con la snapshot', () => {
        const { container } = render( <GifExpertApp /> )
        expect( container ).toMatchSnapshot();
    })

    test('No debe agregar la categoría si ya existe', () => {
        render( <GifExpertApp /> )
        
    })

    test('Debe agregar la categoría si no existe', () => {
        render( <GifExpertApp /> )
    })

})