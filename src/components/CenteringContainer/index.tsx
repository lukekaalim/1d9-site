import * as React from 'react';
import './style.css';

export interface centeringContainerProps { children: Object, className?: string }

const CenteringContainer = ({children}: centeringContainerProps) =>
<div className={'centeringContainer'}>
    {children}
</div>;

export default CenteringContainer;
