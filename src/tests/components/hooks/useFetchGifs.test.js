import { useFetchGifs } from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en useFetchGifs', () => {
    test('debe retornar el estado inicial como data:[] y loading en true.', () => {
        const category = 'HunterXHunter';
        const { result } = renderHook(() => useFetchGifs(category));
        const { data, loading } = result.current;
        //Ya tenemos el estado inicial
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
});