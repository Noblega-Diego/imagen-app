import { Image } from './Image';
export class ImageService {
    constructor() {}

    async getAll():Promise<Image[]>{
        return await (await fetch('http://168.194.207.98:8081/api_banner/get_banners.php')).json()
    }

    async getById(id:number):Promise<Image>{
        let imagenes:Image[] = await (await fetch('http://168.194.207.98:8081/api_banner/get_banners.php')).json()
        return imagenes.filter((img)=>Number.parseInt(img.id)==id).pop()!
    }

    async insert(image:Image):Promise<void>{
        await (await fetch('http://168.194.207.98:8081/api_banner/get_banners.php',
        {
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(image),
            method:"POST"
        }));
    }

    async update(image:Image):Promise<void>{
        await (await fetch('http://168.194.207.98:8081/api_banner/put_banner.php',
        {
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(image),
            method:"PUT"
        }));
    }
    
    async delete(id:number):Promise<void>{
        await (await fetch('http://168.194.207.98:8081/api_banner/delete_banner.php?id='+id,
        {
            method:"DELETE"
        }));
    }
}