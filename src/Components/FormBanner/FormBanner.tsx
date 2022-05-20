import { Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Image } from "../../services/Image";
import { ImageService } from '../../services/ImageService';
import { useParams } from "react-router-dom";
export function FormBanner(params:{}) {
    const imageService = new ImageService()
    const {id} = useParams();
    const [banner, setBanner] = useState<Image>();


    useEffect(()=>{
        imageService.getById(Number.parseInt(id!))
        .catch((img)=>{setBanner(img)})
    },[])

    const handleCaptionChange = (e:any)=>{
        setBanner((banner:any)=>{return {...banner, textCaption:e.target.value}})
    }

    
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Caption</Form.Label>
                    <Form.Control type="text" value={banner?.textCaption} onChange={handleCaptionChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Form>
        </>
    )
}