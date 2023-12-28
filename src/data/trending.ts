import img1 from '../images/trend1.png'
import img2 from '../images/trend2.png'
import img3 from '../images/trend3.png'
import img4 from '../images/trend5.png'
import img5 from '../images/trend6.png'

interface Trending{
    id:number,
   img:typeof img1,
   name:string

}

export const trending:Trending[] = [
    {id:1,img:img1,name:"Shirt with puffed sleeves"},
    {id:2,img:img2,name:"Linen jumpsuit"},
    {id:3,img:img3,name:"White formal suit"},
    {id:4,img:img4,name:"Pattern dresses"},
    {id:5,img:img5,name:"Leather shirt dress"},
]