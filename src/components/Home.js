import {AddToCart, RemoveFromCart, EmptyCart} from '../redux/Action'
import {useDispatch} from 'react-redux'


function Home() {

  const dispatch = useDispatch();
  const product = {
    name: 'Iphone',
    type: 'Mobile',
    price: 50000,
    color: 'gold'
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <div className='btn'>
        <button onClick={()=> dispatch(AddToCart(product))}>Add to Cart</button>
        <br /><br/>
        <button onClick={()=> dispatch(RemoveFromCart(product))}>Remove To Cart</button>
        <br /><br/>
        <button onClick={()=> dispatch(EmptyCart())}>Reset to Cart</button>
      </div>
    </div>
  );
}

export default Home;
