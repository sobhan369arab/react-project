import '../style/Product.css';
import { useNavigate } from "react-router-dom"


const Product = ({id,name,score,color,price,onDelete,carList}) => {
    const Navigate = useNavigate();
    // const props = [{name,score,color,price}];
    const handleEdit = (productId)=>{
        const EditObj = carList.find(f => f.id === productId)
        Navigate('/EditProduct' , {state:EditObj})
    console.log(productId);

    }
    return (

        <>
            <div className={'parts'}>
            <div className='topItems'>
                <div className='element name'> {name} </div>    
                <div className='element score'> score : {score} </div>    
                <div className='element color'> color : {color} </div>    
                <div className='element price'> price : {price} $ </div>    
            </div>
            <div className='downItems'> 
                <button className='Btn edit' onClick={()=>{handleEdit(productId)}} > EDIT</button>
                <button className='Btn delete' onClick={onDelete}> DELETE</button>
            </div>
            {/* conter[name,score,color,price]  */}
         </div>
        </>
    )
}
export { Product }

