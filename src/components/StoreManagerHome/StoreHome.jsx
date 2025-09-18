//create a navbar with react prime library, functional component with two dropdowns and one searchbar.
import React from 'react';
import "./StoreHomeStyle.css";
import LeftItem from './LeftContent';
import FooterContent from './FooterContent';
import HeaderPage from '../HeaderComponent/HeaderPage';

export default function StoreHome() {

  return (
    <div className="Card">
      <HeaderPage />
      <div className='totalcontainer'>
        <div className="leftcontainer">
          <LeftItem />
        </div>
      </div>
      <div className="footerstyle">
        <FooterContent />
      </div>
    </div>
  )
}
