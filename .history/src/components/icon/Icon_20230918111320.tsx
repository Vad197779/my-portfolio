import React from 'react'
import iconSprite from '../../assets/images/icon-sprite.svg'

type IconPropsType = {
  iconId: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  )
}
