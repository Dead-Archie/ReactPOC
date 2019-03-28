import React, { Component } from 'react'

class SliderComponent extends Component {
  render() {
    //console.log(this.props.data)
    const dataList = this.props.data ;
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        rtl: true
      };
    return (
        dataList.map((data)=>(
            <div> {data.title} </div>
        ))
    )
  }
}

export default SliderComponent
