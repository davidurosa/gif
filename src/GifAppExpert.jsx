import { useState } from "react"
import { AddCategory,GridGif } from "./components"

export const GifAppExpert = () => {

    const [categories, setcategories] = useState(['goku'])


    const onAddCategory =(newCategory)=>{
        if(categories.includes(newCategory)) return;
        setcategories([newCategory,...categories])
    }

  return (
    <>
            <AddCategory onNewCategory={  onAddCategory}  />

        
                {categories.map(category=>
                <GridGif key={category} category={category}/>
                )}
          
            
    </>

  )
}
