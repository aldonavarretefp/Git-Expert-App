import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas en GifExpertApp',()=>{
    test('debe mostrarse correctamente', () => {
        let wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar una lista de categorias', () => {
        let categories = ['HunterXHunter', 'OnePiece'];
        let wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});