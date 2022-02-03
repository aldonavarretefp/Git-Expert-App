import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en AddCategory',()=>{
    const setCategories = jest.fn();
    
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto',()=>{
        const input = wrapper.find('input');
        const value = 'Hola'
        input.simulate('change',{ target:{ value} });
    });
    
    test('NO debe de postear la información del submit', () => {
        wrapper.find('form').simulate('submit',{ 
            preventDefault(){} 
        });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto',()=>{
        //TODO:
        //1. Simular el inputChange
        //2. Simular el submit
        //3. Verificar que se ejecuta el setCategories
        //4. Verificar que se limpia el input con el valor ''
        const value = 'Hola';
        const input = wrapper.find('input');
        input.simulate('change',{
            target:{
                value
            }
        });
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
});