import '../style/AllProduct.css';
import axios from 'axios';
// import '../style/fonts.css';
// import { Outlet } from 'react-router-dom'

import { Menu } from "./Menu";
import { Product } from './Product';

const AllProduct = ({ carList}) => {

  /* Remove the product by delete */
    const handleDelete = async (ProductId) => {
        console.log(ProductId);
        await axios.delete(`https://6653aa591c6af63f46754aa6.mockapi.io/users/${ProductId}`)
        // const filterData = carList.filter(f => f.id !== ProductId);
        // setCarList(filterData);
      }
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
                                onDelete={()=>{handleDelete(item.id);}}
                                carList={carList}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export { AllProduct }

