import { Component} from 'react';

export class Filter extends Component {
    onChange = evt =>{
        this.props.contactFilter(evt.target.value);
    }
    render(){
        return(
            <label>Find contact by name
            <input 
            type='text' name='filter' onChange={this.onChange}
            pattern='^[a-zA-Z]+$'/>
            </label>
        )
    }
}
