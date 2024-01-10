import SideBar from '../../pages/side_bar'

const DashboardLayout = () => {
    return (
        <main>
            <h1>This is the dashboard</h1>
            <SideBar  items={[
          { label: 'Home', icon: 'home', link: '/home' },
          { label: 'Deploy GPUs', icon: 'activity', link: '/deploy_gpus' },
          { label: 'Servers', icon: 'server', link: '/servers' },
          { label: 'Account', icon: 'user', link: '/account', },
          { label: 'Help', icon: 'help-circle', link: '/help' },
          { label: 'Sign Out', icon: 'log-out', link: 'sign-out' }
        ]}/>
        </main>
    )
}

export  default DashboardLayout