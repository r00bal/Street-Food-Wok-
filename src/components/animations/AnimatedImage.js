import React, { useState } from "react"
import styled, { css } from 'styled-components';
import { useSpring, config, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint';
import Img from "gatsby-image"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = styled(Img)`
width: 100%;
height:140%;

`
const Wrapper = styled(animated.div)`
display:flex;
padding:10px;
/* box-shadow:0px 0px 0px 1.5px black; */
/* border: 1.5px solid black; */
overflow: hidden;
z-index:4;
position: relative;
&:before {
  z-index:3;
content: '';
width:100%;
height:20px;
position: absolute;
background-color:#fff;
top:0px;
left:0px;
right:0px;
}
&:after {
  z-index:3;
content: '';
width:100%;
padding:1.5px;
height:20px;
position: absolute;
background-color:#fff;
bottom:0px;
left:0px;
right:0px;
}
`

const Animation = styled(animated.div)`
width:100%;
z-index:2;

`


const AnimatedImage = ({ cssProps, fluid, delay = 50, }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { y, o, s } = useSpring({
    s: isVisible ? 2 : 0,
    o: isVisible ? 1 : 0,
    y: isVisible ? 0 : 300,
    from: { y: 300, o: 0, s: 0 },
    delay: delay,
    config: { mass: 5, tension: 100, friction: 60 }
  })
  const { yi } = useSpring({

    yi: isVisible ? -15 : -2,
    from: { yi: -2 },
    delay: delay + 100,
    config: { mass: 1, tension: 180, friction: 150 }
  })

  return (
    <Waypoint onEnter={() => setIsVisible(true)}>
      <Wrapper css={cssProps} style={{
        boxShadow: s.interpolate((s) => `0px 0px 0px ${s}px black`),
        opacity: o,
        transform: y.interpolate((y) => `translateY(${y}px)`),

      }}>
        <Animation style={{ transform: yi.interpolate((yi) => `translateY(${yi}%)`) }}>
          <Image fluid={fluid} />
        </Animation>
      </Wrapper>
    </Waypoint>
  )
}

export default AnimatedImage
