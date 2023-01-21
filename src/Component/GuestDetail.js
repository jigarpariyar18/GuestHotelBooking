import React, { useState } from 'react'
import Admin from './Admin'
function GuestDetail() {
    const [data , setData]= useState({
        id:"",
        Name:'',
        email:'',
        phonenumber:'',
        noofadults:'',
        noofchildren:'',
        checkindate:'',
        checkoutdate:'',
        selectRoom:''
      })
      
      function clickhandler(event){
          const {name,value}=event.target
          setData((prev)=>{
            return {
              ...prev,[name]:value
            }
          })
      }
      const [storedata,setStoredata]=useState([])
      function submithandler(event){
           event.preventDefault()
           const validation =()=>{
            for(const property in data){
              if(data[property] == ''){ 
                 return false
              }else return true
             }
           }
           validation() ? setStoredata((prev)=>[...prev,data]) : alert(`please enter the value of all data`)
            setData({
            Name:'',
            email:'',
            phonenumber:'',
            noofadults:'',
            noofchildren:'',
            checkindate:'',
            checkoutdate:'',
            selectRoom:''
           })

      }
    console.log(storedata)
  return (
    <div>
       <hr></hr>
        <form onSubmit={submithandler}>
        <div>
        <label>Name</label>  
        <input type='text'name='Name' placeholder='Name' value={data.Name} onChange={clickhandler}/>
        </div>
        <div>
        <label >email</label>
        <input type='email'name='email' placeholder='Email' value={data.email}  onChange={clickhandler}/>
        </div>
        <div>
        <label>Phone-Number</label>
        <input type='text'name='phonenumber' placeholder='phone number' value={data.phonenumber}  onChange={clickhandler}/>
        </div>
        <div>
        <label>NO of adults</label>
        <input type='number'name='noofadults' placeholder='no of adults' value={data.noofadults}  onChange={clickhandler}/>
        </div>
        <div>
        <label >No of children </label>
        <input type='number'name='noofchildren' placeholder='no of children' value={data.noofchildren}  onChange={clickhandler}/>
        </div>
        <div>
        <label>Check-in date</label>
        <input type='date'name='checkindate' placeholder='check in date' value={data.checkindate}  onChange={clickhandler}/>
        </div>
        <div>
        <label>Check-out date</label>
        <input type='date'name='checkoutdate' placeholder='check out date' value={data.checkoutdate}  onChange={clickhandler}/>
        </div>
        <div>
        <div>
        <label>Select Room</label>
        <select id="SelectRooms" name='SelectRooms'  value={data.selectRoom}  onChange={(e)=>setData({...data,selectRoom:e.target.value})}>
            <option  value='normalroom'>Normal Rooms</option>
            <option value='acroom'>Ac Room</option>
            <option value='deluxroom'>Delux Room</option>
            <option value='superdeluxeroom'>Super Delux Room</option>
            <option value='Suit'>Suit</option>
        </select>
            </div>    
       <hr></hr>
        <button type = 'submit'>Submit Details</button>
        </div>
      </form>
      <hr></hr>
      <Admin storedata={storedata}/>
    </div>
  )
}

export default GuestDetail