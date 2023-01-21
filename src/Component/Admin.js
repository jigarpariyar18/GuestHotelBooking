import React, { useState } from 'react'
import { CSVLink, CSVDownload } from "react-csv";


function Admin({storedata}) {
    console.log(storedata)
   const [filtervalue , setFiltervalue] = useState("")
   const [checkindate,setCheckindate] = useState("")
   const [checkoutdate,setCheckoutdate] = useState("")
   const [action,setAction]=useState("fullist")
   const filterRoomResult = storedata.filter(a=>a.selectRoom === `${filtervalue}`)
   const filtercheckinResult= storedata.filter(a=>a.checkindate ===`${checkindate.checkindate}`)
   const filtercheckoutResult= storedata.filter(a=>a.checkoutdate ===`${checkoutdate.checkoutdate}`)
   console.log(filterRoomResult)
   console.log(filtercheckinResult)
   console.log(filtercheckoutResult)


   
   function Showdata(){
    switch(action){
       case 'FilterbyRoom':
           return (
               <div>{filterRoomResult.map(a=>{
                   return( 
                       <div>
                           <ul>{a.Name} Guest Details </ul>
                       <li key={a.id}>Name :-{a.Name}</li>
                       <li>Phone number :{a.phonenumber}</li>
                       <li>Email :{a.email}</li>
                       <li>No of adults : {a.noofadults}</li>
                       <li>No of children : {a.noofchildren}</li>
                       <li>Check-in date :{a.checkindate}</li>
                       <li>Check-out date :{a.checkoutdate}</li>
                       <li>Room type : {a.selectRoom}</li>
                       </div>
                           )
               })}</div>
           )
           case 'Filterbycheckin':
               return (
                   <div>{filtercheckinResult.map(a=>{
                       return( 
                           <div>
                               <ul>{a.Name} Guest Details </ul>
                           <li key={a.id}>Name :-{a.Name}</li>
                           <li>Phone number :{a.phonenumber}</li>
                           <li>Email :{a.email}</li>
                           <li>No of adults : {a.noofadults}</li>
                           <li>No of children : {a.noofchildren}</li>
                           <li>Check-in date :{a.checkindate}</li>
                           <li>Check-out date :{a.checkoutdate}</li>
                           <li>Room type : {a.selectRoom}</li>
                           </div>
                               )
                   })}</div>
               )
               case 'Filterbycheckout':
                   return (<div>
                       {filtercheckoutResult.map(a=>{
                            return( 
                               <div>
                                   <ul>{a.Name} Guest Details </ul>
                               <li key={a.id}>Name :-{a.Name}</li>
                               <li>Phone number :{a.phonenumber}</li>
                               <li>Email :{a.email}</li>
                               <li>No of adults : {a.noofadults}</li>
                               <li>No of children : {a.noofchildren}</li>
                               <li>Check-in date :{a.checkindate}</li>
                               <li>Check-out date :{a.checkoutdate}</li>
                               <li>Room type : {a.selectRoom}</li>
                               </div>
                                   )
                       })}
                   </div>)
                    case "fullist":
                       return (<div>
                           {storedata.map(a=>{
                                return( 
                                   <div>
                                       <ul>{a.Name} Guest Details </ul>
                                   <li key={a.id}>Name :-{a.Name}</li>
                                   <li>Phone number :{a.phonenumber}</li>
                                   <li>Email :{a.email}</li>
                                   <li>No of adults : {a.noofadults}</li>
                                   <li>No of children : {a.noofchildren}</li>
                                   <li>Check-in date :{a.checkindate}</li>
                                   <li>Check-out date :{a.checkoutdate}</li>
                                   <li>Room type : {a.selectRoom}</li>
                                   </div>
                                       )
                           })}
                       </div>)
    }
}

   function clickhandlerRoom(){
        setAction('FilterbyRoom')
   }
    
   function clickhandlercheckin(){
    setAction('Filterbycheckin')
   }
   function clickhandlercheckout(){
    setAction('Filterbycheckout')
   }
   const csvData=storedata
 
  return (
    <div>

        <label>Filter by Rooms:</label>
        <select id="filter" name='filter'  value={filtervalue}  onChange={(e)=>setFiltervalue(e.target.value)} onClick={clickhandlerRoom}>
            <option  value='normalroom'>Normal Rooms</option>
            <option value='acroom'>Ac Room</option>
            <option value='deluxroom'>Delux Room</option>
            <option value='superdeluxeroom'>Super Delux Room</option>
            <option value='Suit'>Suit</option>
              </select>

              <label>Filter by dates:</label>
              <label>Check-in</label>
              <input type='date' placeholder='check out date' value={checkindate}  onChange={(e)=>setCheckindate({checkindate:e.target.value})} onClick={clickhandlercheckin}/>
              <label>Check-out</label>
              <input type='date' placeholder='check out date' value={checkoutdate}  onChange={(e)=>setCheckoutdate({checkoutdate:e.target.value})} onClick={clickhandlercheckout}/>
              

        <h1>List of guest </h1>
        {
        storedata.map(a=>{
            return( 
            <div>
                <ul>{a.Name} Details </ul>
            <li key={a.id}>Name :-{a.Name}</li>
            <li>Phone number :{a.phonenumber}</li>
            <li>Email :{a.email}</li>
            <li>No of adults : {a.noofadults}</li>
            <li>No of children : {a.noofchildren}</li>
            <li>Check-in date :{a.checkindate}</li>
            <li>Check-out date :{a.checkoutdate}</li>
            <li>Room type : {a.selectRoom}</li>
            </div>
                )
        })
     }
     <div>
        <h3>Filtered Data</h3>
        {Showdata()}
     </div>
     <h2>click the below link to Download the list of guest in excel format </h2>
     <div><CSVLink data={csvData}>Download me</CSVLink></div>
     </div>
  )
}

export default Admin