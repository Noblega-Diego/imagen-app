import { useEffect, useState } from "react";
import { ImageService } from '../../services/ImageService';
import { Image } from '../../services/Image';
import { Carousel } from "react-bootstrap";

function ImageBanner(params: { image: Image, quantityImg: Number}) {

    const [image, setImage] = useState<Image>(params.image);

    return (<>
        <div className="mySlides fade">
            <div className="numbertext"><p>{`${image.ordenSlider} / ${params.quantityImg}`}</p></div>
            <img src={image.urlImageBanner} style={{width:'1000px', height:'600px'}}/>
            <div className="text">{image.textCaption}<br/>{image.descriptioImage}</div>
        </div>
    </>)
}


export function DemoBanner() {
    const [images, setImage] = useState<Image[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        new ImageService().getAll()
            .then(setImage)
    }, [])



    return (<>
        <div>
            <div className="slideshow-container">
                {images.map((img) => <ImageBanner key={img.id} image={img} quantityImg={images.length}></ImageBanner>)}
                <div contentEditable='true' dangerouslySetInnerHTML={{ __html: '<a class="prev" onclick="plusSlides(-1)">❮</a><a class="next" onclick="plusSlides(1)">❯</a>' }}></div>
            </div>
            <div></div>
        </div>
    </>)
}