import * as React from 'react';
import './style.css';

export interface centeringContainerProps { children: Object, className: string }

const CenteringContainer = (props: centeringContainerProps) =>
<div className={`centeringContainer ${props.className}`}>
    {props.children}
</div>;

export default CenteringContainer;
