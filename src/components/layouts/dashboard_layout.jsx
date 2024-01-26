import SideBar from '../libs/side_bar'
import { Outlet } from 'react-router-dom'
import { sideBarStyles } from '../libs/styles/styles.tailwind'



// https://react-icons.github.io/react-icons/
const DashboardLayout = ({ sidebarItems }) => {
    return (
        <>
            <div
                className={sideBarStyles.navlinkContainer}>
                <SideBar items={sidebarItems} />
            </div>

            <main>
                <Outlet />
            </main>

        </>
    )
}

export default DashboardLayout