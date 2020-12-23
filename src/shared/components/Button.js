import React from 'react';
import '../../styles/components/button/btn-primary.scss'
import '../../styles/components/button/btn-secondary-o.scss'
import '../../styles/components/button/btn-secondary.scss'

function Button({text, btnType}) {
  const secondaryClass = 'ad-btn--secondary';
  const primaryClass = 'ad-btn--primary';
  const roundClass = 'ad-btn--secondary-o';

  const checkClass = (value) => {
    switch (value) {
      case 'secondary':
        return secondaryClass;
      case 'round':
        return roundClass;
      default:
        return primaryClass;
    }
  }

  return (
    <button className={checkClass(btnType)}>{text}</button>
  );
}

export default Button;
