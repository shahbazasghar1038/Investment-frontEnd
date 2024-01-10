import React from "react";

export default function Dashborad() {

  const names: string[] = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eva',
    'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
    'Kelly', 'Liam', 'Mia', 'Noah', 'Olivia',
    'Pam', 'Quinn', 'Ryan', 'Sophia', 'Thomas',
    'Uma', 'Victor', 'Wendy', 'Xander', 'Yara',
    'Zane', 'Aria', 'Benjamin', 'Cora', 'Dylan',
    'Emily', 'Felix', 'Gemma', 'Hudson', 'Isabel',
    'Jake', 'Kylie', 'Leo', 'Mila', 'Nathan',
    'Oscar', 'Penelope', 'Quentin', 'Ruby', 'Samuel',
    'Tessa', 'Uriah', 'Violet', 'Wyatt', 'Ximena'
  ];
  

  const properNames = [
    'James', 'Emma', 'Liam', 'Olivia', 'Noah',
    'Ava', 'Isabella', 'Sophia', 'Jackson', 'Lucas',
    'Mia', 'Ethan', 'Alexander', 'Oliver', 'Elijah',
    'Harper', 'Aiden', 'Caden', 'Abigail', 'Charlotte',
    'David', 'Eva', 'Frank', 'Grace', 'Henry',
    'Ivy', 'Jack', 'Kelly', 'Liam', 'Mia',
    'Noah', 'Olivia', 'Pam', 'Quinn', 'Ryan',
    'Sophia', 'Thomas', 'Uma', 'Victor', 'Wendy',
    'Xander', 'Yara', 'Zane', 'Aria', 'Benjamin',
    'Cora', 'Dylan', 'Emily', 'Felix', 'Gemma'
  ];
  interface User {
    name: string;
    balance: number;
  }
  
  const getRandomUsers = (count: number): User[] => {
    const users: User[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex: number = Math.floor(Math.random() * names.length);
      const user: User = {
        name: names[randomIndex],
        balance: Math.floor(Math.random() * 500) + 50
      };
      users.push(user);
    }
    return users;
  };

  const getRandomUsersDepo = (count: number): User[] => {
    const users: User[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex: number = Math.floor(Math.random() * properNames.length);
      const user: User = {
        name: properNames[randomIndex],
        balance: Math.floor(Math.random() * 500) + 50
      };
      users.push(user);
    }
    return users;
  };
  
  const updateUserCard = (users: User[]): void => {
    const userCard: HTMLElement | null = document.getElementById('userCard');
    if (userCard) {
      userCard.innerHTML = '';
  
      users.forEach(user => {
        userCard.innerHTML += `
          <div class="mb-4">
          
            <h2 class="text-2xl font-semibold mb-2">${user.name}</h2>
            <p class="text-gray-600">Balance: $${user.balance}</p>
          </div>
        `;
      });
    }
  };



  const updateUserCardDepo = (users: User[]): void => {
    const userCard: HTMLElement | null = document.getElementById('userCardDepo');
    if (userCard) {
      userCard.innerHTML = '';
  
      users.forEach(user => {
        userCard.innerHTML += `
          <div class="mb-4">
          
            <h2 class="text-2xl font-semibold mb-2">${user.name}</h2>
            <p class="text-gray-600">Balance: $${user.balance}</p>
          </div>
        `;
      });
    }
  };
  
  const updateEvery5Seconds = (): void => {
    setInterval(() => {
      const updatedUsers: User[] = getRandomUsers(5);
      updateUserCard(updatedUsers); 
    }, 5000);
  };
  
  // Initial setup
  const initialUsers: User[] = getRandomUsers(5);
  updateUserCard(initialUsers); 
  updateEvery5Seconds();




  const updateEvery5SecondsDepo = (): void => {
    setInterval(() => {
      const updatedUsers: User[] = getRandomUsersDepo(5); 
      updateUserCardDepo(updatedUsers)
    }, 5000);
  };
  
  // Initial setup
  const initialUsersDepo: User[] = getRandomUsersDepo(5); 
  updateUserCardDepo(initialUsersDepo)
  updateEvery5SecondsDepo();
  

  
  return (
    <div>
       <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

{/* <!-- User Balance --> */}
<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4"> Total Balance</h2>
  <p className="text-3xl font-bold text-blue-500">$5,000</p>
</div>

{/* <!-- User Profit --> */}
<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">  Profit</h2>
  <p className="text-3xl font-bold text-green-500">$2,500</p>
</div>

{/* <!-- Total Withdraw --> */}
<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Total Withdraw</h2>
  <p className="text-3xl font-bold text-red-500">$1,000</p>
</div>

{/* <!-- Total Deposit --> */}
<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Total Deposit</h2>
  <p className="text-3xl font-bold text-purple-500">$3,000</p>
</div>

{/* <!-- Total Team Members --> */}
<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Total Team Members</h2>
  <p className="text-3xl font-bold text-orange-500">50</p>
</div>

{/* <!-- Additional Cards --> */}
<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
  <p className="text-3xl font-bold text-lime-500">100</p>
</div>

<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Coming soon</h2>
  {/* <p>Your content goes here.</p> */}
</div>

<div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Coming soon</h2>
  {/* <p>Your content goes here.</p> */}
</div>

</div>

<div className="container md:flex mx-auto mt-8 gap-5 ">

{/* <!-- Withdraw Card --> */}
<div  className=" w-full  bg-white shadow-md p-8 rounded-md transition-transform duration-500 transform">
<p className="text-3xl font-bold text-purple-500">Total Withdraw</p>
  <div id="userCard">

  </div>
  </div>

  <div  className="w-full  bg-white shadow-md p-8 rounded-md transition-transform duration-500 transform">
<p className="text-3xl font-bold text-green-500">Total Deposit</p>
  <div id="userCardDepo">

  </div>
  </div>

</div>
    </div>
  );
}
