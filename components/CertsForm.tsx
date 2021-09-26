import React, { useState } from "react"
import { db } from "../firebase"

interface Iprops {
    email : string
}

export const CertsForm: React.FC<Iprops> = ({email}) => {

    const [macaroon , setMacaroon] = useState("")
    const [resthost , setRestHost] = useState("")

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        await db.collection("users").doc(email).update({
            resthost : resthost,
            macaroon : macaroon,
        });
        setMacaroon("");
        setRestHost("")
    }
    return (
        
                <div className="flex items-center justify-center mt-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-90">
            Please the necessary fields to use the platform
          </h2>
        
        </div>
        <form className="mt-8 space-y-6" onSubmit = {handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="resthost" className="sr-only">
                Rest Host
              </label>
              <input
                id="rest-host"
                name="resthost"
                type="text"
                value = {resthost}
                onChange = {(e) => setRestHost(e.currentTarget.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Rest Host"
              />
            </div>
            <div>
              <label htmlFor="macaroon" className="sr-only">
                Password
              </label>
              <input
                id="macaroon"
                name="macaroon"
                type="text"
                value = {macaroon}
                onChange = {(e) => setMacaroon(e.currentTarget.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Macaroon"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Credentials
            </button>
          </div>
        </form>
      </div>
    </div>
        
    )
}
