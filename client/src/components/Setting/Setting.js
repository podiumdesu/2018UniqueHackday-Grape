import React from 'react'
import { connect } from 'react-redux'

const Setting = ({ scripts, visible }) => {
  return (
    <div>
      {
        scripts && scripts.length ? scripts.map(({ type }, i) => (
          <checkbox value={false} key={i}>
            {type}</checkbox>)) : 'empty'
      }
      <button onClick={() => console.log('c')}>ADD NEW</button>
    </div>
  )
}

export default connect(state => ({ id: state.id, scripts: state.scripts, visible: state.visible }), {})(Setting)
