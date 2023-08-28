import { render } from '@redwoodjs/testing/web'

import MyProjectsPage from './MyProjectsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyProjectsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyProjectsPage />)
    }).not.toThrow()
  })
})
