import {useState, useEffect} from 'react';

export default function LoginSalvo(){

const username = 1
const password = 2

const [valorun, mudarVlun] = useState("")
const [valorpw, mudarVlpw] = useState("")

useEffect(() => {
    
    mudarVlun(sessionStorage.getItem(username))

    mudarVlpw(sessionStorage.getItem(password))


}, [])

useEffect(() => {

    sessionStorage.setItem(username, valorun)
    sessionStorage.setItem(password, valorpw)

}, [valorun, valorpw])

return;

}