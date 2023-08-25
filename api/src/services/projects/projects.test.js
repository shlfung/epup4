import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('projects', () => {
  scenario('returns all projects', async (scenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async () => {
    const result = await createProject({
      input: { title: 'String', reb_num: 'String', description: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.reb_num).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a project', async (scenario) => {
    const original = await project({ id: scenario.project.one.id })
    const result = await updateProject({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a project', async (scenario) => {
    const original = await deleteProject({
      id: scenario.project.one.id,
    })
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
