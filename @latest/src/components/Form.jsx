import React from 'react'
import {  Form, Field, ErrorMessage } from "formik";

const FormProduct = () => {
    return (
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
    )
}

export default FormProduct