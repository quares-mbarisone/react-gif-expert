import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Piece'])

    const onAddCategory = ( newCategory ) =>{
        if (categories.includes(newCategory)) return;
        setCategories( categories => [ newCategory, ...categories ])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            { 
                categories.map( category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}
