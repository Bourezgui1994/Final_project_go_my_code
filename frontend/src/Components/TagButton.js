import React from 'react'

const TagButton = ({name,handleSetTag}) => {
    return (
        <div>
            
            <button type="button" className="btn btn-outline-warning tagButton" onClick={()=> handleSetTag(name)}  > {name.toUpperCase()}</button>
        </div>
    )
}

export default TagButton
