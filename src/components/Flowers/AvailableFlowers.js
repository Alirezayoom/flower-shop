import FlowerItem from "./FlowerItem";

import p2 from '../../assets/2.png'
import p3 from '../../assets/3.png'
import p4 from '../../assets/4.png'
import p1 from '../../assets/1.png'
import p5 from '../../assets/5.png'
import p6 from '../../assets/6.png'
import p7 from '../../assets/7.png'
import p8 from '../../assets/8.png'


const DUMMY_FLOWERS = [
    {id: 1, name: "Sunflower Harvest", price:"12.99", bgc:"bg-purple-100", aks:p1},
    {id: 2, name:"A Burst of Sunshine", price:"29.99", bgc:"bg-red-100", aks:p2},
    {id: 3, name:"Delightfull Daisies", price:"18.00", bgc:"bg-blue-100", aks:p3},
    {id: 4, name:"Pretiest Petals", price:"30.99", bgc:"bg-green-100", aks:p8},
    {id: 5, name:"Lovely Roses", price:"14.99", bgc:"bg-orange-100", aks:p5},
    {id: 6, name:"Polka Dot", price:"11.99", bgc:"bg-blue-100", aks:p4},
    {id: 7, name:"Simple Elegance ", price:"17.99", bgc:"bg-green-100", aks:p7},
    {id: 8, name:"Pinch of Pink", price:"25.00", bgc:"bg-lime-100", aks:p6},
    
]

const flowers = DUMMY_FLOWERS.map(flower => (
    <FlowerItem 
    key={flower.id}
    id={flower.id}
    name={flower.name}
    price={flower.price}
    bgc={flower.bgc}
    aks={flower.aks}
    />
))

const AvailableFlowers = () => {
    return (
        <div className="max-w-[1080px] mx-auto ">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {flowers}
            </div>
        </div>
        
        
    )
}

export default AvailableFlowers;