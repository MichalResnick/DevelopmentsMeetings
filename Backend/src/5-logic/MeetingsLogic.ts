import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import DevelopmentsGroup from "../4-models/developmentsGroup-model";
import MeetingModel from "../4-models/meeting-model";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";


async function getAllDevelopmentGroups():Promise<DevelopmentsGroup[]>{
    const sql=`SELECT * FROM developmentsgroup`
    const developmentsgroup=await dal.execute(sql)
    return developmentsgroup
}

async function getAllMeetingsByDevelopmentGroup(id:number):Promise<MeetingModel[]>{
    const sql=`
    SELECT M.*,D.developmentsGroupName
    FROM meetings AS M JOIN developmentsgroup AS D
    ON M.developmentsGroupId=D.developmentsGroupId
    WHERE M.developmentsGroupId='?'`

    const meetings=await dal.execute(sql,[id])
    return meetings
}

async function addMeeting(meeting:MeetingModel):Promise<MeetingModel>{

    const err=meeting.validate()
    if(err)throw new ValidationErrorModel(err)

    const sql=`
    INSERT INTO meetings VALUES(
        DEFAULT,
        ?,
        ?,
        ?,
        ?,
        ?
    )`

    const values=[meeting.developmentsGroupId,meeting.beginningTime,meeting.endTime,meeting.description,meeting.meetingRoom]

    const info:OkPacket=await dal.execute(sql,values)
    meeting.meetingId=info.insertId
    return meeting
}

async function updateMeeting(meeting:MeetingModel):Promise<MeetingModel>{

    const error=meeting.validate()
    if (error) throw new ValidationErrorModel(error)

    const sql=`
    UPDATE meetings SET
    developmentsGroupId=?,
    beginningTime=?,
    endTime=?,
    description=?,
    meetingRoom=?
    WHERE meetingId =? `;

    const values=[meeting.developmentsGroupId,meeting.beginningTime,meeting.endTime,meeting.description,meeting.meetingRoom,meeting.meetingId]
    const info:OkPacket=await dal.execute(sql,values)
    if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(meeting.meetingId)

    return meeting

}

async function deleteMeeting(meetingId:number):Promise<void>{
    const sql=`
    DELETE FROM meetings
    WHERE meetingId=?
    `
    const info:OkPacket=await dal.execute(sql,[meetingId])
    if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(meetingId)

}



export default {
    getAllDevelopmentGroups,
    getAllMeetingsByDevelopmentGroup,
    addMeeting,
    deleteMeeting,
    updateMeeting
};
