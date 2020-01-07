import React from 'react'
import { Link } from 'gatsby'
import book from '../assets/img/book.png'
import delivery from '../assets/img/delivery.png'
import localisation from '../assets/img/localisation.png'
import noodlebox from '../assets/img/noodlebox.png'
import polaroid from '../assets/img/polaroid.png'
import styled, { css } from 'styled-components'
import { transparentBlack, elevation, fixed, absolute, above } from '../utilities'

const pages = [
    { name: 'menu', path: 'menu', img: noodlebox },
    { name: 'our story', path: 'ourstory', img: book },
    { name: 'gallery', path: 'gallery', img: polaroid },
    { name: 'order', path: 'order', img: delivery },
    { name: 'find us', path: 'findus', img: localisation }
]

const StyledLinkStylesIfStick = css`
text-decoration: none;
       text-transform: uppercase;
       position:relative;
       color:white;   
        .LinkImg {
            top: 0;
            bottom: 0;
            margin: auto;
            position: absolute;
            left: 0;
            right: 0;
            width:80px;
            visibility: hidden;
            ${above.small`
             width:40px;
            `}         
        }
        &:hover {
            ${above.small`
             .LinkImg {
            visibility:visible;
            }
            .LinkSpan {
             visibility:hidden; 
            }
            `}  
        }
`

const StyledLinkStylesIfStatic = css`
       text-decoration: none;
       text-transform: uppercase;
       position:relative;
       color:white;  
       display: flex;
       flex-direction: column; 
       height:80px;
       justify-content: flex-end;
       align-items:center;
        .LinkImg {
            width:40px;
            visibility: visible; 
            padding-bottom:5px;     
            transition: transform .2s ease;  
        }
        &:hover {
            .LinkImg {
            transform:scale(1.5);
            transform-origin : bottom;
            }
        }
`
//${({ stick }) => stick ? null : testStyles};

const StyledLink = styled(Link)`
       ${({ stick }) => stick ? StyledLinkStylesIfStatic : StyledLinkStylesIfStick};
`

const List = styled.li` 
        list-style: none;
        font-size:3rem;
        padding:15px 10px;  
        .active {
            .LinkImg {
            visibility:visible;
            }
             .LinkSpan {
             visibility:hidden; 
            }
        }
        ${above.small`
        display: inline-block; 
        font-size:1.2rem;   
        `}  
`

const Navigation = ({ className, stick = false }) => {

    return (
        <nav className={className}>
            {console.log(stick)}
            {pages.map(({ name, img, path }) => {
                return (
                    <List>
                        <StyledLink stick={stick}
                            to={`/${path}`}
                            activeClassName="active"
                            className="Link"
                        >
                            <img className="LinkImg" src={img} />
                            <span className="LinkSpan">{name}</span>
                        </StyledLink>
                    </List>
                )
            })}
        </nav>
    )
}
const NavStylesIfStick = css`
background: ${transparentBlack};
   ${elevation[0]};
    width:100%;
    height:100vh;
    ${fixed()};
    padding: 10px 5%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${
    above.small`
    flex-direction: row;
    height:auto;
    `}
`

const NavStylesIfStatic = css`
    background: none;
    width:100%;
    height:auto;
    ${absolute({ x: 0, y: 0, yProp: 'bottom', xProp: 'left' })};
    padding: 10px 5%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default styled(Navigation)`
   background: ${transparentBlack};
   ${elevation[0]};
    width:100%;
    height:100vh;
    ${({ stick }) => stick ? fixed() : absolute({ x: 0, y: 0, yProp: 'bottom', xProp: 'left' })};
    padding: 10px 5%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${
    above.small`
    flex-direction: row;
    height:auto;
    `}
`

