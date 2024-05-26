import '../style/Product.css';

const Product = ({name,score,color,price,onDelete}) => {
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
                <button className='Btn edit'> EDIT</button>
                <button className='Btn delete' onClick={onDelete}> DELETE</button>
            </div>

         </div>
        </>
    )
}
export { Product }

