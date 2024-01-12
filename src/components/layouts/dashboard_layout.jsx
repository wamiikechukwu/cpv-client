import SideBar from '../libs/side_bar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <>
            <div>
                <SideBar items={[
                    { label: 'Home', icon: 'home', link: '/home' },
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