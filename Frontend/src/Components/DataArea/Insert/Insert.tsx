import { useState, useEffect, ChangeEvent } from "react";
import DevelopmentsGroup from "../../../Models/DevelopmentsGroup-model";
import MeetingModel from "../../../Models/Meeting-model";
import dataService from "../../../Services/DataService";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./Insert.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Insert(): JSX.Element {
    
const [developmentsGroups,setDevelopmentsGroups]=useState<DevelopmentsGroup[]>([])
const {register,handleSubmit}=useForm<MeetingModel>()
const navigate=useNavigate()



useEffect(()=>{
  dataService.getAllDevelopmentGroups()
  .then(developmentsGroups=>setDevelopmentsGroups(developmentsGroups))
  .catch(err=>alert(err.message))

})

async function send(meeting:MeetingModel){
   try {
    await dataService.addMeeting(meeting)
    alert("You add meeting")
    navigate("/developments-group-list")
      
   } catch (error:any) {
    alert(error.message)
   }
}



    return (
        <div className="Insert">

            <form onSubmit={handleSubmit(send)}>
			<label >Select Developments Group:</label>
            <select defaultValue="" {...register("developmentsGroupId")}>
                <option disabled value="">select..</option>  
                { developmentsGroups&& developmentsGroups.map(d=>
                    <option key={d.developmentsGroupId} value={d.developmentsGroupId}>{d.developmentsGroupName}</option>
                    )}
            </select>
            <br />
            <label>Begining Time:</label>
            <input type="datetime-local" {...register("beginningTime")} required />

            <label>End Time:</label>
            <input type="datetime-local" {...register("endTime")} required/>

            <label>Description:</label>
            <input type="text"{...register("description")} required />

            <label>MeetingRoom:</label>
            <input type="text" {...register("meetingRoom")} required/>

            <button type="submit">Add</button>

            </form>
        
        </div>
    );
}


export default Insert;
function register(arg0: string): JSX.IntrinsicAttributes & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> {
    throw new Error("Function not implemented.");
}

