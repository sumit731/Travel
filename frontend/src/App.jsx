import * as React from 'react';
import DestinationCard from './components/DestinationCard';
import PackageCard from './components/PackageCard';
import HomePage from './components/HomePage';
import Advantage from './components/Advantage';
import Feedback from './components/Feedback';
function App() {

  return (
    <>
      <HomePage />
      <DestinationCard />
      <Advantage/>
      <PackageCard />
      <Feedback />
    </>
  )
}

export default App
