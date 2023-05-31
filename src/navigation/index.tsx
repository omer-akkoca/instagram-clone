import React from "react"
import AppStack from "./app.stack"
import AuthStack from "./auth.stack"

export const Navigation = (): JSX.Element => {
    
    const user = false ?  { name: "Ömer", surname: "Akkoca", username: "omer_akkoca" } : null

    return(
        user
        ?   <AppStack/>
        :   <AuthStack/>
    )
}