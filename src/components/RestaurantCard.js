import { IMG_CDN_URL } from "../constants";
// case 10: Using Map function to make more dynamic
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, totalRatingsString }) => {
    return (
        <div className='card'>
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="Burger King" />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{totalRatingsString}</h4>
        </div>
    )
}

export default RestaurantCard;