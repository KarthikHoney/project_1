import {Component} from "react";
import { FaTrash } from "react-icons/fa";
import "./index.css"
class TodoList extends Component{
    state={searchBar:"",notes:[]}

    onChangeSearch=(event)=>{
        this.setState({searchBar:event.target.value})
    }

    onClickAddButton=()=>{
        const {notes,searchBar}=this.state
        const newNotes={
            id:notes.length+1,
            text:searchBar,
            completed:false
        }
        this.setState({notes:[...notes,newNotes],searchBar:""})
    }

    onClickDeleteIcon=(id)=>{
        const {notes}=this.state
        const filteredList= notes.filter((each)=>
          each.id !== id  
        )

        this.setState({notes:filteredList})
    }

    render(){
        const {searchBar,notes}=this.state
        return(
            <div className="mainContainer" style={{backgroundColor:"greenyellow",padding:"20px",margin:"20px"}}>
                <h1>Todo List</h1>
                <input type="text" value={searchBar} placeholder="Add your daily task" onChange={this.onChangeSearch}/>
                <button type="button" onClick={this.onClickAddButton}>Add</button>
                <ul className="unOrderList" style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                    {notes.map((each)=>(
                        <div style={{display:"flex",justifyContent:"space-between" , padding:"10px",margin:"10px",backgroundColor:"whitesmoke"}}>
                            <li key={each.id} >{each.text}</li>
                            <li onClick={()=>this.onClickDeleteIcon(each.id)} ><FaTrash /></li>
                        </div>
                        ))}
                </ul>
            </div>
        )
    }
}
export default TodoList;