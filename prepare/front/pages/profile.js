import Head from 'next/head';
import React from 'react';
// import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile =()=> {
    return (
   <>
   <Head> 
       <title> 내 프로필 |NordBird</title>
       </Head>
       <AppLayout>프로필</AppLayout>

    </>
    );

};

export default Profile;