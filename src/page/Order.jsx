import React, { useState } from 'react'
import Booking from '../components/Booking/Booking'
import Review from '../components/Review/Review'
import SelfReview from '../components/SelfReview/SelfReview'

let height;

function Order() {
  const [repClick,setRipClick] = useState(false);
  repClick ? height = 'bg-height' : height = 'null';
  return (
   <section className={`order ${height}`}>
    
    <div className="Booking">
    <Booking setRepClick={setRipClick} repClick={repClick}/>
    {console.log(repClick)}
    </div>
    <div className="reviews">
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    </div>
    <div className="reviewing">
      <SelfReview/>
    </div>
   </section>
  )
}

export default Order