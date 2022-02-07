import { useFetchGifs } from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en useFetchGifs', () => {
    test('debe retornar el estado inicial como data:[] y loading en true.', async () => {
        const category = 'HunterXHunter';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        const { data, loading } = result.current; //Ya tenemos el estado inicial
        
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('debe retornar un arreglo de imgs y loading en false', async () => {
        const category = 'HunterXHunter';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(19);
        expect(loading).toBe(false);
    });
    
    
});