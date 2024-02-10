import React, { PureComponent } from 'react'
import loading from './loading.gif'

export class Spinner extends PureComponent {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
