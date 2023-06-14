import React from 'react'
import styles from './styles.module.css'
import Loading from '../Loading/Loading'

const GridList = ({children, items, error, loading}) => {
    const {grid} = styles;
    const renderItems = items.map((item) => (React.cloneElement(children, {key: item.id, ...item})))
    return (
        <Loading error={error} loading={loading}>
            <div className={grid}>{renderItems}</div>
        </Loading>
    
    )
    }

export default GridList