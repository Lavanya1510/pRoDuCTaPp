import React, { Component } from 'react';
export class DynamicForm extends Component {
    state={};
    constructor(props){
        super(props);
    }
    onChange = (e,key) =>{
           this.setState({
           [key]: this[key].value
            })
         }

         validate = () => {
            let errors = {};
            const validators = this.props.validators;
            console.log(validators);
            validators.forEach((v) => {
              console.log(v);
              let fieldValue = this.state[v.key];
              console.log(`validating ${v.key}`);
              v.validations.forEach((vd) => {
                let r = vd.validator(fieldValue);
                if (!r) {
                  if (errors[v.key] == undefined) {
                    errors[v.key] = [];
                  }
                  //errors.push(`${v.key} ${vd.message}`)
                  // errors.push({
                  //   [v.key]:  vd.message
                  // });
                  errors[v.key].push(vd.message);
                }
              }); 
            })
        
            console.log("ERRORS: ", errors);
        
            return errors;
          }
        
          onSubmit = e => {
            e.preventDefault();
            let errors = this.validate();
            if (Object.entries(errors).length !== 0) {
              alert(JSON.stringify(errors));
              return false;
            }
            
            if (this.props.onSubmit) this.props.onSubmit(this.state);
          };
        //  onSubmit = (e) => {
        //      e.preventDefault();
        //      if(this.props.onSubmit) this.props.onSubmit(this.state);
        //  }
        //  onSubmit = (model) => {
        //      model.id=+new Date();
        //      alert(Json.stringify(model));
        //      this.setState({
        //          data: [model,...this.state.data]
        //      })
        //  }
    renderForm = () => {
        let model = this.props.model;
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};

           
             return (
                <div key={key} className="form-group">
                    <label className="form-label"
                        key={"l" + key}
                        htmlFor={key}>
                        {m.label}
                    </label>
                    <input {...props}
                        ref={(key)=>{this[m.key]=key}}
                        className="form-input"
                        type={type}
                        key={"i"+m.key}
                        onChange={(e)=>{this.onChange(e,key)}}
                        />

                </div>
            );
        });
      
}

    render(){
        let title = this.props.title || "Dynamic Form";
        return(
            <div className={this.props.className}>
                <h3>{title}</h3>
                <form className="dynamic-form" onSubmit={(e) =>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <div className="form-group">
                        <button type="submit">submit</button>

                    </div>
                </form>
            </div>
        )
    }
}

export default DynamicForm;
