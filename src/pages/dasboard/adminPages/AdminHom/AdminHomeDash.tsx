import { useAuth } from "@/hooks/useAuth";
import { getAllUserList, getRefferalList } from "@/service/api/apiMethods";
import { getDepositList, getWithdrawList } from "@/service/api/template";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHomeDash() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const names: string[] = [
    'Alice', 'Trisha', 'Bob', 'Jasmine', 'Aylin', 'Charlie', 'Kavya', 'David', 'Fatima', 'Eva',
    'Frank', 'Deniz', 'Aryan', 'Grace', 'Melis', 'Henry', 'Karan', 'Aisha', 'Ivy', 'Jack',
    'Kelly', 'Liam', 'Mia', 'Noah', 'Anil', 'Irem', 'Olivia',
    'Pam', 'Quinn', 'Mukesh', 'Mert', 'Ryan', 'Sophia', 'Arda', 'Herry', 'Thomas',
    'Uma', 'Victor', 'Wendy', 'Omar', 'Xander', 'Yara',
    'Zane', 'Aria', 'Benjamin', 'Cora', 'Dylan',
    'Emily', 'Burak', 'Felix', 'Zayd', 'Gemma', 'Hudson', 'Isabel',
    'Jake', 'Kylie', 'Kağan', 'Samir', 'Hala', 'Leo', 'Mila', 'Nathan',
    'Oscar', 'Penelope', 'Farid', 'Quentin', 'Ruby', 'Samuel',
    'Tessa', 'Can', 'Uriah', 'Violet', 'Wyatt', 'Ximena', 'Ceren',
  ];


  const properNames = [
    'James', 'Emma', 'Elif', 'Sara', 'Liam', 'Karan', 'Olivia', 'Noah', 'Zeynep',
    'Ava', 'Mohit', 'Zahra', 'Isabella', 'Sophia', 'Jackson', 'Varun', 'Ece', 'Lucas',
    'Mia', 'Ethan', 'Dev', 'Tariq', 'Alexander', 'Sunil', 'Bilal', 'Oliver', 'Elijah',
    'Harper', 'Alp', 'Neha', 'Aiden', 'Kerem', 'Shumail', 'Selin', 'Caden', 'Abigail', 'Charlotte',
    'David', 'Sarthak', 'Eva', 'Frank', 'Zara', 'Grace', 'Henry', 'Yash',
    'Ivy', 'Isha', 'Jack', 'Amira', 'Kelly', 'Saim', 'Liam', 'Mia',
    'Noah', 'Onur', 'Olivia', 'Ishan', 'Zainab', 'Pam', 'Quinn', 'Ryan',
    'Sophia', 'Thomas', 'Vijay', 'Uma', 'Victor', 'Samar', 'Wendy',
    'Xander', 'Vikram', 'Yara', 'Eren', 'Zane', 'josef', 'Aria', 'Benjamin',
    'Cora', 'Dylan', 'Emily', 'Emir', 'Felix', 'Amira', 'Gemma', 'Suresh', 'Sufyan', 'Asli',
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
        balance: Math.floor(Math.random() * 500) + 500
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




  // ================= Stats ====================


  const [totalDeposit, setTotalDeposit] = useState<number>(0);
  const [totalWithdraw, setTotalWithdraw] = useState<number>(0);
  const [totalTeam, setTotalTeam] = useState<Array<any>>([]);

  const [currentPlan, setCurrentPlan] = useState<number>(0);


  const TotalDepositData = async () => {
    try {
      const { data } = await getDepositList(user?._id);

      // Filter deposits with status 'Approved'
      const approvedDeposits = data?.filter((item: any) => item?.status === 'Approved');

      // Use Array.reduce() to find the latest deposit based on the createdAt property
      const latestDeposit = approvedDeposits.reduce((latest: any, deposit: any) => {
        if (!latest || deposit.createdAt > latest.createdAt) {
          return deposit;
        }
        return latest;
      }, null);
      setCurrentPlan(latestDeposit?.amount);
      const sumAmount = approvedDeposits?.reduce((acc: number, deposit: any) => {
        const amountAsNumber = parseFloat(deposit.amount);
        return acc + (isNaN(amountAsNumber) ? 0 : amountAsNumber);
      }, 0);
      const sumAmountAsNumber = Number(sumAmount) || 0;
      setTotalDeposit(sumAmountAsNumber);

    } catch (error) {
      console.log(error);
    } finally {
      console.error('error');
    }
  };


  const withdrawTotalData = async () => {
    try {
      const { data } = await getWithdrawList(user?._id);

      // Filter deposits with status 'Approved'
      const approvedDeposits = data?.filter((item: any) => item?.status === 'Approved');

      // Sum the amounts of approved deposits after parsing them as numbers
      const sumAmount = approvedDeposits?.reduce((acc: number, deposit: any) => {
        // Parse the amount value as a number
        const amountAsNumber = parseFloat(deposit.amount);

        // Add the parsed amount to the accumulator
        return acc + (isNaN(amountAsNumber) ? 0 : amountAsNumber);
      }, 0);

      // Convert the sum to a number (use 0 if sumAmount is undefined)
      const sumAmountAsNumber = Number(sumAmount) || 0;
      setTotalWithdraw(sumAmount || 0);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.role == 2) {
      return;
    } else {
      navigate('/dashboard/deposit-requests')
    }
  }, [])

  const allUser = async () => {
    try {
      const { data } = await getAllUserList(user?._id);
      const transformedData = data.map((row: any) => ({
        ...row,
        managerFirstName: row.manager ? row.manager.firstName : "",
        members: row.members ? row.members.length : "",
      }));

      setTotalTeam(transformedData);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    TotalDepositData()
    allUser()
    withdrawTotalData()
  }, [])
  return (
    <div>
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {/* <!-- User Balance --> */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4"> Total Balance</h2>
          <p className="text-3xl font-bold text-blue-500">Coming Soon</p>
        </div>

        {/* <!-- User Profit --> */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">  Profit</h2>
          <p className="text-3xl font-bold text-green-500">Coming Soon</p>

        </div>

        {/* <!-- Total Withdraw --> */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Withdraw</h2>
          <p className="text-3xl font-bold text-red-500">${totalWithdraw}</p>
        </div>

        {/* <!-- Total Deposit --> */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Deposit</h2>
          <p className="text-3xl font-bold text-purple-500">${totalDeposit}</p>
        </div>

        {/* <!-- Total Team Members --> */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Members</h2>
          <p className="text-3xl font-bold text-orange-500">{totalTeam?.length}</p>
        </div>

        {/* <!-- Additional Cards --> */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Rejecet</h2>
          <p className="text-3xl font-bold text-lime-500">Coming Soon</p>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          {/* <p>Your content goes here.</p> */}
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          {/* <p>Your content goes here.</p> */}
        </div>

      </div>

      <div className="container md:flex mx-auto mt-8 gap-5 ">

        {/* <!-- Withdraw Card --> */}
        {/* <div className=" w-full  bg-white shadow-md p-8 rounded-md transition-transform duration-500 transform">
          <p className="text-3xl font-bold text-purple-500">Currently Withdraw</p>
          <div id="userCard">

          </div>
        </div>

        <div className="w-full mt-4 md:mt-0 bg-white shadow-md p-8 rounded-md transition-transform duration-500 transform">
          <p className="text-3xl font-bold text-green-500">Currently Deposit</p>
          <div id="userCardDepo">

          </div>
        </div> */}

      </div>
    </div>
  );
}
