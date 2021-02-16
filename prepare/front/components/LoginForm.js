import React, {useState, useCallback} from 'react';
import {Form, Input, Button}  from 'antd';
import Link from 'next/link';




const LoginForm =()=> {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangedId = useCallback((e)=>{
        setId(e.target.value)
    }, []);

    const onChangedPassword = useCallback((e)=>{
        setPassword(e.target.value)
    }, []);
   // const [passwordCheck, setPasswordCheck] = useState('');
    return(

        <Form>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangedId} /> 
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input 
                name="user-password" 
                type="password" 
                value={password} 
                onChange={onChangedPassword}
                required
                /> 

            </div>
            <div>
<Button  type="primary" htmlType="submit" loading={false}> 로그인</Button>
<Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>

    );
}

export default LoginForm