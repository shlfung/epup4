import { Link, routes } from '@redwoodjs/router'
const SubmitterLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>EPUP</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.myProjects()}>My Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default SubmitterLayout
