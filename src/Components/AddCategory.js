import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handelInputChange = ( ev ) => {
        setInputValue(ev.target.value)
    }

    const handelSubmit = (ev) =>{
       if(inputValue.trim().length > 2){
            ev.preventDefault();
            setCategories(category => [inputValue, ...category]);
            setInputValue('')
       }
    }

    return (
        <React.Fragment>
            <form onSubmit={handelSubmit}>
                <input 
                    type="text"
                    placeholder="Puedes hacer una busqueda..."
                    value={ inputValue }
                    onChange={ handelInputChange }
                />
            </form>
        </React.Fragment>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
