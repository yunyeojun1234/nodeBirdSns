import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';    //자체적인 라우터 이다. 외우자 링크 컴포넌트,
import  {Menu} from 'antd';


/* *******children이 무엇을 뜻하는지 공부******** */
//화면안에 그릴수 있는 모든 것들이 노드다
const AppLayout= ({children}) => {
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
            <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
           
           
        </Menu>
        {children}
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