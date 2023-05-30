import dal from "../2-utils/dal";
import DevelopmentsGroup from "../4-models/developmentsGroup-model";
import MeetingModel from "../4-models/meeting-model";


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



export default {
    getAllDevelopmentGroups,
    getAllMeetingsByDevelopmentGroup
};
