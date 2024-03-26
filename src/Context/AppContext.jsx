import { createContext, useEffect, useState } from "react";
// Create a context to share data across components
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
   // State variables for income and expense tracking
  const [cost, setCost] = useState(0);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);
  // State variables for transaction details
  const [describe, setDescribe] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Income");
    // Array to store individual transactions
  const [cart, setCart] = useState([]);
  // Arrays to track total income and outcome for potential calculations
  const [totalIncome , setTotalIncome] = useState([0]);
  const [totalOitcome , setTotalOitcome] = useState([0]);
  //fetching data from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedIncome = localStorage.getItem("income");
    if (storedIncome) {
      setIncome(JSON.parse(storedIncome));
    }
    const storedOutcome = localStorage.getItem("outcome");
    if (storedOutcome) {
      setOutcome(JSON.parse(storedOutcome));
    }
    const storedTotal = localStorage.getItem("total");
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);
  // Function to handle adding a new transaction to the cart
  const addBtnHandel = () => {
    const newCart = [
    ...cart,
    {
      id: Date.now(),  // Generate a unique ID for the transaction
      cost: cost,
      describe: describe,
      type: type,
      date: date,
    },
  ];
  setCart(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
  
  if (type === "Income") {
    const newTotalIncome = [...totalIncome, Number(cost)];
    const totalIncomeSum = newTotalIncome.reduce((sum, item) => sum + item, 0);
    setTotalIncome(newTotalIncome);
    setIncome(totalIncomeSum);
    localStorage.setItem("income", JSON.stringify(totalIncomeSum));
  } else {
    const newTotalOutcome = [...totalOitcome, Number(cost)];
    const totalOutcomeSum = newTotalOutcome.reduce((sum, item) => sum + item, 0);
    setTotalOitcome(newTotalOutcome);
    setOutcome(totalOutcomeSum);
    localStorage.setItem("outcome", JSON.stringify(totalOutcomeSum));
  }

  // Clear input fields for the next transaction
    setCost(0);
    setDescribe("");
    setDate("");
    setType("Income");
  };
  //handel total amount
  useEffect(()=>{
    setTotal(income - outcome);
    localStorage.setItem("total", JSON.stringify(total));
  },[income,outcome])
  //newSets
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);
  useEffect(() => {
    localStorage.setItem("outcome", JSON.stringify(outcome));
  }, [outcome]);
  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(total));
  }, [total]);
  // Provide the context values to child components
  return (
    <AppContext.Provider value={{cost,outcome,total,setCost,setDescribe,describe,type,setType,cart,setCart,income,setIncome,outcome,setOutcome,total,setTotal,date,setDate, addBtnHandel}}>
      {children}
    </AppContext.Provider>
  );
}

