import './index.css'

const TabItems = props => {
  const {tabsListDetails, getTabCategory, isActive} = props
  const {tabId, displayText} = tabsListDetails

  const activeButton = isActive ? 'active-button' : ''

  const getCategory = () => {
    getTabCategory(tabId)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className={`${activeButton} tab-button`}
        onClick={getCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
