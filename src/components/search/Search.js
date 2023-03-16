import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/ImageResults";
import logo from '../search/logo.jpg'
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'17241914-90da7b93c0ccceb734849dcd1',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div>
                <div className="headerSection">
                    <img src={logo} alt="" className='logoDesign'/>
            <input type="text" className='inputbox'
        placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             />
             </div>
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}



export default Search;