import React from 'react'
import {MdClose} from 'react-icons/md'


const ShowCase = ({imageSrc, setShowPic}) => {
  return (
    <div className='showCase'>
          <img src={imageSrc} alt="" />
          <MdClose onClick={() => setShowPic(false)} className='close-icon' size="1.3em" />
    </div>
  )
}

export default ShowCase