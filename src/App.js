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
import photo1 from './Photo/imageProduct1Thumbnail.jpg'
import photo2 from './Photo/imageProduct2Thumbnail.jpg'
import photo3 from './Photo/imageProduct3Thumbnail.jpg'
import photo4 from './Photo/imageProduct4Thumbnail.jpg'
import largePhoto1 from './Photo/imageProduct1.jpg'
import largePhoto2 from './Photo/imageProduct2.jpg'
import largePhoto3 from './Photo/imageProduct3.jpg'
import largePhoto4 from './Photo/imageProduct4.jpg'

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

  const photoMagazine = [photo1, photo2, photo3, photo4];
  const largePhotoMagazine = [largePhoto1, largePhoto2, largePhoto3, largePhoto4]

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhotoLargeIndex, setCurrentPhotoLargeIndex] = useState(0);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

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

  const view = (e) => {
    if (showLargePhoto === false) {
      const selectedIndex = e.target.dataset.index; // получить индекс выбранного фото
      setCurrentPhotoLargeIndex(parseInt(selectedIndex)); // установить индекс в состояние
      setSelectedPhotoIndex(parseInt(selectedIndex));
      setShowLargePhoto(true);
    } else {
      setShowLargePhoto(false);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();
    const newIndex = (currentPhotoLargeIndex - 1 + largePhotoMagazine.length) % largePhotoMagazine.length;
    const newIndeX = (currentPhotoIndex - 1 + photoMagazine.length) % photoMagazine.length;
    setCurrentPhotoLargeIndex(newIndex);
    setCurrentPhotoIndex(newIndeX);
  }

  const nextImg = (e) => {
    e.stopPropagation();
    const newIndex = (currentPhotoLargeIndex + 1 + largePhotoMagazine.length) % largePhotoMagazine.length;
    const newIndeX = (currentPhotoIndex + 1 + photoMagazine.length) % photoMagazine.length;
    setCurrentPhotoLargeIndex(newIndex);
    setCurrentPhotoIndex(newIndeX);
  };

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
                  {photoMagazine.map((photoSmall, index) => (
                    <img
                      className='photo1'
                      onClick={view}
                      src={photoSmall}
                      data-index={index} // добавлен атрибут data-index
                    ></img>
                  ))}
                    {showLargePhoto && (
                      <div className='large-photo-overlay'>
                        <div className='click-close' onClick={view}>
                          <img src={close}></img>
                        </div>
                        <div className='large-photo-block'>
                          <img 
                            src={largePhotoMagazine[currentPhotoLargeIndex]} 
                            alt='Large Photo'
                            className='photo-sneakers'
                          />
                          <div className='block-navigation'>
                            <div className='back' onClick={prevImg}>
                              <img 
                                src={previos}
                              ></img>
                            </div>
                            <div className='next' onClick={nextImg}>
                              <img 
                                src={next}
                              ></img>
                            </div>
                          </div>
                        </div>

                        <div className='small-photo-block'>
                            {photoMagazine.map((photo, index) => (
                               <div className={`back-img ${index === selectedPhotoIndex ? 'selected' : ''}`}>
                                <img
                                  src={photo}
                                ></img>
                              </div>
                            ))}                          
                        </div>
                      </div>
                    )}
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
