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
  // Function to handle adding a new transaction to the cart
  const addBtnHandel = () => {
    setCart((prev) => {
      return [
        ...prev,
        {
          id: Date.now(), // Generate a unique ID for the transaction
          cost: cost,
          describe: describe,
          type: type,
          date: date,
        },
      ];
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  if (type === "Income") {
    // Calculate the new total income array
    let addVal = Number(cost);
    const newTotalIncome = [...totalIncome, addVal];
    // Calculate the sum of the total income array
    const totalIncomeSum = newTotalIncome.reduce((sum, item) => sum + item, 0);
    // Update both states with the new values
    setTotalIncome(newTotalIncome);
    setIncome(totalIncomeSum);
    localStorage.setItem("income", JSON.stringify(income));
  }else{
    // Calculate the new total outcome array
    let addVal = Number(cost);
    const newTotalOutcome = [...totalOitcome, addVal];
    // Calculate the sum of the total outcome array
    const totalOutcomeSum = newTotalOutcome.reduce((sum, item) => sum + item, 0);
    // Update both states with the new values
    setTotalOitcome(newTotalOutcome);
    setOutcome(totalOutcomeSum);
    localStorage.setItem("outcome", JSON.stringify(outcome));
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
  // Load the data from local storage on component mount
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
  // Provide the context values to child components
  return (
    <AppContext.Provider value={{cost,outcome,total,setCost,setDescribe,describe,type,setType,cart,setCart,income,setIncome,outcome,setOutcome,total,setTotal,date,setDate, addBtnHandel}}>
      {children}
    </AppContext.Provider>
  );
}

