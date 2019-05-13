import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static defaultProps = {
    name: 'wiegh',
    unit: 'kg',
    value: 85,
    min: 20,
    max: 180,
    step: 5
  }
  static propTypes = {
    name: PropTypes.string ,
    unit: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
  }
  state = {
    value: this.props.value,
    min: this.props.min,
    max: this.props.max,
    step: this.props.step,
  }
   
  before = React.createRef()
  current = React.createRef()
  after = React.createRef()

  render() {
    return (
      <div className={styles.wieghtcontainer}>
        <div className={styles.title}>
          {this.props.name} <span className={styles.unit}>({this.props.unit})</span>
        </div>
        <div className={styles.control}>
          <div className={styles.numbersmall}  ref={this.before} 
          onClick={
            
            ()=>{
              if(this.state.value > this.state.min){
                this.before.current.classList.add(styles.hideRevers);
                this.current.current.classList.add(styles.hideCurrentRever);
                this.after.current.classList.add(styles.hideAfterRevers);
                setTimeout(()=>{
                  this.before.current.classList.remove(styles.hideRevers);
                  this.current.current.classList.remove(styles.hideCurrentRever);
                  this.after.current.classList.remove(styles.hideAfterRevers);
                  this.setState({
                    value: this.state.value - this.state.step
                  })
                }, 300);
              }else{
                alert(this.state.value < this.state.min);
              }
             
           }
         }
          >
            {this.state.value - this.state.step}
          </div>
          <div className={styles.number} ref={this.current} >
          {this.state.value }
            
          </div>
          <div className={styles.numbersmall} ref={this.after} onClick={
             ()=>{
               if(this.state.value < this.state.max){
                this.before.current.classList.add(styles.hide);
                this.current.current.classList.add(styles.hideCurrent);
                this.after.current.classList.add(styles.hideAfter);
                setTimeout(()=>{
                  this.before.current.classList.remove(styles.hide);
                  this.current.current.classList.remove(styles.hideCurrent);
                  this.after.current.classList.remove(styles.hideAfter);
                  this.setState({
                    value: this.state.value + this.state.step
                  })
                }, 300);
               }
             
            }
          }>
            {this.state.value + this.state.step}
          </div>
        </div>
      </div>
    )
  }
}
