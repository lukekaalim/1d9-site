import * as React from 'react';
import './style.css';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) =>
    <h1 className="helloHeading">Hello from {props.compiler}@{props.framework}</h1>;

export default Hello;