import Web3 from "web3";
import ABI from "../../contracts/abi.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}
const ContractADD = "0x7ED61251F9e8f088e00ceE73CC086dC3c123e2F5";

export const registerusr = async ({ playeradd, playername }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.registerPlayer(playeradd, playername);
  return tokenId;
};

export const isusrregistered = async ({ playeradd }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.isPlayerRegistered(playeradd);
  return tokenId;
};

export const addgunassets = async ({
  gunid,
  name,
  imghash,
  price,
  rateoffire,
  gunrange,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.addGun(
    gunid,
    name,
    imghash,
    price,
    rateoffire,
    gunrange
  );
  return tokenId;
};

export const addcharassets = async ({
  charid,
  name,
  imghash,
  price,
  strength,
  armorpower,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.addCharacter(
    charid,
    name,
    imghash,
    price,
    strength,
    armorpower
  );
  return tokenId;
};

export const addvechileassets = async ({
  vehicleId,
  name,
  imghash,
  price,
  range,
  speed,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.addVehicle(
    vehicleId,
    name,
    imghash,
    price,
    range,
    speed
  );
  return tokenId;
};

export const startgame = async ({ gameid, playerNames }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.startGame(gameid, playerNames);
  return tokenId;
};

export const getPlayerData = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.getPlayerData(playerAddress);
  return tokenId;
};

export const endGame = async ({ gameid, winner, highestkills, imghash }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.endGame(gameid, winner, highestkills, imghash);
  return tokenId;
};

export const getPlayerAssets = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.getPlayerAssets(playerAddress);
  return tokenId;
};

export const updatePlayerProfile = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.updatePlayerProfile(playerAddress);
  return tokenId;
};

export const getPlayerNFTs = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.getPlayerNFTs(playerAddress);
  return tokenId;
};

export const buyasset = async ({ playeradd, assetid, assettype, price }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(ContractADD, ABI, signer);
  const tokenId = await Role.buyAsset(playeradd, assetid, assettype, {
    value: price,
  });
  console.log(tokenId);
  return tokenId;
};
