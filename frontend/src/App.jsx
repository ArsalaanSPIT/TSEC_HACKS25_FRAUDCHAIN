import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

export default function App() {


  // const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
  // const CONTRACT_ABI = [ /* Add ABI Here */ ];
  // const PINATA_API_KEY = "YOUR_PINATA_API_KEY";
  // const PINATA_SECRET_KEY = "YOUR_PINATA_SECRET_KEY";


  // code for saving data
  const [walletAddress, setWalletAddress] = useState("");
  // const [file, setFile] = useState(null);
  // const [isRegistered, setIsRegistered] = useState(false);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected!");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
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

  // const uploadToIPFS = async () => {
  //   if (!file) {
  //     alert("No file selected!");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         "pinata_api_key": PINATA_API_KEY,
  //         "pinata_secret_api_key": PINATA_SECRET_KEY,
  //       },
  //     });

  //     return response.data.IpfsHash;
  //   } catch (error) {
  //     console.error("Upload Error:", error);
  //     return null;
  //   }
  // };

  // const registerUser = async () => {
  //   if (!walletAddress) {
  //     alert("Connect MetaMask first!");
  //     return;
  //   }

  //   const ipfsHash = await uploadToIPFS();
  //   if (!ipfsHash) return;

  //   try {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  //     const tx = await contract.registerUser(ipfsHash);
  //     await tx.wait();

  //     alert("User registered successfully!");
  //     setIsRegistered(true);
  //   } catch (error) {
  //     console.error("Registration Error:", error);
  //   }
  // };

  return (
    <>
      
  
      <div>
        <button onClick={connectMetaMask}>
          {walletAddress ? `Connected: ${walletAddress}` : "Connect to Wallet"}
        </button>
  
        {/* {!isRegistered && walletAddress && (
          <>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={registerUser}>Upload & Register</button>
          </>
        )} */}
      </div>
    </>
  );
  
}
