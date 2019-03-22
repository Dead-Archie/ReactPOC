import React, { Component } from 'react';
import { List,Card, Icon } from 'semantic-ui-react';
const extra = (
    <a href="#">
      <Icon name='user' />
      16 Friends
    </a>
  )
class Container extends Component {
  render() {
      console.log("Conatainer ",this.props)
      const dataList = this.props.data ;
      return (
        <React.Fragment>  
            <div className="box">
                <h3>1</h3>
            </div>
            <div className="box">
                <h3>2</h3>
            </div>
            <div className="box">
                <h3>3</h3>
            </div>
            <div className="box">
                <h3>4</h3>
            </div>
            <div className="box">
                <h3>5</h3>
            </div>
            <div className="box">
                <h3>6</h3>
            </div>
        </React.Fragment>
      )
      return (
        dataList.map((data)=>(
            <Card
                image={data.images[2].url}
                key={data.id}
                header={data.title}
                meta={data.as}
                extra={extra}
            />
        ))
    )    
    
  }
}

export default Container
