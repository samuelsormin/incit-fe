import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import dbs from "./images/dbs.png"
import proudfoot from "./images/proudfoot.png"
import rmi from "./images/rmi.png"

// clients dummy data
const clients = [
  {
    "title": "DBS Bank",
    "description": "DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.",
    "img": dbs,
    "imgWidth": "w-24"
  },
  {
    "title": "Proudfoot",
    "description": "Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.",
    "img": proudfoot,
    "imgWidth": "w-20"
  },
  {
    "title": "RMI",
    "description": "RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.",
    "img": rmi,
    "imgWidth": "w-48"
  }
]

function App() {
  const [coinData, setCoinData] = useState<any[]>([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10 ")
      .then((response) => response.json())
      .then((data) => setCoinData(data))
  }, [])

  return (
    <>
      <Header />
      <Sidebar />
      <section className="flex flex-auto">
        <div className="hidden xl:block flex-none w-72"></div>
        <div className="flex-grow p-6 sm:p-10">
          <div className="mt-16 mb-12">
            <h1 className="text-3xl font-bold">Hi Radhika, welcome back!</h1>
          </div>
          <div className="mb-6">
            <p className="text-xl font-bold">Your client list</p>
            <p className="text-sm">You currently servicing 3 clients</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {clients.map((client, index) => (
              <Card
                key={index}
                img={client.img}
                imgWidth={client.imgWidth}
                title={client.title}
                description={client.description}
              />
            ))}
          </div>
          <div className="block">
            <div className="block sm:flex justify-between mb-6">
              <div className="block">
                <p className="text-xl font-bold">Recent approvals</p>
                <p className="text-sm">You can find the recent on-going approvals here</p>
              </div>
              <div className="block mt-3 sm:mt-0">
                <button className="flex items-center justify-center w-fulls sm:w-auto bg-navy-500 px-6 py-1 rounded-full">
                  <svg className="mr-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.40257 -6.10352e-05H6.21497C6.10941 -6.10352e-05 6.05663 0.0517908 6.05663 0.155495V13.8444C6.05663 13.9481 6.10941 13.9999 6.21497 13.9999H7.40257C7.50813 13.9999 7.56091 13.9481 7.56091 13.8444V0.155495C7.56091 0.0517908 7.50813 -6.10352e-05 7.40257 -6.10352e-05Z" fill="white" />
                    <path d="M13.4593 6.26105H0.158284C0.0527199 6.26105 -6.20484e-05 6.3129 -6.20484e-05 6.41661V7.58327C-6.20484e-05 7.68698 0.0527199 7.73883 0.158284 7.73883H13.4593C13.5649 7.73883 13.6177 7.68698 13.6177 7.58327V6.41661C13.6177 6.3129 13.5649 6.26105 13.4593 6.26105Z" fill="white" />
                  </svg>
                  <span className="text-white">Create new approval</span>
                </button>
              </div>
            </div>
            <div className="block">
              <table className="w-full border-separate border-spacing-y-3">
                <thead className="sm:bg-white text-sm shadow shadow-gray-200">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {coinData && coinData.map((coin, index) => (
                    <tr key={index}>
                      <td data-label="Image"><img src={coin.image} alt={coin.name} className="w-10 inline" /></td>
                      <td data-label="Name"><span className="text-base font-bold">{coin.name}</span></td>
                      <td data-label="Current Price"><span className="text-sm">{`Rp${coin.current_price.toLocaleString('en-US')}`}</span></td>
                      <td data-label="Market Cap"><span className="text-sm">{`Rp${coin.market_cap.toLocaleString('en-US')}`}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-2">
                <button className="text-navy-500 font-bold hover:underline">See all approvals here</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
