import './Home.css'
import { Link } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";


export function Home() {
	return (
		<div className='home-container'>
			<aside className='sidebar'>
				<h3 className='sidebar-title'>Balance & Harmony 3</h3>
				<hr/>
				    <div className="sidebar-section">
          <NavLink to="/home/module">Module</NavLink>
        </div>

        <div className="sidebar-section">
          <NavLink to="/home/account">Account</NavLink>
        </div>
			</aside>
			<main className='home-content'><div className='content-inner'>Module</div></main>
		</div>
	)
}

export default Home
