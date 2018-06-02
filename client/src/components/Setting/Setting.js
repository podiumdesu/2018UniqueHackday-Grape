import React from 'react'
import { Checkbox, Button } from 'antd'
import { connect } from 'react-redux'

const Setting = ({ id }) => {
  const scripts = [{ title: 'bilibili' }, { title: 'douyu' }, { title: 'weibo' }]
  return (<div>
    {scripts && scripts.length ? scripts.map((script, i) => (
      <Checkbox key={i}>{script.title}</Checkbox>)) : 'empty'}
    <Button type="dashed" onClick={() => console.log('c')}>ADD NEW</Button>
  </div>)
}

export default connect(state => ({ id: state.id }), {})(Setting)
