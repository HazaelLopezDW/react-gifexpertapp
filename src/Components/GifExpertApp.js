import React, { useState }  from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid'

const GifExpertApp = () => {

    // const categories = [ 'One Puch', 'Samurai X', 'Dragon Ball', 'Naruto'];
    const [categories, setCategories] = useState([ 'One Puch']);

    return (
        <React.Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories }
            />
            <hr/>
            {
                <ol>
                    {categories.map(category => <GifGrid
                        key={category}
                        category={category} />)}
                </ol>
            }
        </React.Fragment>
    )
}

export default GifExpertApp