import React from 'react'
import '../style/AddProduct.css';
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import '../style/AddProduct.css';
// import '../style/fonts.css';
// import { Outlet } from 'react-router-dom'

import { Menu } from "./Menu"
import { Product } from './Product';

const AddProduct = ({onSubmit}) => {
    const validation = yup.object().shape({
        name: yup.string().required("The Name Cannot Be !!"),
        score: yup.number().min(0).max(10).required("The Score Cannot Be !!"),
        color: yup.string().required("The color Cannot Be !!"),
        price: yup.number().required("The price Cannot Be !!"),

    })
    return (
        <>
            <Menu />
            <div className='container'>
                <div className='title'> New Product </div>
                <Formik
                initialValues={{name:"",score:"",color:"",price:"", }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={validation}
                >
                {(form)=>(
                    <div className='form-wrapper'> 
                    <div className='leftForm'>
                        <label className='titleForm'> Product Details </label>
                        <Form>
                            <div className='data'> 
                                <label> Name :</label>
                                <Field name="name" placeholder="Enter Name..." /> 
                                <ErrorMessage 
                                name="name"
                                component={'p'}
                                className='error'
                                />                     
                            </div>
                            <div className='data'> 
                                <label> score :</label>
                                <Field name="score" placeholder="Enter score..." /> 
                                <ErrorMessage 
                                name="score"
                                component={'p'}
                                className='error'
                                />                     
                            </div>
                            <div className='data'> 
                                <label> color :</label>
                                <Field name="color" placeholder="Enter color..." /> 
                                <ErrorMessage 
                                name="color"
                                component={'p'}
                                className='error'
                                />                     
                            </div>
                            <div className='data'> 
                                <label> price :</label>
                                <Field name="price" placeholder="Enter price..." /> 
                                <ErrorMessage 
                                name="price"
                                component={'p'}
                                className='error'
                                />                     
                            </div>
                            <button type='submit' className='Btn'> Add </button>
                        </Form>
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

export {AddProduct}