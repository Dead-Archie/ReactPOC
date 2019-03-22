import React, { Component } from 'react'
import Slider from "react-slick";
import {Card, Icon } from 'semantic-ui-react';

const extra = (
  <a href="#">
    <Icon name='user' />
    16 Friends
  </a>
)

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
                  <Card
                      image={data.images[2].url}
                      key={data.id}
                      header={data.title}
                      meta={data.as}
                      extra={extra}
                  />
              ))}
              </Slider>
            </div>
          ):('')
          )}
      
    </div>
    )
  }
}
export default Movies
