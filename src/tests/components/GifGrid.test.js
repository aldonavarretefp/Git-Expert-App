import React from 'react';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';

describe('Pruebas en <GifGrid />', () => {
    let wrapper = shallow(<GifGrid />);
    test('debe mostrar <GifGrid/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});