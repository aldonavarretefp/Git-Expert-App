import React from 'react';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';
    // let wrapper = shallow(<GifGrid category={category}/>);
    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        let wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    // test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
    //     const data = [
    //         {
    //             id: 'ABC',
    //             title: 'One Punch',
    //             url: 'https://media1.giphy.com/media/l0MYBQzZzQZbzmq5K/giphy.gif'
    //         },
    //         {
    //             id: 'A3A',
    //             title: 'Veggeta',
    //             url: 'https://media1.giphy.com/media/l0MYBQzZzQZbzmq5K/giphy.gif'
    //         },
    //     ];
    //     useFetchGifs.mockReturnValue({
    //         data,
    //         loading: true
    //     });
    //     let wrapper = shallow(<GifGrid category={category}/>);
    //     expect(wrapper).toMatchSnapshot();
    // });
    
    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'One Punch',
                url: 'https://media1.giphy.com/media/l0MYBQzZzQZbzmq5K/giphy.gif'
            },
            {
                id: 'A3A',
                title: 'Veggeta',
                url: 'https://media1.giphy.com/media/l0MYBQzZzQZbzmq5K/giphy.gif'
            },
            {
                id: 'A3B',
                title: 'Veggeta',
                url: 'https://media1.giphy.com/media/l0MYBQzZzQZbzmq5K/giphy.gif'
            },
        ];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: true
        });
        let wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length ).toBe(gifs.length);
        
    });
    
});
    
    