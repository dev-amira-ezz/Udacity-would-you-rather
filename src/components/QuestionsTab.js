import React from 'react'
import { Tab } from 'semantic-ui-react'
import Unanswered from './Unanswered'
import Answered from './Answered'

const panes = [
  { menuItem: 'Unanswered Questions',
   render: () => 
   <div>
   <Unanswered />
   </div>
   },
  { menuItem: 'Answered Questions', 
  render: () =>
  <div>
  <Answered />
  </div>
 },
]


const QuestionsTab = () => <div className="tab"><Tab panes={panes} /></div>

export default QuestionsTab