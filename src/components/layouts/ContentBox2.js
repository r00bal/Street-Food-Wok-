import React from 'react'
import styled from 'styled-components'
import { Card } from '../elements'
import { above } from '../utilities'
import Image from '../image'

export const CardWrapper = styled.div`
position:relative;
display:flex;
flex-flow:column wrap;
justify-content: space-around;
align-items: center;
margin-bottom:5rem;
${above.med`
     flex-flow:${({ reverse }) => reverse ? `row nowrap` : `row-reverse nowrap`};
    `}
`


export default function ContentBox({ id, title, copy, cta, url, image, index, CardCss, ImageCss }) {
      const reverse = index % 2 === 0;
      return (
            <CardWrapper key={id} reverse={reverse}>
                  <Card css={`${CardCss}
            ${above.med`
     margin:1rem;
    `}
          `}>
                        {title && (<Card.CardHeader>
                              {title}
                        </Card.CardHeader>)}
                        {copy && (
                              <Card.CardBody>
                                    {copy}
                              </Card.CardBody>
                        )}
                        {url && (
                              <Card.CardLinkButton to={url}>
                                    {cta}
                              </Card.CardLinkButton>
                        )}
                  </Card>
                  {image && (
                        <Image fluid={image}
                              cssProps={ImageCss} />
                  )}

            </CardWrapper>
      )

}
