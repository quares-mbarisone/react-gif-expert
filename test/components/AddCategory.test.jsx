import { screen, render, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en componente <AddCategory />', () => {
    
    const inputValue = 'Matt';

    test('debe de cambiar el valor de la caja de texto', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> )
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe( inputValue );
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> )
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

    })

    test('no debe de llamar el onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> )
        
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    })

    test('debe de hacer match con la snapshot', () => {
        const onNewCategory = jest.fn();
        const { container } = render( <AddCategory onNewCategory={ onNewCategory } /> )
        expect( container ).toMatchSnapshot();
    })

})