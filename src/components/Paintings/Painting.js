import PropTypes from 'prop-types'
export default function Painting(props) {

  const {imageUrl, title, profileUrl, author='unknown', price, quantity}=props
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Availability: {quantity<10? 'running out' : 'in stock'} </p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}