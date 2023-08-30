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

export const Success = ({ proposals }) => {
  return (
    <ul>
      {proposals.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
