import React, { Component } from 'react';
import '../App.css';
import DynamicForm from './DynamicForm';
export class Dashboard extends Component {
    state = {
        data: [
          {id: 1, name:"aa", description:"bb", quantity:10, price:200},
          {id: 2, name:"cc", description:"dd", quantity:2, price:250},
          {id: 3, name:"cc", description:"dd", quantity:2, price:250}
        ],
        current: {}
      }

    render() {
        return (
            <div id="demo">
                 <div id="buttons">
                        <p id="addButton" >Add products</p>
                        <p id="allButton" > All products</p>
                </div>
                <div id="addButton">
                <DynamicForm className="form"
          title = "Registration"
          defaultValues = {this.state.current}
          model={[
            {key:"name",label: "name", type:"text"},
            {key:"description",label: "description", type:"text"},
            {key:"quantity",label: "quantity"},
            {key:"price", label: "price", type:"number", props:{required:true}},
            ]}
          onSubmit = {(model)=> {this.onSubmit(model)}}
          />    
          <pre style={{width:"300px"}}>
              {JSON.stringify(this.state.data)}
          </pre>
                </div>
            </div>
        )
    }
}

export default Dashboard;
