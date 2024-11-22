"use client"

import {useState } from "react"
import Typewriter from 'typewriter-effect';
import Image from "next/image"



const TodoList = () => {

    const [todoList, setTodoList] = useState(["studying"]);
    const [todo, setTodo] = useState("");

    // For Edit Field
    const [editIndex, setEditIndex] = useState<number | null>(null)
    const [editTodo, setEditTodo] = useState("")

    // Add in todo list
    const handleAddTodo = () => {

        if(todo.trim() !== ""){
        setTodoList([...todoList, todo])
        setTodo("")
    }
}

    // Delete from todo list
    const handleDelTodo = (index: number) => {
        setTodoList(todoList.filter((list, i) => {   
            return i != index       //if i (index) is not equal to index 
        }))

    }

    // Edit in todo list
    const handleEditTodo = (index: number,currentTodo: string) =>{
        setEditIndex(index)
        setEditTodo(currentTodo)   // Pre-fill the input with the current todo value  
    }

    // save the edited todo
    const handleSaveEdit = () => {
        if (editTodo.trim() !== "") {
            const updatedList = todoList.map((todoItems, i) =>   //If the index i matches the editIndex, it means this is the todo being edited, so we replace that todo with the new value (editTodo).If the index doesn't match, it just keeps the existing todo (todo).
            
                i === editIndex ? editTodo : todoItems
            );
            setTodoList(updatedList);
            setEditIndex(null); // Close edit mode
            setEditTodo(""); // Clear the edit field
        }
    }

        // Handle Enter key press to save edits
        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleSaveEdit();  // Save the edit when Enter is pressed
            }
        }
    



    return (
        <div className="font-serif text-white flex flex-col justify-center items-center mt-10" >
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold my-10 lg:my-20">
                <Typewriter
                    options={{
                        strings: ['Todo List', 'Application'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <form>
            {/* input field */}
            <div className="flex space-x-5">

                <input name="todo" type="text" placeholder="What do you want to do?" value={todo} onChange={(e) => setTodo(e.target.value)} required className="bg-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-black w-80 h-10 lg:w-96 xl:w-[450px] xl:h-16 rounded-md" />
                <button onClick={handleAddTodo}
                disabled={todo.trim() === ""} // Disable button if input is empty 
                 className="bg-white font-bold text-black w-28 text-lg lg:text-xl lg:w-40 rounded-md">Add Task</button>
            </div>
            </form>


            {/* Display Area */}
                                                                                                                            {/* overflow ensures that the list will only scroll vertically (if the content exceeds the available space) instead of expanding the container. */}
            <div className="bg-black shadow-lg shadow-white w-[450px] lg:w-[650px] h-full xl:w-[700px] 2xl:w-[800px] my-10 overflow-auto max-h-[60vh] "> {/*The max-h-[60vh] ensures that the display area will not exceed 60% of the height of the user's screen */}
                <div className="my-5 ">
                    <h2 className="text-center font-extrabold text-xl md:text-4xl 2xl:text-7xl lg:text-5xl underline">Todo List</h2>

                    <div className="m-5 lg:m-10 ">
                        <ul className="text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                            {
                                todoList.map((list, i) => {
                                    return (
                                        <li key={i} className="flex justify-between items-center w-[400px] lg:w-[550px] xl:w-[600px]  ">
                                            {editIndex === i ? (
                                                    <input
                                                        type="text"
                                                        value={editTodo}
                                                        onChange={(e) => setEditTodo(e.target.value)}
                                                        onKeyDown={handleKeyDown}  // Add the keydown event here

                                                        className="bg-white text-black rounded-md w-full"
                                                    />
                                                ) : ( <div className="mb-3 lg:mb-5 inline-block w-[250px] lg:w-[350px] xl:w-[450px] ">{list}</div>)
                                            }
                                           
                                           {/* Delete icon */}
                                            <span className="cursor-pointer"><Image src={"/del.png"} alt="delete" width={25} height={25}  onClick={()=>handleDelTodo(i)}  className="lg:w-10 lg:h-10 xl:w-12 xl:h-12"></Image></span>
                                           
                                           {/* Edit icon */}
                                            {
                                            editIndex == i?(
                                            <span className="cursor-pointer"><Image src={"/edit.png"} alt="delete" width={25} height={25}  onClick={handleSaveEdit}  className="lg:w-10 lg:h-10 xl:w-12 xl:h-12"></Image></span>
                                ):(<span className="cursor-pointer"><Image src={"/edit.png"} alt="delete" width={25} height={25}  onClick={()=>handleEditTodo(i,list)}  className="lg:w-10 lg:h-10 xl:w-12 xl:h-12"></Image></span>)
                            }     
                                </li>

                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>

            </div>


        </div>



    )

}
export default TodoList