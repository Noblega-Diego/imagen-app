import { Image } from '../../services/Image';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function ItemBanner(params:{image:Image, onDelete:()=>{}}) {
    const [image, setImage] = useState(params.image);
    return (
        <>
            <tr>
                <td>{image.id}</td>
                <td>{image.textCaption}</td>
                <td>{image.ordenSlider}</td>
                <td>{image.urlImageBanner}</td>
                <td><Link to={'/form/Banner/'+image.id}><Button>Update</Button></Link></td>
                <td><Button onClick={params.onDelete}>Delete</Button></td>
            </tr>
        </>
    )
}