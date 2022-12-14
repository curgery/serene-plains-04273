/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const SocialMedia = () => {
  return (
    <div>
      <a
        href='https://twitter.com/login'
        className='fa fa-twitter'
        alt-text='twitter'
        placeholder='twitter'
      />
      <a href='https://www.facebook.com' className='fa fa-facebook' alt='' />
      <a
        href='https://www.linkedin.com/company/uri'
        className='fa fa-linkedin'
        alt=''
      />
      <a
        href='https://accounts.google.com/ServiceLogin/webreauth?service=CPanel&p&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
        className='fa fa-google'
        alt=''
      />
      <a href='https://login.yahoo.com' className='fa fa-yahoo' alt='' />
      <a
        href='https://www.youtube.com/account'
        className='fa fa-youtube'
        alt=''
      />
      <a href='https://rss.com' className='fa fa-rss' alt='' />
      <a
        href='https://www.instagram.com/accounts/login/?hl=en'
        className='fa fa-instagram'
        alt=''
      />
    </div>
  );
};

export default SocialMedia;
