import '../style/AllProduct.css';
// import '../style/fonts.css';
// import { Outlet } from 'react-router-dom'

import { Menu } from "./Menu";
import { Product } from './Product';

const AllProduct = ({ carList,handleDelete}) => {
    return (
        <>
            <Menu />
            <div className='container'>
                <div className='title'> All Product </div>
                <div className='content'>
                    {carList.map((item, index) => {
                        return (
                            <Product
                                key={index}
                                name={item.name}
                                score={item.score}
                                color={item.color}
                                price={item.price}
                                onDelete={()=>{handleDelete(item.name);}}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export { AllProduct }

