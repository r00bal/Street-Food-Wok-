
import React from "react"
import styled from 'styled-components';
import { Input } from '../elements'
import { textFont, grey, darkGrey } from '../utilities'
import { applyStyleModifiers, applyResponsiveStyleModifiers } from 'styled-components-modifiers'


const CHECKBOX_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    `,
}

const CheckboxContainer = styled.div`
display: flex;
flex-flow: row wrap;
`


const LabelCheckbox = styled.label`
    position: relative;
    cursor: pointer;
    padding: 0;
    display: flex;
flex-flow: row nowrap;
  &:before {
    content: '';
   
    margin-right: 10px;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border: 2px solid ${grey};
  }
  
`

const InputCheckbox = styled(Input)`
min-width: 1px;
position: absolute; 
  &:hover + ${LabelCheckbox} {
      &:before {
        border: 2px solid black;
      } 
      font-weight:700;
}
&:focus + ${LabelCheckbox} {
      &:before {
        border: 2px solid black;
      } 
}
&:checked + ${LabelCheckbox}{
    &:before {
        background: ${darkGrey};
    }
}
 
&:disabled + ${LabelCheckbox} {
  color: #b8b8b8;
  cursor: auto;
}

&:disabled + ${LabelCheckbox} {
    &:before {
    box-shadow: none;
    background: #ddd;
    }
}

/* &:checked + ${LabelCheckbox}{
    &:after {
        background: ${grey};
    }
} */
`




const Checkbox = ({ label, value, name, checked = false, handleChange }) => (
  <CheckboxContainer>
    <InputCheckbox modifiers="accessibleHidden" value={value} id={name} name={name} checked={checked} type="checkbox" onChange={handleChange} />
    <LabelCheckbox htmlFor={name}>{label}</LabelCheckbox>
  </CheckboxContainer>
)


export default styled(Checkbox)`
${textFont};
${applyStyleModifiers(CHECKBOX_MODIFIERS)};
${applyResponsiveStyleModifiers(CHECKBOX_MODIFIERS)}
`