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


            <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
             Project Title: {proposal.title}
            </Typography>
            <br></br>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
             REB Number: {proposal.reb_num}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
             Description: {proposal.description}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
             Created At: {proposal.createdAt}
            </Typography>


    </proposal>

  )
}

export default Proposal
