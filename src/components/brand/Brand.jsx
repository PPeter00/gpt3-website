import React from 'react';
import './brand.css';
import { FaGoogle } from 'react-icons/fa';
import { BsSlack } from 'react-icons/bs';
import { FaAtlassian } from 'react-icons/fa';
import { BsDropbox } from 'react-icons/bs';
import { FaShopify } from 'react-icons/fa';

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div >
         <FaGoogle className='brand__icon'/>
         <span>Google</span>
      </div>
      <div className=''>
        <BsSlack className='brand__icon'/>
        <span>Slack</span>
      </div>
      <div className=''>
        <FaAtlassian className='brand__icon'/>
        <span>Atlassian</span>
      </div>
      <div className=''>
        <BsDropbox className='brand__icon'/>
        <span>Dropbox</span>
      </div>
      <div className=''>
        <FaShopify className='brand__icon'/>
        <span>Shopify</span>
      </div>
    </div>
  )
}

export default Brand
