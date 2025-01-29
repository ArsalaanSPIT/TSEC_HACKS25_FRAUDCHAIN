// SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from '@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol';
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title FraudChain engine
 * @author Aaryan Urunkar , Arsalaan Khan, Oren Coelho, Hitesh Ghanchi
 * @notice Will hold the entire treasury and interact with the lending pool to earn interest
 */
contract FCEngine is Ownable{
    
    enum Stability {
        STABLE,
        VERY_LITTLE_STABLE,
        UNSTABLE
    }

    IERC20 public immutable s_asset;
    mapping(address => Stability) private s_userToCredibilityScore;


    /**
     * Will be owned by DAO
     */
    constructor(address _asset) Ownable(msg.sender) { 
        s_asset = IERC20(_asset);

    }

    function register(uint256 _amount , ) onlyOwner public{
        
    }

    /////////////////
    ///Getters//////
    ///////////////

    function getUserCredibility(address _userAddress) view returns(Stability){
        return s_userToCredibilityScore[_userAddress];
    }
    
}