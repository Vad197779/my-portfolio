import React from 'react'
import iconSprite from '../../assets/images/icon-sprite.svg'

export const Icon = () => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconSprite}`} />
    </svg>
  )
}
