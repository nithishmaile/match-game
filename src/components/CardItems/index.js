import './index.css'

const CardItems = props => {
  const {thumbnailsList, getId} = props
  const {id, thumbnailUrl} = thumbnailsList
  const onClickThumbnail = () => {
    getId(id)
  }

  return (
    <li className="thumbnailsImage-list-container">
      <button
        type="button"
        className="thumbnailsImage-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnails-image" />
      </button>
    </li>
  )
}

export default CardItems
