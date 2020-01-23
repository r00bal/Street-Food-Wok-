import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Button } from './Buttons'
import { Input } from './Input'
import { elevation, above } from '../utilities';
import { headerFont, textFont } from '../utilities'

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
 `,}

export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content:center;
align-items:flex-end;
padding:1rem;
`

export const Label = styled.label`
font-size: 1.2rem;
color: black;
${applyStyleModifiers(FORM_MODIFIERS)};
`

const FormLabel = styled(Label)`
display: flex;
flex-direction: column;
`

const FormButton = styled(Button)`
font-size:1rem;
`

const FormInput = styled(Input)`
font-size:1rem;
margin-right:0.5rem;
`
Form.Label = FormLabel;

Form.Input = FormInput;

Form.Button = FormButton;



