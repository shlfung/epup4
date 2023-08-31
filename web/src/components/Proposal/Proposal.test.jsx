import { render } from '@redwoodjs/testing/web'

import Proposal from './Proposal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Proposal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Proposal />)
    }).not.toThrow()
  })
})
