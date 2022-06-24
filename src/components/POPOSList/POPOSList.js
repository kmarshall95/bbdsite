import React from 'react'
import POPOSSpace from './POPOSSpace';


function POPOSList() {
  return (
    <div>
        <h1>BBD News and updates coming now. Check back later.</h1>
        <POPOSSpace
            name="Blog Post 1"
            address="123 Monster Lane"
            image="women.jpeg"
        />
        <POPOSSpace
            name="Blog Post 2"
            address="The Moon"
            image="man.jpeg"
        />
        <POPOSSpace
            name="The Amazing Pen"
            address="123 Monster Lane"
            image="man2.jpeg"
        />
        <POPOSSpace/>
    </div>
  )
}

export default POPOSList