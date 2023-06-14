import styles from './styles.module.css';
import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {totalQuantities} from '../../../state/CartSlice'
import { useSelector } from 'react-redux';

const Header = () => {
  const {
  header, 
  headerTop, 
  shoppingCardImg, 
  shoppingCardCounter, 
  mainNav, 
  secNav,
  notifcation,
  activeLink} = styles

let total = useSelector(totalQuantities)

  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg='info'>Ecom</Badge>
        </h1>
        <div className={styles.shoppingCard}>
          <img alt='' src={shoppingCardImg} width='30' />
          <div className={shoppingCardCounter}>{total}</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <NavLink to='/'
            className={({ isActive }) => isActive ? activeLink : undefined }
            >Home</NavLink>
          </li>
          <li>
            <NavLink to='/categories'
            className={({ isActive }) => isActive ? activeLink : undefined }
            >Categories</NavLink>
            
          </li>
          <li>
          <NavLink to='/new-collections'
          className={({ isActive }) => isActive ? activeLink : undefined }
          >New Collections</NavLink>
          </li>
        </ul>
        <ul className={secNav}>
          <li>
          <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
          <NavLink to='/register'>Register</NavLink>
          </li>
        </ul>
      </nav>
      <div className={notifcation}>
          <p>you have reached the maximum stock of item</p>
        </div>
      
    </header>
  );
};

export default Header;
