import React from 'react';


class PersonForm extends React.Component {
  

    
    render() { 
        return (
            <div className="row">
                <div className="col-md-8 mt-5 jumbotron" >
<input type="text" className="form-control" name="firstName" onChange={this.props.onFirstNameChange} value={this.props.person.firstName} placeholder="first name" />
<input type="text" className="form-control" name="lastName" onChange={this.props.onLastNameChange} value={this.props.person.lastName} placeholder="last name" />
<input type="text" className="form-control" name="age" onChange={this.props.onAgeChange} value={this.props.person.age} placeholder="age"/>
<button className="btn btn-success" onClick={this.props.onAddClick}>ADD</button>
<button className="btn btn-danger" onClick={this.props.onClearClick}>Clear</button>
</div>
</div>
        );
    }
}
 

export default PersonForm;