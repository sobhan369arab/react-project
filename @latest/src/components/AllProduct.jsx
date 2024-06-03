import '../style/AllProduct.css';
import axios from 'axios';
import { Menu } from "./Menu";
import { Product } from './Product';
import { Success, Error } from './toast';


const AllProduct = ({ carList, setCarList }) => {

    /* Remove the product by delete */
    const handleDelete = async (ProductId) => {
        try {
            await axios.delete(`https://6653aa591c6af63f46754aa6.mockapi.io/users/${ProductId}`)
            const filterData = carList.filter(f => f.id !== ProductId);
            setCarList(filterData);
            Success('is deleted successfully')
        }
        catch {
            Error('please try again');
        }
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
                                id={item.id}
                                name={item.name}
                                score={item.score}
                                color={item.color}
                                price={item.price}
                                onDelete={() => { handleDelete(item.id); }}
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

