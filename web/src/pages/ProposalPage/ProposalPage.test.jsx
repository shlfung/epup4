import { render } from '@redwoodjs/testing/web'

import ProposalPage from './ProposalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProposalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProposalPage />)
    }).not.toThrow()
  })
})
