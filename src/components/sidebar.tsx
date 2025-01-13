import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authActions from '../redux/auth/actions';

const Sidebar = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        console.log('run');
        dispatch(authActions.logoutSuccess());
    }

    return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <Link to="/" className="text-nowrap logo-img">
                        <img src="/assets/images/logo/dmed-logo-white.png" width="180" alt="" />
                    </Link>
                    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x fs-8"></i>
                    </div>
                </div>
                <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/" aria-expanded="false">
                                <span>
                                    <i className="ti ti-layout-dashboard"></i>
                                </span>
                                <span className="hide-menu">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">AUTH</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="sidebar-link cursor" aria-expanded="false" onClick={onLogout}>
                                <span>
                                    <i className="ti ti-login"></i>
                                </span>
                                <span className="hide-menu">Logout</span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;