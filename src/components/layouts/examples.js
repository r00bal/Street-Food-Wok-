<Button modifiers='small'>I am small button</Button>
 <Button modifiers='black'>I am black button</Button>
 <Button modifiers='red'>I am red button</Button>
 <Button modifiers='wide' onClick={handleClick} value="blue">I am wide button</Button>

 <Select>
  <option value="starters">starters</option>
  <option value="salads">salads</option>
  <option value="pho">pho</option>
 </Select>
 <Heading>WOK STREET FOOD</Heading>
 <Input type="text" placeholder="I am input" />
 <br /> <br />
 <Input type="text" placeholder="I am input" modifiers='small' />
 <br /> <br />
 <Input type="text" placeholder="I am input" modifiers='greyBorder' />
 <br /> <br />
 <Input type="text" placeholder="I am input" responsiveModifiers={{ small: 'mobileFullWidth' }} size={windowWidth <= size.small ? 'small' : null} />
 <br /> <br />
 <Form>
  <Form.Label modifiers='small'>NEWS AND OFFERS
       <Form.Input modifiers={['small', 'greyBorder']} />
  </Form.Label >
  <Form.Button modifiers='small'>Submit</Form.Button>
 </Form>
 <br /> <br />

 <Form>
  <Form.Label modifiers='hidden'>Enter location</Form.Label>
  <Form.Input placeholder="Enter location" />

  <Form.Button modifiers='red'>submit</Form.Button>
 </Form>
 <br /> <br />
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