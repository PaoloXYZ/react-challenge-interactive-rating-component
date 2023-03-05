function Rating(props) {
  return (
    <button onClick={props.click}
        className="text-Light-Grey bg-Personal-Bg-Gray rounded-full p-3 text-center
        hover:bg-Light-Grey hover:text-White focus:bg-Personal-Orange focus:text-White">
        {props.num}
    </button>
  );
}

export default Rating;
