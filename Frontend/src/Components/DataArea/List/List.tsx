import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import DevelopmentsGroup from "../../../Models/DevelopmentsGroup-model";
import dataService from "../../../Services/DataService";
import MeetingModel from "../../../Models/Meeting-model";
import { error } from "console";
import MeetingCard from "../MeetingCard/MeetingCard";

function List(): JSX.Element {

const [developmentsGroups,setDevelopmentsGroups]=useState<DevelopmentsGroup[]>([])
const[meetings,setMeetings]=useState<MeetingModel[]>([])
useEffect(()=>{
  dataService.getAllDevelopmentGroups()
  .then(developmentsGroups=>setDevelopmentsGroups(developmentsGroups))
  .catch(err=>alert(err.message))

})

async function displayMeetings(args:ChangeEvent<HTMLSelectElement>){
   const value=+args.target.value
   dataService.getAllMeetingsByDevelopmentGroup(value)
   .then(meetings=>setMeetings(meetings))
   .catch(error=>alert(error.message))
}

    return (
        <div className="List">
			<label >Select Developments Group:</label>
            <select defaultValue="" onChange={displayMeetings}>
                <option disabled value="">select..</option>
               
                { developmentsGroups&& developmentsGroups.map(d=>
                    <option key={d.developmentsGroupId} value={d.developmentsGroupId}>{d.developmentsGroupName}</option>
                    )}
            </select>
            <br />
            {meetings.map(m=><MeetingCard key={m.meetingId} meeting={m}/>)}
        </div>
    );
}

export default List;
