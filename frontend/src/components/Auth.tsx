import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { SignupInput } from "@arujgarg/post-your-articles-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate('/posts')

        } catch (e) {
            //alert use that request failed
            console.log(e)
            alert("error while signing up")
 
        }
        

    }
    
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center w-1/2">
                <div className="font-extrabold text-3xl text-center">   
                    {type === "signup" ? "Create an account" : "Login in to your account"}
                </div>
                <div className="flex justify-center text-slate-500 ">
                    {type === "signup" ? "Already have an account" : "Don't have an account?" }? 
                    <Link className="pl-1 underline" to={type === "signup" ? '/signin' : '/signup '} >
                      {type === "signup" ? "Login" : "Sign up"}
                    </Link>
                </div>
                <div>
                    {type === "signup" ? <LabelledInput label="Username" placeholder="Enter your name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}
                    <LabelledInput label="Email" placeholder="m@example.com" onChange={e => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="password" type="password" placeholder="" onChange={e => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <button onClick={sendRequest} type="button" className=" bg-black text-white border border-gray-300 focus:outline-none hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-4">{type ===  "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    )
}






interface LabelledInputType {
    label: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement> ) => void
    type?: string
}

export const LabelledInput = ({label, placeholder, onChange, type } : LabelledInputType) => {
    return (
        <div>
           <div>
                <label className="block mb-2 text-sm font-semibold mt-4 ">{label}</label>
                <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
            </div>
        </div>
    )
}