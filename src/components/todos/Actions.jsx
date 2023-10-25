import FeatherIcon from 'feather-icons-react';

const Actions = ({toogleComplete ,removeComplete ,handleDisabled ,handleFilter}) => {
  return (
    <div className='actions drop-filter'>
      <button className='show-all' onClick={()=> handleFilter("all")}>
        <FeatherIcon icon={"eye"}size="16"/>
        <span>Show All</span>
      </button>
      <button className='show-complete' onClick={()=> handleFilter("complete")}>
        <FeatherIcon icon={"check-circle"}size="16"/>
        <span>Show Complete</span>
      </button>
      <button className='toogle' onClick={toogleComplete}>
        <FeatherIcon icon={"repeat"} size="16"/>
        <span>Toogle Complete</span>
      </button>
      <button className='remove' onClick={removeComplete} disabled={handleDisabled() ? false : true}>
        <FeatherIcon icon={"trash-2"}size="16"/>
        <span>Rm Complete</span>
      </button>
    </div>
  )
}

export default Actions