import React from 'react';
import { Button } from 'antd';

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

const Hello = (props: Greeting) => <Button type="primary">Hello {props.name}</Button>

Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello;