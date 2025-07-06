import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  Array.prototype.groupBy = function(callback) {
      if(!Array.isArray(this)|| this.length === 0) return{};
      return this.reduce((groups, item) => {
        const key = (item !== null && item !== undefined) ?
        callback(item) : null;
        const groupKey = key !== undefined ? key : null;
        if(!groups[groupKey]){
          groups[groupKey] = [];
        }groups[groupKey].push(item)
        return groups;
      },{});
      
    };

    const numbers = [1,2,3,4,5,6,7,8,9]
    const groupByEvenOdd = numbers.groupBy(x => x% 2 == 0?'Even':"Odd")
  

  return (
    <div>
      <h1>Group By Example</h1>
      <pre>{JSON.stringify(groupByEvenOdd , null , 2)}</pre>
    </div>
    
  );
}
export default App
