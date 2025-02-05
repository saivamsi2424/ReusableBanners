// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="headText1">{headerText}</h1>
        <p className="paraText">{description}</p>
        <button className="buttonForCard" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
