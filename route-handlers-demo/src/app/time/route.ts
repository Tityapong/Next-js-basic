import { time } from "console";

export async function GET(){
    return Response.json({
        time:new Date().toLocaleTimeString()
    })
}