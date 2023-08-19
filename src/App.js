import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  //properties

  const [walletAddress, setWalletAddress] = useState("");
  const ethers = require("ethers");

  async function requestAccount() {
    console.log('request account..');

    if (window.ethereum){
      console.log('detected');      
      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        //console.log(accounts);
        setWalletAddress(accounts[0]);
      }catch (error){
        console.log('error connection');

      }
    }else{
      console.log('Meta mask not detected');
    }
  }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
        onClick={requestAccount}
        >Request Account</button>

        <button
        style={{backgroundColor: 'green'}}
        onClick={connectWallet}
        >Connect Wallet</button>
        <h3>Wallet address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
