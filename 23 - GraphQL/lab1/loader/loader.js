import DataLoader from "dataloader";
import { Company } from "./../database/model.js";




const companyLoader = new DataLoader(async (companyIds)=>{

    const companies = await Company.find({_id:{$in:companyIds}});
    return companyIds.map(id => companies.find(company => company._id.toString() === id.toString()));
})


export default companyLoader;