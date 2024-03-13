import React from 'react'
import './HeroBreadcrumb.css'
function HeroBreadcrumb(props) {
  return (
    <div className='herobreadcrumb'>
      <h1>{props.title}</h1>
      <div>Trang chủ / <span>{props.title}</span></div>
    </div>
  )
}

export default HeroBreadcrumb
