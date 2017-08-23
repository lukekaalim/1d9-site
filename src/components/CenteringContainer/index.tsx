import * as React from 'react';
import './style.css';

export interface centeringContainerProps { children: Object }

const CenteringContainer = (props: centeringContainerProps) =>
<div className="centeringContainer">
    {props.children}
</div>;

export default CenteringContainer;