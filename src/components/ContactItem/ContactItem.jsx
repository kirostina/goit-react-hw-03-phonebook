import { Component} from 'react';

export class ContactItem extends Component {
    onClick = evt => {
        this.props.deleteContact(evt.target.name);
    };
    render(){
        return(
            <li>
                <p>{this.props.name}:{this.props.phone}</p>
                <button type='button' name={this.props.name} onClick={this.onClick}>Delete</button>
            </li>
        );
    }
}