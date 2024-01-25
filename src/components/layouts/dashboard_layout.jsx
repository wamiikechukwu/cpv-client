import SideBar from '../libs/side_bar'
import { Outlet } from 'react-router-dom'
import { sideBarStyles } from '../libs/styles/styles.tailwind'
import { FiAirplay } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { FiLoader } from "react-icons/fi";
import { FiKey } from "react-icons/fi";


// https://react-icons.github.io/react-icons/
const DashboardLayout = () => {
    return (
        <>
            <div
                className={sideBarStyles.navlinkContainer}>
                <SideBar items={[
                    { label: 'Home', icon: <FiAirplay className={sideBarStyles.navIcon} />, link: '/home' },
                    { label: 'Deploy GPUs', icon: <FiCommand className={sideBarStyles.navIcon} />, link: '/deploy_gpus' },
                    { label: 'Servers', icon: <FiFeather className={sideBarStyles.navIcon} />, link: '/servers' },
                    { label: 'Account', icon: <FiCpu className={sideBarStyles.navIcon} />, link: '/account', },
                    { label: 'Help', icon: <FiLoader className={sideBarStyles.navIcon} />, link: '/help' },
                    { label: 'Sign Out', icon: <FiKey className={sideBarStyles.navIcon} />, link: 'sign-out' }
                ]} />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout