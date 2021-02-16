import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';    //자체적인 라우터 이다. 외우자 링크 컴포넌트,
import  {Menu, Input, Row, Col} from 'antd';
import LoginForm from '../components/LoginForm'
import UserPorfile from '../components/UserProfile'
 

/* *******children이 무엇을 뜻하는지 공부******** */
//화면안에 그릴수 있는 모든 것들이 노드다
const AppLayout= ({children}) => {
     const[isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <div>
        <Menu mode="horizontal">
        <Menu.Item> 
            <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item> 
           <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item> 
           <Input.Search enterButton style={{verticalAlign:'middle'}} /> 
        </Menu.Item>
        <Menu.Item>  
            <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
           
           
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6} >
                {isLoggedIn ? <UserProfile/>: <LoginForm />}
            왼쪽 메뉴 </Col>
            <Col xs={24} md={12} >
            {children}</Col>
            
            <Col xs={24} md={6} >
                 <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
                 </Col>
        </Row>
        
    </div>
    );
};

AppLayout.propTypes ={
    children: PropTypes.node.isRequired,
};

export default AppLayout;
/* 코드점검툴 */
//npm i eslint -D
//npm i eslint-plugin-import -D
// npm i eslint-plugin-react -D   
//npm i eslint-plugin-react-hooks -D   