import React from 'react'
import Total from './Total';
import ShoppingCart from './CS';

function Summary(props){

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <ShoppingCart currency={props.currency} selected={props.selected} />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <Total currency={props.currency} total={props.total} />
        </div>
      </section>
  )
}
export default Summary;