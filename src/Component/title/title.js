import './title.css'
import React,{Component} from "react";

const todoTitle = "call family";
const todoDesc = "lorem lorem lorem lorem";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


class Title extends Component{
    render(){
        return (
            <div>
                 {/* <h1>Name: {this.props.name} | Email: {this.props.email}</h1> */}
                 <div className="card">
  <h3 className="cardTitle">{todoTitle}</h3>
  <p className="cardTitle">{todoTitle}</p>
  <p className="cardDesc">{todoDesc}</p>
  <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
</div>

            </div>
        )
    }
}
export default Title;