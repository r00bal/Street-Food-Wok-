import React from "react"
import { Link } from "gatsby"
import { Card, Heading, Button, LinkButton } from '../components/elements'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Street Food Wok" />
      <Heading>WOK STREET FOOD</Heading>
      <Card>
        <Card.CardHeader>
          Hello form Card
      </Card.CardHeader>
        <Card.CardBody>
          And this is the text from inside the Card. Please by me guest and customize it as you wish.
      </Card.CardBody>
        <Card.CardButton>
          Push the button
      </Card.CardButton>
      </Card>

      <div><Button>I am button</Button></div>
      <Button modifiers='small'>I am small button</Button>
      <Button modifiers='black'>I am black button</Button>
      <Button modifiers='red'>I am red button</Button>
      <Button modifiers='wide' onClick={handleClick} value="blue">I am wide button</Button>


      <Card>
        <Card.CardHeader>
          Hello form Card
      </Card.CardHeader>
        <Card.CardBody>
          And this is the text from inside the Card. Please by me guest and customize it as you wish.
      </Card.CardBody>
        <Card.CardButton>
          Push the button
      </Card.CardButton>
      </Card>

      <div><Button>I am button</Button></div>
      <Button modifiers='small'>I am small button</Button>
      <Button modifiers='black'>I am black button</Button>
      <Button modifiers='red'>I am red button</Button>
      <Button modifiers='wide' onClick={handleClick} value="blue">I am wide button</Button>



      <LinkButton modifiers='D3' to="#3d" >I am 3D button</LinkButton>


      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage
