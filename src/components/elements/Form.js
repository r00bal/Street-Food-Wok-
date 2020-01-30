import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Button, Input } from './index'
import { grey } from '../utilities'

const FORM_MODIFIERS = {
   hidden: () => `
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
 `,
   small: () => `
   font-size: 1rem;
 `,
}



export const Form = styled.form`
width: fit-content;
/* display: flex;
flex-direction: row;
justify-content:center;
align-items:flex-end; */
`
export const Fieldset = styled.fieldset`
border:none;
padding:none;
margin:none;
`

export const Label = styled.label`
color: black;
font-size: 1.5rem;
font-weight:600;
${applyStyleModifiers(FORM_MODIFIERS)};
`

const FormLabel = styled(Label)`
display: flex;
flex-direction: column;
margin-bottom:1rem;
`

const FormButton = styled(Button)`
border: 1px solid ${grey};
font-size:1rem;
`

const FormInput = styled(Input)`
font-size:1rem;
margin-right:0.5rem;
margin-bottom:0.5rem;
border: 1px solid ${grey};
`
Form.Label = FormLabel;

Form.Input = FormInput;

Form.Button = FormButton;

Form.Fieldset = Fieldset;



