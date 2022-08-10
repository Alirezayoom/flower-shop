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
    {id: 1, name: "Sunflower Harvest", price:"12.99", aks:<img src={p2} alt="p2" className='w-[150px] '/>},
    {id: 2, name:"A Burst of Sunshine", price:"29.99", aks:<img src={p3} alt="p3" className='w-[150px] '/>},
    {id: 3, name:"Delightfull Daisies", price:"18.00", aks:<img src={p8} alt="p8" className='w-[150px] '/>},
    {id: 4, name:"Pretiest Petals", price:"30.99", aks:<img src={p5} alt="p5" className='w-[150px] '/>},
    {id: 5, name:"Lovely Roses", price:"14.99", aks:<img src={p4} alt="p4" className='w-[150px] '/>},
    {id: 6, name:"Polka Dot", price:"11.99", aks:<img src={p7} alt="p7" className='w-[150px] '/>},
    {id: 7, name:"Simple Elegance ", price:"17.99", aks:<img src={p1} alt="p1" className='w-[150px] '/>},
    {id: 8, name:"Pinch of Pink", price:"25.00", aks:<img src={p6} alt="p6" className='w-[150px] '/>},
    
]

const flowers = DUMMY_FLOWERS.map(flower => (
    <FlowerItem 
    key={flower.id}
    id={flower.id}
    name={flower.name}
    price={flower.price}
    
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