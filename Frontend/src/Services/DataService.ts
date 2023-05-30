import axios from "axios";
import appConfig from "../Utils/Config";
import DevelopmentsGroup from "../Models/DevelopmentsGroup-model";
import MeetingModel from "../Models/Meeting-model";

class DataService {

     public async getAllDevelopmentGroups():Promise<DevelopmentsGroup[]>{
       const response=await axios.get<DevelopmentsGroup[]>(appConfig.developmentsGroupUrl)
       const developmentsGroup=response.data
       return developmentsGroup
    }

    public async getAllMeetingsByDevelopmentGroup(id:number):Promise<MeetingModel[]>{
        const response=await axios.get<MeetingModel[]>(appConfig.meetingBydevelopmentsGroupUrl+id)
        const meetings=response.data
        return meetings
    }

      
    public async addMeeting(meeting:MeetingModel):Promise<void>{
        await axios.post<MeetingModel>(appConfig.meetingsUrl,meeting)

     }

    public async updateMeeting(meeting:MeetingModel):Promise<void>{
        await axios.put<MeetingModel>(appConfig.meetingsUrl,meeting)
     }

     public async deleteMeeting(meetingId:number):Promise<void>{
        await axios.delete<MeetingModel>(appConfig.meetingsUrl+meetingId)
     }


}

const dataService = new DataService();

export default dataService;