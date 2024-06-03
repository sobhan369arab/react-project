import React from 'react'
import '../style/AddProduct.css';
import * as yup from "yup";
import { Formik } from "formik";
import axios from 'axios';

import { Menu } from "./Menu"
import { Product } from './Product';
import FormProduct from './Form';
import { Success, Error } from './toast';

const AddProduct = ({ carList, setCarList, getCarList }) => {
    const validation = yup.object().shape({
        name: yup.string().required("The Name Cannot Be !!"),
        score: yup.number().min(0).max(10).required("The Score Cannot Be !!"),
        color: yup.string().required("The color Cannot Be !!"),
        price: yup.number().required("The price Cannot Be !!"),

    })

    /* Add product by post  */
    const onSubmit = async (values) => {
        try {
            const obj = { name: values.name, score: values.score, color: values.color, price: values.price }
            await axios.post(`https://6653aa591c6af63f46754aa6.mockapi.io/users`, obj)
            setCarList([...carList, obj]);
            getCarList();

            Success('product created successfully')
        } catch {
            Error('please try again');
        }
        // Toast('Edit Product');
    };
    return (
        <>
            <Menu />
            <div className='container'>
                <div className='title'> New Product </div>
                <Formik
                    initialValues={{ name: "", score: "", color: "", price: "", }}
                    onSubmit={(values) => onSubmit(values)}
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

                                />
                            </div>

                        </div>
                    )}
                </Formik>
            </div>
        </>
    )
}
export { AddProduct }