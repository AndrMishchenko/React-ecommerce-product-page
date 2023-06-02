import './App.css';
import {useState,useEffect} from 'react';
import cart from './Photo/cart.svg'
import cartWhite from './Photo/cartWhite.svg'
import minus from './Photo/minus.svg'
import plus from './Photo/plus.svg'
import del from './Photo/delete.svg'
import close from './Photo/close.svg'
import next from './Photo/next.svg'
import previos from './Photo/previous.svg'

function App() {

  const [visibleCount, setVisibleCount] = useState()
  const [basket, setBasket] = useState(false)
  const [priceBacket, setPriceBacket] = useState()
  const [counetShop, setCounetShop] = useState(false)
  const [basketDefault, setBasketDefault] = useState(true)
  const [basketCart, setBasketCart] = useState(false)
  const [nameProduct, setNameProduct] = useState('')
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(125)
  const [totalPrice, setTotalPrice] = useState(0);
  const [saveInfo, setSaveInfo] = useState('')
  
  const [showLargePhoto, setShowLargePhoto] = useState(false);

  const getCart =() => {
    if(basket){
      setBasket(false)
    }else{
      setBasket(true)
    }
  }

  const clear = () => {
    setBasketDefault(true)
    setBasketCart(false)
    setCount(0)
    setVisibleCount()
    setCounetShop()
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
    if(count <= 0){
      alert('Please select quantity')
      setVisibleCount(visibleCount)
    }else{
      setNameProduct('Fall Limited Edition Sneakers')
      setSaveInfo(totalPrice)
      setPriceBacket(price)
      setBasketDefault(false)
      setBasketCart(true)
      setVisibleCount(count)
      setCounetShop(count)
    }
  }

  const view = () => {
    if(showLargePhoto === false){
      setShowLargePhoto(true);
    }else{
      setShowLargePhoto(false)
    }    
  };

  const prevImg = (e) => {
    e.stopPropagation();
    console.log('hi')
  }

  const nextImg = (e) => {
    e.stopPropagation();
    console.log('hiiiiii')
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
              {counetShop && (
                <div className='count-cart'>{visibleCount}</div>
              )}
            {basket && (
          <>
            <div className='basket-block'>
              <div className='basket-block-title'>Cart</div>
              <div className='basket-block-border'></div>
              <div className='basket-block-list'>
              <div className='basket-block-list-info'>
                {basketDefault && (
                  <>
                    <p className='basket-title'>Your cart is empty</p>
                  </>
                )}

                {basketCart && (
                  <>
                    <div className='shopping-list'>
                      <div className='img-cart-shopping-list'></div>
                      <div className='list'>
                        <p>Fall Limited Edition Sneakers</p>
                        <p>${price.toFixed(2)} x {count} = <span>${saveInfo.toFixed(2)}</span></p>
                      </div>
                      <div className='block-delete'>
                        <img 
                          src={del} 
                          className='delete' 
                          onClick={clear}
                        ></img>
                      </div>
                      
                    </div>
                    <button className='btn-check'>Checkout</button>
                  </>
                )}

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
              <div className='wrapper-img'>
                <div className='main-photo'></div>
                <div className='gallery-photo'>
                  <div className='photo1' onClick={view}></div>
                    {showLargePhoto && (
                      <div className='large-photo-overlay' onClick={view}>
                          <div className='large-photo-block'>
                            <img src={close} onClick={view} className='close'></img>
                            <div className='large-photo'>
                              <div className='block-arrows'>
                                <div className='position-block-arrows'>
                                  <div className='arrow-pre' onClick={prevImg}>
                                    <img src={previos}></img>
                                  </div>
                                  <div className='arrow-next'>
                                    <img src={next} onClick={nextImg}></img>
                                  </div>
                                </div>
                              </div>

                            </div>
                            
                          </div>
                          <div className='large-gallery-photo'>
                            <div className='photo1large'></div>
                            <div className='photo2large'></div>
                            <div className='photo3large'></div>
                            <div className='photo4large'></div>
                          </div>
                        
                      </div>
                    )}
                  <div className='photo2'></div>
                  <div className='photo3'></div>
                  <div className='photo4'></div>
                </div>
              </div>

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
                    <img src={minus} onClick={div} className='minus'></img>
                    <div className='count'>{count}</div>
                    <img src={plus} onClick={add}></img>
                  </div>
                  <button className='info-landing-add-cart' onClick={addInfo}>
                    <img 
                      className='white-icon'
                      src={cartWhite}
                    ></img>
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
