import React, { Component } from 'react'
import Slider from "react-slick";
import {Card, Image } from 'semantic-ui-react';
import {Route,Link} from 'react-router-dom';
import Details from './Details';

class Movies extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:[],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const _url= "https://cdn-discover.hooq.tv/v1.3/discover/curation?region=IN&page=1&perPage=40&type=BROWSE&titleType=MOVIE";
    fetch(_url)
      .then(response => response.json())
      .then(data => this.setState({ data : data.data,isLoading: false }));
  }


  render() {
    const match = this.props.match;
    const dataList = this.state;
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      ltr: true
    };
    console.log(this.state);
    return (
    <div>
        {dataList.data.map(data =>
          data.row_name != null?(
            <div key={data.obj_id}>
              <h3>{data.row_name} </h3>
              <Slider {...settings}>
              {data.data.map((data)=>(
                <Link to={`${match.url}/${data.id}`} key={data.id}>
                  <Card>
                    <Image src={data.images[2].url} />
                    <Card.Content>
                      <Card.Header className="truncate" title={data.title}>{data.title}</Card.Header>
                      <Card.Meta>{data.as}</Card.Meta>
                    </Card.Content>
                  </Card>
                </Link>
              ))}
              </Slider>
            </div>
          ):('')
          )}
      <Route path={`${match.url}/:id`} component={Details} />
    </div>
    )
  }
}
export default Movies
