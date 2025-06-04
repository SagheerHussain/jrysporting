import React from 'react';
import logo from '/Images/logo.png';

const Logo = ({
    alt = "",
    className = "",
    ...props
}) => {
  return (
    <>
      <img src={logo} className={className} alt={alt} {...props} />
    </>
  )
}

export default Logo
