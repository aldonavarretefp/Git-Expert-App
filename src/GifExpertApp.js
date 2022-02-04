import {useState} from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp({defaultCategories = []}) {
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cat => ['HunterXHunter',...cat]);//callback
    // }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
                <ol>
                    {
                        categories.map((category) => (
                            <GifGrid
                                key={category}
                                category={category}
                            /> //Si lo vamos a renderizar se utiliza el key
                        ))
                    }
                </ol>
        </>
    )
}

export default GifExpertApp
