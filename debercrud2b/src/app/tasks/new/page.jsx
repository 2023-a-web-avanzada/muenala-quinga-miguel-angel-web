"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import {useRouter, useParams} from 'next/navigation'
//import { method } from 'lodash';

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  });

  const router = useRouter()
  const params = useParams()


  const getTask = async () =>{
    const res = await fetch(`/api/tasks/${params.id}`)
    const data = res.json()
    setNewTask({
      title: data.title,
      description: data.description,
    })
  }

  const createTask = async () => {
    try{
      const res = await fetch('/api/tasks',{
        method: "POST",
        bady: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()

      if(res.status == 200){
        router.push('/')
        router.refresh()
        console.log(data);
      }
    } catch(error){
      console.log(error);
    }
  }

  const updateTask = async () =>{
    try{
      const res = await fetch(`/api/tasks/${params.id}`,{
        method: "PUT",
        body: JSON.stringify(newTask),
        headers:{
          "Content-Type": "application/json",
        }
      })
      const data = await res.json();
      router.push('/')
      router.refresh()
      console.log(data);
    }catch(error){
      console.log(error)
    }
  }

  const hanbleDelete = async () => {
    if(window.confirm("Are you sure you want to delete this Car?")){
      const res = await fetch(`/api/tasks/${params.id}`, {method: "DELETE"},)
      console.log("deleted")
      router.push('/')
      router.refresh()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!params.id){
      await createTask();
    } else{
      updateTask()
      console.log("updating...")
    }
  };

  const handleChange = (e) => setNewTask({ ...newTask, [e.target.name]: e.target.value });

  useEffect(() => {
    if(params.id){
      getTask()
    }
  },[])

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <header className='flex justify-between'>
          <h1 className='font-bolt text-3xl'>{ !params.id? "Create a new Car" : "Update Car"} </h1>
          <button type="button" className='bg-red-500 px-3 py-1 rounded-md' onClick = {hanbleDelete}>Delete</button>
        </header>
        <input type="text" name="title" placeholder="Title" className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4' value ={newTask.title} onChange={handleChange}/>
        <textarea name='description' rows={3} placeholder='Description' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4' value={newTask.description} onChange={handleChange}></textarea>
        <input type="text" name="title" placeholder="Price" className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4' value ={newTask.title} onChange={handleChange}/>
        <button type="submit" className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>{ !params.id? "Create" : "Save"}</button>
        
      </form>
    </div>
  )
}

export default FormPage