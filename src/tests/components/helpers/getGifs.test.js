import { getGifs } from '../../../helpers/getGifs';


describe('Pruebas dentro del helper getGifs', () => {
    test('Debe traer 24 elementos', async () => {
        const gifs = await getGifs('Hunter S. Thompson');
        expect(gifs.length).toBe(24);
    });
    test('Debe traer 0 elementos si no se manda argumento category', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

});