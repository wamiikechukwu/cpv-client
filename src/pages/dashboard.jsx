import Header from "../components/libs/header"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { dashboardStyle } from "./styles/style.tailwind"
dashboardStyle

export default function Dashboard({ label }) {

    const { getItem } = useLocalStorage('user')

    const isTokenValid = getItem.token

    return (
        < >
            <Header title={label} user={{ name: 'wami', email: 'ikechukwu.wami' }} />
            <div className={dashboardStyle.container}>
                <h1>This is the Dashboard with title={label} </h1>
            </div>
        </>
    )
}