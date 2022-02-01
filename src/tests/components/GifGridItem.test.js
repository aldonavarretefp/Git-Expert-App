import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifGridItem',() => {
    const title = 'Hunter S. Thompson';
    const url = 'https://media.giphy.com/media/l0HlT2r5zQXyYkQqU/giphy.gif';
    const id = 'l0HlT2r5zQXyYkQqU';
    
    let wrapper = shallow(<GifGridItem id={id} title={title} url={url}/>);
    test('debe mostrar GifGridItem correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });
    test('debe de tener un <p> con el titulo title',()=>{
        expect(wrapper.find('p').text().trim()).toBe(title);
    });
    test('Imagen debe tener src y alt correcto.',()=>{
        // const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect(wrapper.find('img').prop('src')).toBe(url);
        expect(wrapper.find('img').prop('alt')).toBe(title);
    });
    test('div debe tener la clase animate__bounceInLeft',()=>{
        //Solo contener una clase en especifico
        expect(wrapper.find('div').prop('className')).toContain('animate__bounceInLeft');
        //Extraer todas las clases
        const div = wrapper.find('div');
        const classNames = div.prop('className');
        expect(classNames.includes('animate__bounceInLeft')).toBe(true);


    })

});