
import React from "react"
import styled from 'styled-components';
import { Input } from '../elements'
import { textFont, grey, darkGrey } from '../utilities'
import { applyStyleModifiers, applyResponsiveStyleModifiers } from 'styled-components-modifiers'
import { AccessibleFocusOutlineElement } from '../hooks/AccessibleFocusOutlineElement'

const CHECKBOX_MODIFIERS = {
    small: () => `
    font-size: 1rem;
    `,
}


const LabelCheckbox = styled.label`
    position: relative;
    cursor: pointer;
    padding: 0;
  &:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border: 2px solid ${grey};
  }
  
`

const InputCheckbox = styled(Input)`
position: absolute; 
  opacity: 0; 
  &:hover + ${LabelCheckbox} {
      &:before {
        border: 2px solid black;
      } 
}
&:focus + ${LabelCheckbox} {
      &:before {
        /* outline: -webkit-focus-ring-color auto 5px; */
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




const Checkbox = ({ label, value, name }) => (
    <div>

        <InputCheckbox modifiers="accessibleHidden" value={value} id={name} name={name} type="checkbox" />
        <LabelCheckbox for={name}>{label}</LabelCheckbox>


    </div>
)


export default styled(Checkbox)`
${ textFont};
${ applyStyleModifiers(CHECKBOX_MODIFIERS)};
${ applyResponsiveStyleModifiers(CHECKBOX_MODIFIERS)}
`