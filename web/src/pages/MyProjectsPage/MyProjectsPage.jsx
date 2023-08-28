import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyProjectsPage = () => {
  return (
    <>
      <MetaTags title="MyProjects" description="MyProjects page" />

      <h1>MyProjectsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/MyProjectsPage/MyProjectsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>myProjects</code>, link to me with `
        <Link to={routes.myProjects()}>MyProjects</Link>`
      </p>
    </>
  )
}

export default MyProjectsPage
