import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Piece';
    const gifs = [
        {
            id:'1',
            title: 'Luffy',
            url:'https://localhost/luffy.jpg'
        },
        {
            id:'2',
            title: 'Zoro',
            url:'https://localhost/zoro.jpg'
        },
        {
            id:'3',
            title: 'Nami',
            url:'https://localhost/nami.jpg'
        }
    ]

    
    test('debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render(<GifGrid category={ category }/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('debe de mostrar items cuando se cargan las imágenes mediante el UseFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(3)
    })

    test('debe de hacer match con la snapshot', () => {
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        const { container } = render( <GifGrid category={ category }/> )
        expect( container ).toMatchSnapshot();
    })
})