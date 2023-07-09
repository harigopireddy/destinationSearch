import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="di-container">
      <img className="di-img" src={imgUrl} alt={name} />
      <p className="di-name">{name}</p>
    </li>
  )
}

export default DestinationItem
