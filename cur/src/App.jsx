import { useState } from 'react';
import { InputBox } from './Inputs';
import useCurrencyinfo from './hook1/useCurrencyinfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("eur");
  const [converter, setConverter] = useState(0);
  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConverter(amount * currencyinfo[to]); 
    setAmount(converter);
  };

  const converted = () => {
    setConverter(amount * currencyinfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              converted();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoption={options}
                onCurrencychange={(currency) => setFrom(currency)}
                selectcurrency={from}
                onAmountchange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={converter}
                currencyoption={options}
                onCurrencychange={(currency) => setTo(currency)}
                selectcurrency={to}
                amountdisabled
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
