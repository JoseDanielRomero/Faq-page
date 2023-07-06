import { createContext, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';

export const DatabaseContext = createContext([])
export const ActualFaqContext = createContext('')

function App() {

  const [database, setDatabase] = useState([
    {
      "id": 1,
      "question": "How many team members can I invite?",
      "answer": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      "isSelected": false
    },
    {
      "id": 2,
      "question": "What is the maximum file upload size?",
      "answer": "No more than 2GB. All files in your account must fit your allotted storage space.",
      "isSelected": false
    },
    {
      "id": 3,
      "question": "How do I reset my password?",
      "answer": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      "isSelected": false
    },
    {
      "id": 4,
      "question": "Can I cancel my subscription?",
      "answer": "Yes! Send us a message and we'll process your request no questions asked.",
      "isSelected": false
    },
    {
      "id": 5,
      "question": "Do you provide additional support?",
      "answer": "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      "isSelected": false
    }
  ])

  const [selectedFaq, setSelectedFaq] = useState('')

  return (
    <DatabaseContext.Provider value={database}>
        <ActualFaqContext.Provider value={selectedFaq}>
          <div className="App">
            <MainContent />
          </div>
        </ActualFaqContext.Provider>
      </DatabaseContext.Provider>
  );
}

export default App;
