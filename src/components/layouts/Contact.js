
import styled from 'styled-components'
import React from "react"
import { Container, Form } from '../elements'
import { AwesomeIcon } from '../layouts'
import { above, grey, skyblue, } from '../utilities'


const getSocial = [
    { icon: ['fab', 'facebook-f'], url: 'https://www.facebook.com', },
    { icon: ['fab', 'instagram'], url: 'https://www.instagram.com', },
    { icon: ['fab', 'youtube'], url: 'https://www.youtube.com', },
    { icon: ['fab', 'twitter'], url: 'https://www.twitter.com', },
]

const StyledIconLink = styled.a`
display:flex;
justify-content: center;
align-items: center;
width:50px;
height:50px;
background-color:white;
border-radius: 50%;
text-decoration: none;
cursor: pointer;
border: 1px solid ${grey};
margin: .5rem;
transition: all 0.3s ease;
&:hover {
    color: white;
    font-weight:700;
    background-color: black; 
}
`
const SocialIconWrapper = styled.div`

display:flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
max-width:300px;

`
const ContactWrapper = styled(Container)`
display:flex;
flex-flow: column nowrap;
align-items: center;
${above.med`
flex-flow: row nowrap;
align-items: flex-start;

    `}
.box {
 flex-grow: 1;
 display:flex;
 justify-content:flex-start;
 padding:1rem;
 ${above.med`
     padding-left:10%;
  
    `}
 h2 { 
  font-size:1.5rem;
  padding:0;
  margin:0;
 }
 &:first-child {
    
  border:none;
  ${above.med`
    border-right: 1px solid ${grey};
  
    `}
 }
 &:last-child {
    border:none;};
  flex-direction: column;
  ${above.med`
    border-left: 1px solid ${grey};
  
    `}
 }
}
`


const Contact = ({ className }) => {

    return (
        <ContactWrapper className={className}>
            <div className="box left">
                <Form>

                    <Form.Label>
                        NEWS AND OFFERS
                    </Form.Label>
                    <Form.Input /><Form.Button modifiers="red">Submit</Form.Button>
                </Form>
            </div>
            <div className="box right">
                <h2>GET SOCIAL</h2>
                <SocialIconWrapper>
                    {getSocial.map(({ icon, url }) => (
                        <StyledIconLink href={url} target="_blank">
                            <AwesomeIcon to={url} icon={icon} />
                        </StyledIconLink>
                    ))}
                </SocialIconWrapper>
            </div>
        </ContactWrapper>
    )
}



export default styled(Contact)`
width:100%;
 flex-shrink: 0;
 border: 2px solid ${grey};
 background-color: ${skyblue};   
`
