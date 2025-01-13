import { useSelector } from "react-redux";

const Header = () => {
    const name = useSelector((state: any) => {
        return `${state.auth.firstName} ${state.auth.lastName}`
    });

    return (
        <header className="app-header p-0">
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item d-block d-xl-none">
                        <span className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse">
                            <i className="ti ti-menu-2"></i>
                        </span>
                    </li>
                    <li className="nav-item d-none d-xl-block">
                        <div className="px-3">
                            <h6>Welcome, <b><span className="text-primary">{name}</span></b></h6>
                        </div>
                    </li>
                </ul>
                <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                        <h6 className="mt-1 d-block d-xl-none mx-auto">Welcome, <b><span className="text-primary">{name}</span></b></h6>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;