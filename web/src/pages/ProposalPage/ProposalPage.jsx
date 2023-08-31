import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProposalCell from 'src/components/ProposalCell'

const ProposalPage = ({id}) => {
  return (
    <>
      <MetaTags title="Proposal" description="Proposal page" />

      <ProposalCell id={id} />

    </>
  )
}

export default ProposalPage
