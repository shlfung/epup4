import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { Link, routes, useMatch } from '@redwoodjs/router'

export const QUERY = gql`
  query ProposalsQuery {
    proposals: projects {
      id
      title
      reb_num
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const ProjectDetailsLink = ({ to, ...rest }) => {
  const matchInfo = useMatch(to)

  return (
    <Button size="small" as={Link} to={to} isActive={matchInfo.match}>
      Project Details
    </Button>
  )
}

export const Success = ({ proposals }) => {
  return (
    <>
      {proposals.map((proposal) => (
        <Card key={proposal.id} sx={{ minWidth: 275 }} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
              {proposal.title}
            </Typography>
          </CardContent>
          <CardActions>
            <ProjectDetailsLink to={routes.proposal()} />
          </CardActions>
          <Divider />
        </Card>
      ))}
    </>
  )
}
