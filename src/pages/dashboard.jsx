import { useLocalStorage } from "../hooks/useLocalStorage"

export default function Dashboard(){

    const {getItem} = useLocalStorage('user')

    const isTokenValid = getItem.token

    return(
        <>
        <main>
                
        </main>
        <h1>This is the Dashboard</h1>
        </>

    )
}