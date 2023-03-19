import { GifItem } from "./GifItem";
import { useEffectGif } from "../hooks/useEffectGif";

export const GridGif = ({category}) => {


  const {images,isLoading} = useEffectGif(category); 


  
  return (
    <>
    <h3>{category}</h3>

      {isLoading &&(<h2>cargando...</h2>)}
       <div className="card-grid">{
        images.map((image)=>


            <GifItem key={image.id} {...image}/>
        )
        }
       </div>
    </>
  )
}
