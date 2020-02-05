import React, { useState, useRef, useEffect } from 'react'
import { animated } from 'react-spring'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { applyStyleModifiers } from 'styled-components-modifiers'
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

const NAV_MODIFIERS = {
    static: () => `
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
    box-shadow:none;
    width:100%;
    height:auto;
    position: absolute;
    left:0;
    bottom:0;
    top:unset;
    padding: 10px 5%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10;
    `
}

const LINK_MODIFIERS = {
    static: () => `
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
         width:70px;
         visibility: visible; 
         padding-bottom:5px;     
         transition: transform .2s ease;  
            margin: auto;
            position: static;
           
     }
     &:hover {
         .LinkImg {
         transform:scale(1.5);
         transform-origin : bottom;
         }
         .LinkSpan {
            visibility:visible; 
           }
     }
 
    }
    `
}

const LIST_MODIFIERS = {
    static: () => `
    list-style: none;
        display: inline-block; 
        font-size:1.2rem;   
        padding:15px 10px; 
        .active {
            .LinkImg {
            visibility:visible;
            }
             .LinkSpan {
             visibility:visible; 
            }
        } 
    `
}

const StyledLink = styled(Link)`
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
        ${applyStyleModifiers(LINK_MODIFIERS)}
`

const List = styled.ul`
list-style: none;
margin:0;
padding:0;
`

const ListElement = styled.li` 
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
        ${applyStyleModifiers(LIST_MODIFIERS)}
`

const Navigation = ({ className, animation, modifiers, open = true, toggleOpen = null, mobile = false }) => {

    const [active, setActive] = useState(null)
    const [key, setKey] = useState()

    const FirstRef = useRef();
    const LastRef = useRef();

    const handleKeyDown = (e) => {
        if (!mobile) return
        const { keyCode, shiftKey } = e;
        const { activeElement } = document;
        console.log(e.keyCode)
        console.log(e.charCode)
        console.log(e.key)
        console.log(e)
        if (keyCode === 27 && toggleOpen) {
            toggleOpen(false)
        } else if (keyCode === 9 && !shiftKey) {
            setActive(activeElement)
            setKey('next')
        } else if (keyCode === 9 && shiftKey) {
            setActive(activeElement)
            setKey('prev')
        }

    }

    useEffect(() => {
        if (!mobile) return
        if (active === LastRef.current && key === 'next') {
            FirstRef.current.focus()
        } else if (active === FirstRef.current && key === 'prev') {
            LastRef.current.focus()
        }
        console.log(active)
        console.log(key)

    }, [active]);

    useEffect(() => {
        if (mobile && open) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

        console.log(active)
        console.log(key)

    }, [open]);

    return (
        <animated.nav className={className} style={animation}>
            <List>
                {pages.map(({ name, img, path }, index, array) => {

                    const FirstElementRef = index === 0 ? { ref: FirstRef } : {};
                    const LastElementRef = index === array.length - 1 ? { ref: LastRef } : {}
                    return (
                        <ListElement modifiers={modifiers} key={path} onKeyDown={handleKeyDown}>
                            <StyledLink modifiers={modifiers}
                                to={`/${path}`}
                                activeClassName="active"
                                className="Link"
                                tabIndex={open ? '0' : '-1'}
                                {...FirstElementRef}
                                {...LastElementRef}
                            >
                                <img className="LinkImg" src={img} alt={name} />
                                <span className="LinkSpan">{name}</span>
                            </StyledLink>
                        </ListElement>
                    )
                })}
            </List>

        </animated.nav>
    )
}

export default styled(Navigation)`
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
    z-index: 10;
    ${
    above.small`
    flex-direction: row;
    height:auto;
    `}
    ${applyStyleModifiers(NAV_MODIFIERS)};
`

Navigation.propTypes = {
    stick: PropTypes.bool,
    show: PropTypes.bool,
}

Navigation.defaultProps = {
    stick: false,
    show: false
}



// ${({ stick }) => stick ? NavStylesIfStick : NavStylesIfStatic};