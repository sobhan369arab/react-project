import React from 'react'
import '../style/AddProduct.css';
import * as yup from "yup";
import { Formik } from "formik";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Menu } from "./Menu"
import { Product } from './Product';
import FormProduct from './Form';
import { Success, Error } from './toast';

// import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';

const EditProduct = ({ carList }) => {
    const validation = yup.object().shape({
        name: yup.string().required("The Name Cannot Be !!"),
        score: yup.number().min(0).max(10).required("The Score Cannot Be !!"),
        color: yup.string().required("The color Cannot Be !!"),
        price: yup.number().required("The price Cannot Be !!"),

    })


    /* Edit product by post  */
    const onEdit = async (values) => {
        // console.log(values);
        try {
            await axios.put(`https://6653aa591c6af63f46754aa6.mockapi.io/users/${editId.state.id}`, values)
            // setCarList([...carList, obj]);
            const newCarList = carList.find(f => f.id === editId.state.id);
            Object.assign(newCarList, values)
            // notify();
            Success('the Product was successfully updated')

        } catch {
            Error('please try again')
        }


    };
    const editId = useLocation();

    return (
        <>
            <Menu />
            <div className='container'>
                <div className='title'> Edit Product </div>
                <Formik
                    initialValues={{ name: editId.state.name, score: editId.state.score, color: editId.state.color, price: editId.state.price }}
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