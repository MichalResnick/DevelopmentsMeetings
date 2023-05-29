import dal from "../2-utils/dal";
import DevelopmentsGroup from "../4-models/developmentsGroup-model";
import MeetingModel from "../4-models/meeting-model";


async function getAllDevelopmentGroups():Promise<DevelopmentsGroup[]>{
    const sql=`SELECT * FROM developmentsgroup`
    const developmentsgroup=await dal.execute(sql)
    return developmentsgroup
}

async function getAllMeetingsByDevelopmentGroup():Promise<MeetingModel[]>{
    const sql=`SELECT * FROM developmentsgroup`
    
    const developmentsgroup=await dal.execute(sql)
    return developmentsgroup
}



export default {
    getAllDevelopmentGroups
};
