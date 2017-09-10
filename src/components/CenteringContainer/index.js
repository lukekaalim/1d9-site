import React from 'react';
import style from './style.css';

const CenteringContainer = ({ children }) =>
<div className={style.centeringContainer}>
    {children}
</div>;

export default CenteringContainer;
