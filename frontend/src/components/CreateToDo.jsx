import { useState } from "react";

export function CreateToDo() {
    //create a local state variable for title and description 
    //to get data from input boxes to use for post request
    //react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div> 
        <input id="title" style={{padding: 10, margin: 10}} 
            type="text" placeholder="title" onChange={function(e){
                const value = e.target.value            //using instead of using document getelement 
                setTitle(value);                        //setting the title state variable to rerender the frontend
            }}></input><br></br>
        <input id="description" style={{padding: 10, margin: 10}} 
            type="text" placeholder="description" onChange={function(e){
                //using instead of using document getelement and //setting the description state variable to rerender the frontend
                setDescription(e.target.value);                        
            }}></input><br></br>

        <button style={{padding: 10, margin: 10}} 
            onClick={() => {
                //use axios library or send in json.stringify the data in a post method
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,                   //using the local state variables to send the inputs
                        description: description        //captured from the input boxes and stored in usestate
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                ).then(async function(res){
                    const json = await res.json();
                    alert("Todo Created");
                })
            }}>Add a Todo</button><br></br><br></br>
    </div>
}


