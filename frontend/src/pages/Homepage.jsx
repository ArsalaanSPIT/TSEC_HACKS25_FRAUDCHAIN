import React from "react";
import { motion } from "framer-motion";
// import logo from "/assets/logo.png"; 
import logo from "../assets/logo.svg"
import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

export default function Homepage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [file, setFile] = useState(null);
  // const [isRegistered, setIsRegistered] = useState(false);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWalletAddress(address);
      console.log(address)

      // Check if the user is already registered
      // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      // const registered = await contract.isUserRegistered(address);

      // setIsRegistered(registered);

      // if (registered) {
      //   alert(`Welcome back! Connected as ${address}`);
      // } else {
      //   alert("New user detected! Please upload your finance file.");
      // }
    } catch (error) {
      console.error("Connection Error:", error);
    }
  };

  const uploadToIPFS = async () => {
    if (!file) {
      alert("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "pinata_api_key": import.meta.env.VITE_PINATA_API_KEY,
          "pinata_secret_api_key": import.meta.env.VITE_PINATA_SECRET_KEY,
        },
      });
      console.log(response)

      return response.data.IpfsHash;
    } catch (error) {
      console.error("Upload Error:", error);
      return null;
    }
  };

  const registerUser = async () => {
    // if (!walletAddress) {
    //   alert("Connect MetaMask first!");
    //   return;
    // }

    const ipfsHash = await uploadToIPFS();
    console.log(ipfsHash)
    if (!ipfsHash) return;

    // try {
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const signer = provider.getSigner();
    //   const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    //   const tx = await contract.registerUser(ipfsHash);
    //   await tx.wait();

    //   alert("User registered successfully!");
    //   setIsRegistered(true);
    // } catch (error) {
    //   console.error("Registration Error:", error);
    // }
  };



  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-40"></div>

    
      <div className="absolute top-6 left-10 flex items-center space-x-3">
        <img src={logo} alt="TrustX Logo" className="w-12 h-12" />
        <h1 className="text-5xl font-bold">
          Trust<span className="text-red-700">X</span>
        </h1>
      </div>

      
      <div className="absolute top-6 right-10">
        <button className="border border-white px-8 py-3 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition duration-300" onClick={connectMetaMask}>
        {"Connect to Wallet"}
        </button>
      </div>

      {/* Center Content */}
      <motion.div
        className="text-center space-y-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl text-gray-300 max-w-lg mx-auto">
          Revolutionizing Financial Transparency with Blockchain Security
        </p>
        <motion.button
          className="mt-4 px-8 py-3 text-lg font-semibold bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Floating Light Effect */}
      <div className="absolute w-72 h-72 bg-white/10 blur-3xl rounded-full top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white/5 blur-[120px] rounded-full bottom-1/4 right-1/4"></div>

      {/* Semi-Circle Design at the Bottom */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent rounded-t-full"></div>
    </div>
  );
}
