
import {Navigate} from "react-router-dom"
import {jwrDecode, jwtDecode} from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from "react"

function protectedRoute({children}){
    const [isAuthorised, setIsAuthorised] = useState(null)

    useEffect (() =>{
        auth().catch(() => setIsAuthorised(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)

        try{
            const response = await api.post("/api/token/refresh/", {
                refresh: refreshToken
            }); /** here a response is posted to the URL with the refresh token so as to get another access token */
            if(response === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                setIsAuthorised(true)
            }else{
                setIsAuthorised(false)
            }
        }
        catch (error){
            console.log(error)
            setIsAuthorised(false)
        }
    }

    const auth = async () => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN)
        if(!accessToken){
            setIsAuthorised(false)
            return
        }
        const decodedToken = jwtDecode(accessToken)
        const decodedTokenExp = decodedToken.exp
        const timeNow = Date.now() / 1000 /** div by 1000 to get time in seconds and not miliseconds */

        if(decodedTokenExp < timeNow){/** meaning that the token has expired */
            await refreshToken() /** calling the refresToken to refresh the token */
        }else {
            setIsAuthorised(true)
        }
    }
    if(isAuthorised === null){
        return <div>loading... </div>
    }
    return isAuthorised ? children : <Navigate to="/login" /> /** if user is logged in the user is returned as children
                                                                 else user is navigated to the login page */        
}

export default protectedRoute
