import React from 'react'
import { connect } from 'react-redux'
import { StyledBox, StyledButton, StyledInput, StyledSetting } from './Styled'
import { updateVisibility, addNewScript } from '../../actions'
import typeColor from '../Info/typeColor'

const Setting = ({ id, scripts, visible, updateVisibility, addNewScript }) => {
  const parseType = type => id[type]
  return (
    <StyledSetting>
      {
        scripts && scripts.length
          ? scripts.map(({ type, uuid }, i) => (
            <StyledBox
              style={{
                backgroundColor: visible.includes(uuid) ? typeColor(parseType(type)) : 'transparent',
                color: visible.includes(uuid) ? 'white' : typeColor(parseType(type)),
                cursor: 'pointer',
                border: `1px solid ${typeColor(parseType(type))}`,
              }}
              onClick={() => updateVisibility(uuid)}
              key={i}
            >
              {parseType(type)}</StyledBox>))
          : 'empty'
      }
      <StyledInput
        placeholder="<info-id>|<uid>+(add new)"
        onChange={e => {
          const content = e.target.value
          console.log(content)
          if (content[content.length - 1] === '+') {
            addNewScript({
              type: content.slice(0, content.indexOf('|')),
              uid: content.slice(content.indexOf('|') + 1, content.length - 1)
            })
          }
        }}
      />
    </StyledSetting>
  )
}

export default connect(state => ({
  id: state.id,
  scripts: state.scripts,
  visible: state.visible,
}), { updateVisibility, addNewScript })(Setting)
