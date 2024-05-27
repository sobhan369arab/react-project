import React from 'react'
import '../style/AddProduct.css';
import * as yup from "yup";
import { Formik } from "formik";
// import axios from 'axios';
import { useLocation } from 'react-router-dom';

// import '../style/AddProduct.css';
// import '../style/fonts.css';
// import { Outlet } from 'react-router-dom'

import { Menu } from "./Menu"
import { Product } from './Product';
import FormProduct from './Form';

const EditProduct = () => {
    const validation = yup.object().shape({
        name: yup.string().required("The Name Cannot Be !!"),
        score: yup.number().min(0).max(10).required("The Score Cannot Be !!"),
        color: yup.string().required("The color Cannot Be !!"),
        price: yup.number().required("The price Cannot Be !!"),

    })

    /* Add product by post  */
    const onEdit = async (values) => {
        const obj = { name: values.name, score: values.score, color: values.color, price: values.price }
        const obj2 = values.id ;
        console.log(obj2);

        // await axios.put(`https://6653aa591c6af63f46754aa6.mockapi.io/users${obj2 }`, obj)
        // setCarList([...carList, obj]);
    };
    const editId = useLocation();
    // console.log(editId.name);
    
    return (
        <>
            <Menu />
            <div className='container'>
                <div className='title'> Edit Product </div>
                <Formik
                    initialValues={{ name:editId , score: "score", color: "color", price: "price", }}
                    onSubmit={(values) => onEdit(values)}
                    validationSchema={validation}
                >
                    {(form) => (
                        <div className='form-wrapper'>
                            <div className='leftForm'>
                                <label className='titleForm'> Product Details </label>
                                <FormProduct />
                            </div>
                            <div className='rightForm'>
                                <Product
                                    isFocused={true}
                                    name={form.values.name}
                                    score={form.values.score}
                                    color={form.values.color}
                                    price={form.values.price}
                                    // conter={[]}
                                />
                            </div>

                        </div>
                    )}
                </Formik>
            </div>
        </>
    )

}
export { EditProduct }