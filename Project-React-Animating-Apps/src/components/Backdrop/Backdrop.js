import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
	cssClasses = ["Backdrop", props.show ? 'BackdropOpen' : "BackdropClose"]
	
  return (
  	<div className={cssClasses.join(' ')}></div>
  )
};

export default backdrop;