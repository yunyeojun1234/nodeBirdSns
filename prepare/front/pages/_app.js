import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'

const NordBird =({Component})=> {
    return( 
        <>

      <Head>
          <meta charSet="utf-8" />
          <title>NoderBird</title>
            {/* <div>공통메뉴</div> */}
      </Head>
            <Component />
        </>
    )
};

NordBird.propTypes ={
    Component:PropTypes.elementType.isRequired
}

export default NordBird;