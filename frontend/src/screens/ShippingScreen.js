import React , {useState} from 'react'
import {Form , Button} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'

import {FormContainer , CheckoutSteps} from '../components'
import {saveShippingAddress} from '../actions/cartActions'

const ShippingScreen = ({history}) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {shippingAdrress} = cart

    const [adrress , setAdrress] = useState(shippingAdrress.adrress)
    const [city , setCity] = useState(shippingAdrress.city)
    const [postalCode , setPostalCode] = useState(shippingAdrress.postalCode)
    const [country , setCountry] = useState(shippingAdrress.country)

    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(saveShippingAddress({adrress , city , postalCode , country}))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId='adrress'>
                    <Form.Label>Adrress</Form.Label>
                    <Form.Control required type='text' placeholder='Enter adrress' value={adrress} onChange={e => setAdrress(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control required type='text' placeholder='Enter city' value={city} onChange={e => setCity(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control required type='text' placeholder='Enter postal code' value={postalCode} onChange={e => setPostalCode(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control required type='text' placeholder='Enter country' value={country} onChange={e => setCountry(e.target.value)}></Form.Control>
                </Form.Group>  
                <Button variant='primary' type='submit'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
