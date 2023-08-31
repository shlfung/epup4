import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import {Link, routes, useMatch} from '@redwoodjs/router'

const ProjectDetailsLink = ({ to, ...rest }) => {
  const matchInfo = useMatch(to)

  return (
    <Button size="small" as={Link} to={to} isActive={matchInfo.match}>
      Project Details
    </Button>
  )
}


const Proposal = ({ proposal }) => {
  return (
    <proposal>

<Card key={proposal.id} sx={{ minWidth: 275 }} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
              {proposal.title}
            </Typography>
          </CardContent>
          <CardActions>
            <ProjectDetailsLink to={routes.proposal({id: proposal.id})} />
          </CardActions>
          <Divider />
        </Card>

    </proposal>

  )
}

export default Proposal
