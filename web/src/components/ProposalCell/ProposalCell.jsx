export const QUERY = gql`
  query FindProposalQuery($id: Int!) {
    proposal: proposal(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ proposal }) => {
  return <div>{JSON.stringify(proposal)}</div>
}
