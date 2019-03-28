import React, { Component } from 'react'
import {
    Button,
    Grid,
    Header,
    Image,
    Segment
  } from 'semantic-ui-react'

class Details extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    console.log(this.props);
    return (
        <React.Fragment>
         <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                
                <Grid.Column  width={6}>
                    <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    We Help Companies and Companions
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    We can give your company superpowers to do things that they never thought possible.
                    Let us delight your customers and empower your needs... through pure data analytics.
                    </p>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    We Make Bananas That Can Dance
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                    bioengineered.
                    </p>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
            <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    "What a Company"
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                    "I shouldn't have gone with their competitor."
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    <Image avatar src='/images/avatar/large/nan.jpg' />
                    <b>Nan</b> Chief Fun Officer Acme Toys
                    </p>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
        </React.Fragment>
    )
  }
}

export default Details
