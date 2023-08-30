import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProposalsCell from 'src/components/ProposalsCell'

const MyProjectsPage = () => {
  return (
    <>
      <MetaTags title="MyProjects" description="MyProjects page" />

      <ProposalsCell />
    </>
  )
}

export default MyProjectsPage
