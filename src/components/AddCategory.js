import React,{useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Add Category'); //undefined da error

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            console.log("Submit");
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    // value={inputValue}
                    // defaultValue={inputValue}
                    placeholder="Add Category"
                    onChange={handleInputChange}
                />
                
            </form>    
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory


