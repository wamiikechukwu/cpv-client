import {NavLink} from 'react-router-dom'
import { sideBarStyles } from './styles/styles.tailwind'

/**
 *
 * @param arrays of items
 * @returns
 */
 const SideBar = ({ items }) => {
    return (
        <nav className={sideBarStyles.sideBar}>
            {/* Button */}
            <button>

            </button>
            {/* Logo */}
            <section >
                {items.map(item => {

                    if (item.link) {
                        return (
                            <NavLink
                                key={items.label}
                                to={item.link}
                            >

                                {/* Label */}
                                {item.label &&
                                    <span>{item.label}</span>}
                            </NavLink>
                        )
                    }

                })}
            </section>
        </nav>
    )
}

export default SideBar