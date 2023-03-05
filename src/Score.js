import { useState, useEffect } from "react";
import Star from './assets/images/icon-star.svg'
import Rating from './Rating.js'

function Score(props) {
  const [rating, setRating] = useState(undefined);
  return {
    rating,
    render:
      (
        <div className='m-8 grid gap-y-6'>
          <div className='rounded-full bg-Personal-Bg-Gray p-3 w-fit'>
            <img src={Star} />
          </div>
          <p className='text-[1.6rem] text-White font-bold -mb-3'>How did we do?</p>
          <p className='text-Light-Grey text-[14px]'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className='grid grid-cols-5 gap-x-5'>
            <Rating num={1} click={() => setRating(1)}/>
            <Rating num={2} click={() => setRating(2)}/>
            <Rating num={3} click={() => setRating(3)}/>
            <Rating num={4} click={() => setRating(4)}/>
            <Rating num={5} click={() => setRating(5)}/>
          </div>
          <button onClick={props.click} 
            className='rounded-3xl bg-Personal-Orange text-White w-full py-2 font-bold
            focus:bg-White focus:text-Personal-Orange'>SUBMIT</button>
        </div>
     )
  }
}

export default Score;
