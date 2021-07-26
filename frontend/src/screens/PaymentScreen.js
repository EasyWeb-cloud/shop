import React , {useState} from 'react'
import {Form , Button , Col} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'

import {FormContainer , CheckoutSteps} from '../components'
import {savePaymentMethod} from '../actions/cartActions'

const PaymentScreen = ({history}) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {shippingAdrress} = cart

    if(!shippingAdrress){
        history.push('/shipping')
    }

    const [paymentMethod , setPaymentMethod] = useState('PayPal')

    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Shipping</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>    
                    <Col>
                        <Form.Check type='radio' label='PayPal or Credit Card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
                    </Col>
                </Form.Group>
                <Button variant='primary' type='submit'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
