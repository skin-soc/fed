import React from 'react';
import Image from 'mastodon/components/image';

const Logo = () => (
  <div className='about__header'>
    <Image blurhash={server.getIn(['thumbnail', 'blurhash'])} src={server.getIn(['thumbnail', 'url'])} srcSet={server.getIn(['thumbnail', 'versions'])?.map((value, key) => `${value} ${key.replace('@', '')}`).join(', ')} className='about__header__hero' />
  </div>
);

export default Logo;
