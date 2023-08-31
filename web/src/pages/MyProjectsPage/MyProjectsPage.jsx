import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Box } from '@mui/material'

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
