import axiosService from "../API/axiosServices";


//add resume api

export const addResumeAPI=async(reqBody)=>{
    return await axiosService('POST','/resume',reqBody)
}

export const viewResumeAPI=async(id)=>{

    return await axiosService('GET',`/resume/${id}`,{})
}

export const editResumeAPI=async(id,reqBody)=>{

    return await axiosService('PUT',`/resume/${id}`,reqBody)
}

export const downloadResumeAPI=async(reqBody)=>{

    return await axiosService('POST',`/downloads`,reqBody)
}

export const viewDownloadsAPI=async()=>{

    return await axiosService('GET',`/downloads`)
}

export const uploadCloudinary=async(imageData)=>{
    const formData=new FormData()
    formData.append(
        "upload_preset",
        "resume-builder"
    )
    const response=await fetch('https://api.cloudinary.com/v1_1/thpj70qi/image/upload',{
        method:'POST',
        body:formData
    })
    return response.json()
}

export const deleteDownloadsAPI=async(id)=>{ 
    return await axiosService('DELETE',`/downloads/${id}`,{})   
}

export const viewAllResumesAPI=async()=>{ 
    return await axiosService('GET',`/resume`,{})   
}

export const deleteSavedAPI=async(id)=>{ 
    return await axiosService('DELETE',`/resume/${id}`,{})   
}