import { user } from '../db/sampledata'

//the function in this folder will query to get data from database
//for now, the data {user} is stored locally and being imported in this file
export function getAllUsers() {
    return user
}