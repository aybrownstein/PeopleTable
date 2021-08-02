import React from 'react';

class PersonRow extends React.Component {
   generateTr = (person, idx) =>{
       let className = '';
       if (person.age > 65){
           className = 'text-danger'
       }

       return <tr className={className} key={idx}>
           <td>{person.firstName}</td>
           <td>{person.lastName}</td>
           <td>{person.age}</td>
       </tr>
   }


    render() { 
        return (
<table className="table table-striped table-bordered">
    <thead>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        </tr>
    </thead>
<tbody>
{this.props.people.map((person, i) => this.generateTr(person, i))}
</tbody>
</table>
          );
    }
}
 
export default PersonRow;
