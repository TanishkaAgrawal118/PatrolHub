import axios from "axios";
export function signup(data)
{
    return axios.post("http://localhost:5800/register",data)
}
export function verifyotp(data)
{
    return  axios.post("http://localhost:5800/register/verify",data)
}
export function signin(data)
{
    return axios.post("http://localhost:5800/login",data)
}
export function savecomplaints(data)
{
    return axios.post("http://localhost:5800/vehiclecomplaints",data)
}
export function updateComplaints(id,obj)
{
    return axios.put(`http://localhost:5800/update/compaintsvehicle/${id}/${obj}`)
}
export function saveKidnapingReport(data)
{
    return axios.post("http://localhost:5800/compalint/kidnapingreport",data)
}
export function saveGenralTheftReport(data)
{
    return axios.post("http://localhost:5800/complaint/generaltheft",data)
}
export function saveCharcterInfo(data)
{
       return axios.post(`http://localhost:5800/save/charcterverify`,data)
}
export function saveAddress(data)
{
    return axios.post("http://localhost:5800/save/address",data)
}
export function saveWitness(data)
{
      return axios.post("http://localhost:5800/save/witness",data)
}
export function savePgtenant(data)
{
    return axios.post("http://localhost:5800/save/pgverify",data)
}
export function updateuserKidnapingReport(id,obj)
{
    return axios.put(`http://localhost:5800/complaint/user/kdinapingreport/${id}/${obj}`)
}
export async function updatePoliceStationTOuser(id,obj)
{
    return axios.put(`http://localhost:5800/update/policestation/user/${id}/${obj}`)
}

export function updateuserGeneralThiftFir(id,obj)
{
    return axios.put(`http://localhost:5800/complaint/user/generaltheft/${id}/${obj}`)
}
export function updatePoliceStationToCharcter(id,obj)
{
    return axios.put(`http://localhost:5800/update/policestation/characterverify/${id}/${obj}`)
}
export function updateCharcterToAddress(id,obj)
{
    return axios.put(`http://localhost:5800/update/charcter/address/${id}/${obj}`)
}

export function updateCharcterToWitnes(id,obj)
{
    return axios.put(`http://localhost:5800/update/charcter/witness/${id}/${obj}`)
}
export function updatePgPoliceStation(id,obj)
{
    return axios.put(`http://localhost:5800/update/policestation/pgverify/${id}/${obj}`)
}
export function getDepartementData()
{
    return axios.get("http://localhost:5800/");
}
