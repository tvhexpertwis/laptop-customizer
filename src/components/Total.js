import React from 'react'

function Total(props){
    
    return(
        <div className="summary__total__value">
            {props.currency.format(props.total)}
        </div>
    )
}
export default Total;