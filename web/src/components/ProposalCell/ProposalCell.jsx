import Proposal from "src/components/Proposal"

export const QUERY = gql`
  query FindProposalQuery($id: Int!) {
    proposal: project(id: $id) {
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

export const Success = ({ proposal }) => {
  return <Proposal proposal={proposal} />
}
