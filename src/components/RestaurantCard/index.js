import {Link} from 'react-router-dom'

import './index.css'

import {ImStarFull} from 'react-icons/im'

const RestaurantCard = props => {
  const {restaurantData} = props
  const {id, name, imageUrl, cuisine, userRating} = restaurantData

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link-item">
      <li id="restaurant-item" className="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />

        <div className="card-details-container">
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="rating-container">
            <ImStarFull className="star" />
            <p className="rating">{userRating.rating}</p>
            <p className="cuisine">({userRating.total_reviews} rating)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantCard
