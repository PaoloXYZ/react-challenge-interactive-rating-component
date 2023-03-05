import Illustration from './assets/images/illustration-thank-you.svg'

function Thanks(props) {
  let selectedRating;
  if(props.rating){
    selectedRating = (
      <p className='text-Personal-Orange text-center'>
      You selected {props.rating} out of 5
      </p>
    );
  }else{
    selectedRating = (
       <p className='text-Personal-Orange text-center'>
      You selected no rating
      </p>
    );
  }
  return (
    <div className='mx-12 mt-9 grid row-auto gap-y-6'>
      <img src={Illustration} className='mx-auto' />
      <div className='flex items-center justify-center'>
        <div className='bg-Dark-Blue rounded-2xl w-fit py-1 px-5'>
            {selectedRating}
        </div>
      </div>
      <p className='text-center text-White text-3xl -mb-2 mt-1'>Thank you!</p>
      <p className='text-center text-Medium-Grey text-[14px]'>We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
 );
}

export default Thanks;
