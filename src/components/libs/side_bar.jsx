import { NavLink } from 'react-router-dom'
import { sideBarStyles } from './styles/styles.tailwind'

/**
 *
 * @param arrays of items
 * @returns
 */
const SideBar = ({ items }) => {
    return (
        <nav className={sideBarStyles.sidebar}>
            {/* Button */}
            <button>

            </button>
            {/* Logo */}
            <section className={sideBarStyles.section}>
                {items.map(item => {

                    if (item.link) {
                        return (
                            <NavLink
                                key={items.label}
                                to={item.link}
                                className={sideBarStyles.navlink}
                            >
                                {item.label &&
                                    <div>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                }
                            </NavLink>
                        )
                    }

                })}
            </section>
        </nav>
    )
}

export default SideBar