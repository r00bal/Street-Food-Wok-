import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { animated } from 'react-spring'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { applyStyleModifiers } from 'styled-components-modifiers'
import styled from 'styled-components'
import { transparentBlack, elevation, fixed, above } from '../utilities'

const pages = [
    { name: 'home', path: '', img: "veggies", },
    { name: 'menu', path: 'menu', img: "noodlebox", },
    { name: 'our story', path: 'ourstory', img: "book", },
    { name: 'gallery', path: 'gallery', img: "polaroid", },
    { name: 'order', path: 'order', img: "delivery", },
    { name: 'find us', path: 'findus', img: "localisation", }
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
    `,
    left: () => `
    margin-right:auto;
    `
}

// const Logo = styled.h3`
// margin:0;
// color:white;
// opacity:0.6;
// width:100%;
// height:80px;
// display:flex;
// justify-content:center;
// align-items:center;
// transform: translate(-3%,25%);
// position:relative;
// ${headerFont};
// span {
//     width:120px;
//     position:absolute;
//     bottom:-10px;
//     ${above.small`
//             width:50px;
//             position:absolute;
//             bottom:0;
//             transform: translate(-15px,0px) rotate(20deg);
//             `} 
// }
// ${above.small`
//         width:100px;
//         transform: translate(0%,0%);
//         position:absolute;
//         `} 
// `

const StyledLink = styled(Link)`
       text-decoration: none;
       text-transform: uppercase;
       position:relative;
       color:white;   
        .LinkImg {
            display:flex;
            justify-content:center;
            align-items:center;
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

export const List = styled.ul`
list-style: none;
margin:auto;
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
    const { allDatoCmsAsset } = useStaticQuery(graphql`
    query navIcons {
        allDatoCmsAsset(filter: {tags: {eq: "nav"}}) {
    edges {
      node {
        id
        basename
        fluid(maxWidth: 70) {
         ...GatsbyDatoCmsFluid_noBase64
          
        }
      }
    }
  }
  }
  ` )

    const [active, setActive] = useState(null)
    const [key, setKey] = useState()

    const FirstRef = useRef();
    const LastRef = useRef();

    const handleKeyDown = (e) => {
        if (!mobile) return
        const { keyCode, shiftKey } = e;
        const { activeElement } = document;
        if (keyCode === 9 && !shiftKey) {
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

    }, [active, mobile, key]);


    return (
        <animated.nav className={className} style={animation}>
            {console.log(allDatoCmsAsset)}
            <List>
                {pages.map(({ name, img, path, src }, index, array) => {
                    const FirstElementRef = index === 0 ? { ref: FirstRef } : {};
                    const LastElementRef = index === array.length - 1 ? { ref: LastRef } : {}
                    const imageSrc = allDatoCmsAsset.edges.filter(({ node }) => (
                        node.basename === img
                    ))[0].node.fluid
                    console.log(imageSrc);
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
                                <div className="LinkImg">
                                    <Img fluid={imageSrc} alt={name} style={{ 'width': '100%', 'height': '100%;' }} />
                                </div>

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
    ${above.small`
    flex-direction: row;
    justify-content: flex-start;
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

