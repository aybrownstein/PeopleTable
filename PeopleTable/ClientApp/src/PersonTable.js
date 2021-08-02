import React from'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PersonTable extends React.Component {
   
        state = { 
            person : {
                firstName: '',
                lastName: '',
                age: ''
            },
            people: []
         }

         onTextChange = e => {
             const copy = {...this.state.person};
             copy[e.target.name] = e.target.value;
             this.setState({ person: copy});
         }

         onAddClick = () => {
             const people = [...this.state.people, this.state.person];
             this.setState({people, person:{ firstName: '', lastName: '', age: ''}});
         }

         onClearClick = () => {
             this.setState({people: []});
         }
    
    render() { 
        return ( 
            <div className="container mt-5">
                <PersonForm
                person ={this.state.person}
                onFirstNameChange={this.onTextChange}
                onLastNameChange={this.onTextChange}
                onAgeChange={this.onTextChange}
                onClearClick={this.onClearClick}
                onAddClick={this.onAddClick}/>
                <PersonRow person={this.state.person} people={this.state.people}/>
            </div>
         );
    }
}
 
export default PersonTable;