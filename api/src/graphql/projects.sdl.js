export const schema = gql`
  type Project {
    id: Int!
    title: String!
    reb_num: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    title: String!
    reb_num: String!
    description: String!
  }

  input UpdateProjectInput {
    title: String
    reb_num: String
    description: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
