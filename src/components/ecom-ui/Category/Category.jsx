import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import React from 'react';

const Category = ({ title, img, id, prefix }) => {
  const { category, categoryImg, categoryTitle, catLink } = styles;
  
  return (
    <Link to={`${prefix}/items`} className={catLink}>
      <div className={category}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </div>
    </Link>
  );
};

export default Category;
