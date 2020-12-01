import React from 'react'

import Profile from './Profile'
import Statistics from './Statistic'
import FriendList from './FriendList'
import TransactionHistory from "./Transactions";

import statisticalData from '../data/statistical-data.json'
import userData from '../data/user.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

const App = () => {
    return (
      <>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </>
    ); 
}

export default App