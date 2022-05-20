import { Table } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Image } from '../../services/Image';
import { ImageService } from '../../services/ImageService';
import { ItemBanner } from "./ItemBanner";

export function TableBanner() {
    const imageService = new ImageService();
    const [images, setImages] = useState<Image[]>();

    useEffect(()=>{
        imageService.getAll()
            .then(setImages)
    },[])

   const remove = (id:number) => {
      return async () => {
          await imageService.delete(id);
          setImages(await imageService.getAll())
      }
   }
    
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Caption</th>
                        <th>Orden Slider</th>
                        <th>Url</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {images?.map((img)=><ItemBanner key={img.id} image={img} onDelete={remove(Number.parseInt(img.id))}></ItemBanner>)}
                </tbody>
          
            </Table>
        </>
    )
}