import { render } from '@redwoodjs/testing/web'

import SubmitterLayout from './SubmitterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SubmitterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitterLayout />)
    }).not.toThrow()
  })
})
