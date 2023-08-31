// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import SubmitterLayout from 'src/layouts/SubmitterLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SubmitterLayout}>
        <Route path="/my-projects" page={MyProjectsPage} name="myProjects" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/proposal/{id:Int}" page={ProposalPage} name="proposal" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
        <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
        <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
