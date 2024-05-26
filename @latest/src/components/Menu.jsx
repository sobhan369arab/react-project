import { useNavigate } from "react-router-dom"
import '../style/Menu.css';
// import { AllProduct } from "./AllProduct";


const Menu = () => {
    const Navigate = useNavigate();
        return (
    <>
        <div className='Menu'>
            <div> <h1>Sobhan</h1> </div>
            <ul>
                <li className='items' onClick={ () => { Navigate('/AllProduct')  }}> <h1> All Product </h1> </li>
                <li className='items' onClick={ () => { Navigate('/AddProduct')  }}> <h1> Add Product </h1> </li>
                <li className='items'> <h1> Edit Product </h1> </li>
            </ul>
        </div>
        {/* <AllProduct /> */}
    </>

        )
}
export { Menu }

