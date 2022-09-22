import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './BaiTapThucHanhComponent/Body';
import Footer from './BaiTapThucHanhComponent/Footer';
import Header from './BaiTapThucHanhComponent/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-center'>
    <Header />
    <Body />
    <Footer />
  </div>
);

