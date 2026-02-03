'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Home = () => {
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path ? 'active' : ''

    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid py-2 border-bottom d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-decoration-none text-body pe-3" href="#!"><i
                                        className="bi bi-telephone me-2"></i>+012
                                    345 6789</a>
                                <span className="text-body">|</span>
                                <a className="text-decoration-none text-body px-3" href="#!"><i
                                        className="bi bi-envelope me-2"></i>info@example.com</a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-body px-2" href="#!">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-body px-2" href="#!">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-body px-2" href="#!">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-body px-2" href="#!">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-body ps-2" href="#!">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            
            {/* <!-- Navbar Start --> */}
            <div className="container-fluid sticky-top bg-white shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                        <Link href="/" className="navbar-brand">
                            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>CareYou</h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <Link href="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
                                <Link href="/about" className={`nav-item nav-link ${isActive('/about')}`}>About</Link>
                                {/* <Link href="/service" className={`nav-item nav-link ${isActive('/service')}`}>Service</Link>
                                <Link href="/price" className={`nav-item nav-link ${isActive('/price')}`}>Pricing</Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <Link href="/blog" className="dropdown-item">Blog Grid</Link>
                                        <Link href="/blog-detail" className="dropdown-item">Blog Detail</Link>
                                        <Link href="/team" className="dropdown-item">The Team</Link>
                                        <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                                        <Link href="/appointment" className="dropdown-item">Appointment</Link>
                                        <Link href="/search" className="dropdown-item">Search</Link>
                                    </div>
                                </div>
                                <Link href="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact</Link> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}


        </>
    );
}
export default Home;