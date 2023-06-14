import { Button } from 'react-bootstrap';
import styles from './styles.module.css';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Item = ({ btnText, actionType, id, price, title, img }) => {
  const { item } = styles;
  const dispatch = useDispatch();
  const btnHandler = () => {
    if (actionType === 'add') {
      dispatch({type: 'cart/addToCart', payload: id})
  }
}
console.log('id', id)
  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='primary'  onClick={btnHandler}>
        {btnText || 'Add to card'}
      </Button>
    </div>
  );
}
export default Item;
