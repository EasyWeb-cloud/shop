import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import { Footer , Header } from './components';
import {HomeScreen, ProductListScreen , ProductScreen , CartScreen , LoginScreen , RegisterScreen , ProfileScreen , ShippingScreen , PaymentScreen , PlaceOrderScreen , OrderScreen , UserListScreen, UserEditScreen , ProductEditScreen , OrderListScreen} from './screens';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen}/>
          <Route path='/placeorder' component={PlaceOrderScreen}/>
          <Route path='/payment' component={PaymentScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/admin/userlist' component={UserListScreen}/>
          <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
          <Route path='/admin/productlist' component={ProductListScreen} exact/>
          <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/>
          <Route path='/admin/orderList' component={OrderListScreen}/>
          <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>
          <Route path='/search/:keyword' component={HomeScreen}/>
          <Route path='/page/:pageNumber' component={HomeScreen}/>
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen}/>
          <Route path='/' component={HomeScreen} exact/>
        </Container>  
      </main>
      <Footer />
    </Router>
  );
}

export default App;
