import SideBar from '../libs/side_bar'
import { Outlet } from 'react-router-dom'
import { sideBarStyles } from '../libs/styles/styles.tailwind'
import { FiAirplay } from "react-icons/fi";
// https://react-icons.github.io/react-icons/
const DashboardLayout = () => {
    return (
        <>
            <div
                className={sideBarStyles.navlinkContainer}>
                <SideBar items={[
                    { label: 'Home' , icon: <FiAirplay className={sideBarStyles.navIcon}/>, link: '/home' },
                    { label: 'Deploy GPUs', icon: 'activity', link: '/deploy_gpus' },
                    { label: 'Servers', icon: 'server', link: '/servers' },
                    { label: 'Account', icon: 'user', link: '/account', },
                    { label: 'Help', icon: 'help-circle', link: '/help' },
                    { label: 'Sign Out', icon: 'log-out', link: 'sign-out' }
                ]} />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout