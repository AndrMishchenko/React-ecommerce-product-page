import './App.css';
import {useState,useEffect} from 'react';
import cart from './Photo/cart.svg'
import minus from './Photo/minus.svg'
import plus from './Photo/plus.svg'

function App() {

  const [basket, setBasket] = useState(false)
  const [cartList, setCartList] = useState('Your cart is empty')
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(125)
  const [totalPrice, setTotalPrice] = useState(0);
  const [saveInfo, setSaveInfo] = useState(0)

  const getCart =() => {
    if(basket){
      setBasket(true)
    }else{
      setBasket(false)
    }
  }

  const add = () => {
    const addNum = count + 1;
    setCount(addNum)
    setTotalPrice(price * addNum)
  }

  const div = () => {
    const divNum = count - 1;
    setCount(divNum)
    setTotalPrice(totalPrice - price)
  }

  const addInfo = () => {
    setSaveInfo(totalPrice)
  }

  return (
    <>
      <div className='wrapper'>
        <header>
          <div className='name-company'>
            <h2>sneakers</h2>
          </div>
          <div className='navigation'>
              <p className='navigation-coll'>Collection</p>
              <p className='navigation-men'>Men</p>
              <p className='navigation-wom'>Women</p>
              <p className='navigation-about'>About</p>
              <p className='navigation-cont'>Contact</p>
          </div>
          <div className='block-img'>
            <img 
              src={cart}
              onClick={getCart} 
            ></img>
            {basket && (
          <>
            <div className='basket-block'>
              <div className='basket-block-title'>Cart</div>
              <div className='basket-block-border'></div>
              <div className='basket-block-list'>
              <div className='basket-block-list-info'>
                {saveInfo}
              </div>
              </div>
            </div>
          </>
          )}
          </div>
          <div className='block-photo'>
            <div className='photo'></div>
          </div>
        </header>
        
        <div className='wrapper-block-info-shop'>
          <div className='block-info-shop'>
            <div className='page-info-shop'>
              <div></div>


              <div className='info-landing'>
                <div className='info-landing-preTitle'>SNEAKER COMPANY</div>
                <h2 className='info-landing-title'>Fall Limited Edition Sneakers</h2>
                <p className='info-landing-text'>The low-profile sneakers are your perfect casual wear companion. Featuring a duration rubber outer sole, they`ll withstand everything the weather can offer</p>
                <div className='info-landing-block-price'>
                  <div className='price'>${price.toFixed(2)}</div>
                  <div className='discount'>50%</div>
                </div>
                <div className='prev-price'>$250.00</div>
                <div className='info-landing-block-choice'>
                  <div className='choise'>
                    <img src={minus} onClick={div}></img>
                    <div className='count'>{count}</div>
                    <img src={plus} onClick={add}></img>
                  </div>
                  <button className='info-landing-add-cart' onClick={addInfo}>
                    <img src={cart}></img>
                    <p>Add to cart</p>
                  </button>

                  

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
