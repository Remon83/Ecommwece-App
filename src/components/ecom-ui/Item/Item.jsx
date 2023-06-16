import { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import styles from './styles.module.css';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Item = ({ btnText, actionType, id, price, title, img }) => {
  const { item, button } = styles;
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(0);
  const btnHandler = () => {
    if (actionType === 'add') {
      dispatch({type: 'cart/addToCart', payload: id})
      setBtnClicked(prev => prev + 1)
  }
}
  useEffect(() =>{
    if (btnClicked === 0) return;
    setDisabled(true)
    const debounce = setTimeout(() => {
      setDisabled(false)
    }, 500)
    return () => {
      clearTimeout(debounce)
    }
  }, [btnClicked])

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='primary'  onClick={btnHandler} disabled={disabled} className={button}>
        {
          disabled ? (
            <>
              <Spinner animation="border" size="sm" />
                Loading...
            </>
          ) : (btnText || 'Add to card')
        }
        
      </Button>
    </div>
  );
}
export default Item;
