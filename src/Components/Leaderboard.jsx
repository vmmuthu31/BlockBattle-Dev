import React, { useState, useEffect } from "react";
import { usePlayersList } from "playroomkit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useRoom } from "@huddle01/react/hooks";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import { useLocalVideo, useLocalAudio } from "@huddle01/react/hooks";

import { setSomeValue } from "../../store/yourSlice";
import { useAccount } from "wagmi";
import { getPlayerData } from "../config/BlockchainServices";
const getRoomIdFromURL = () => {
  const hash = window.location.hash;
  const roomId = hash.split("=")[1]; // Split the hash by '=' and get the second part
  return roomId;
};

export const Leaderboard = () => {
  const players = usePlayersList(true);
  const [timer, setTimer] = useState(60); // Initial timer value in seconds (5 minutes)
  const dispatch = useDispatch();
  const someValue = useSelector((state) => state.yourSlice.someValue);
  const handleButtonClick = () => {
    dispatch(setSomeValue(players));
  };
  const [roomId, setRoomId] = useState("");

  const [huddleRoomID, setHuddleRoomID] = useState("");

  const [huddleToken, setHuddleToken] = useState("");

  const [joinData, setJoinData] = useState({
    token: huddleToken,
    roomId: huddleRoomID,
  });
  // const { stream, enableAudio, disableAudio, changeVideoSource } = useLocalAudio();
  const { enableAudio, isAudioOn, stream: audioStream } = useLocalAudio();

  const { joinRoom } = useRoom({
    // Triggered when joinRoom() method calls
    onJoin: () => {
      console.info("some stuff");
    },
  });

  const createRoomId = async () => {
    const API_KEY = "5t0VTzU1IVTBm74AYyzWPRpRkCbv6M-r";
    const response = await axios.post(
      "https://api.huddle01.com/api/v1/create-room",
      {
        title: "Huddle01-Test",
        hostWallets: ["0x324298486F9b811eD5e062275a58363d1B2E93eB"],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "5t0VTzU1IVTBm74AYyzWPRpRkCbv6M-r",
        },
      }
    );
    alert(response);
    console.log(response);
    console.log(response.data.data.roomId);
    setHuddleRoomID(response.data.data.roomId);
  };

  const createAccessToken = async () => {
    const accessToken = new AccessToken({
      apiKey: "5t0VTzU1IVTBm74AYyzWPRpRkCbv6M-r",
      roomId: huddleRoomID,
      role: Role.HOST,
      permissions: {
        admin: true,
        canConsume: true,
        canProduce: true,
        canProduceSources: {
          cam: true,
          mic: true,
          screen: true,
        },
        canRecvData: true,
        canSendData: true,
        canUpdateMetadata: true,
      },
      options: {
        metadata: {
          // you can add any custom attributes here which you want to associate with the user
          walletAddress: "axit.eth",
        },
      },
    });

    const tempToken = await accessToken.toJwt();

    console.log(tempToken, "temptoken");

    setHuddleToken(tempToken);

    setJoinData((prev) => ({ ...prev, token: tempToken }));
  };

  const handleJoinRoom = async () => {
    await joinRoom({
      roomId: "uyi-plwt-poa",
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb29tSWQiOiJ1eWktcGx3dC1wb2EiLCJyb2xlIjoiaG9zdCIsInBlcm1pc3Npb25zIjp7ImFkbWluIjp0cnVlLCJjYW5Db25zdW1lIjp0cnVlLCJjYW5Qcm9kdWNlIjp0cnVlLCJjYW5Qcm9kdWNlU291cmNlcyI6eyJjYW0iOnRydWUsIm1pYyI6dHJ1ZSwic2NyZWVuIjp0cnVlfSwiY2FuU2VuZERhdGEiOnRydWUsImNhblJlY3ZEYXRhIjp0cnVlLCJjYW5VcGRhdGVNZXRhZGF0YSI6dHJ1ZX0sIm1ldGFkYXRhIjoie1wid2FsbGV0QWRkcmVzc1wiOlwiYXhpdC5ldGhcIn0iLCJwZWVySWQiOiJwZWVySWQtMVhtOFctV1puZUtNa0VRaWptU1ViIiwicHVycG9zZSI6IlNESyIsInJvb21JbmZvIjp7InJvb21Mb2NrZWQiOmZhbHNlLCJtdXRlT25FbnRyeSI6ZmFsc2UsInJvb21UeXBlIjoiVklERU8iLCJ2aWRlb09uRW50cnkiOmZhbHNlfSwiaWF0IjoxNzAyMTIwMTY5LCJleHAiOjE3MDIxMzA5NjksImlzcyI6Imh1ZGRsZTAxIn0.TcGaMuTkO9Zc3_Lczspl3KSSTT6nILlI08yBIMVDO7_zSB846MjhEQAuYdSlAlt5qZoOU0uoxiHnJCmAAWJgGTW4fInfWqHtb_R5DQ75r1yLsBTxx2grB4DTRPGhgHkM1sZiMNOtGUhoPY0esVGoraKn_DOWIas9XSaJdfy7AwqnufzA2uO-44NqWAksNb1JsqqH23qn4n9st2PA2nJ3KCoQ3sDbLLmxl3XMEUweTGpSIQdv9YVMaYJ3gzGd4Lt3_2ap2sMr-Zf652PAedbIy3GgPkI7xc11aP2Pcv5RYOwfLY7f_fJmlTCsHQsygwX1oFOflLKjJjF10NqJIJi0fSPANJXykYDkx4tcNvknnotZhFkwCbcIuF9RpMe_KGCEW-Vi5cdsfGc8DZzNvd560ylaPqsCqsjks5sgMbCQo1H-WogVGGITD0c07Tc84heXcnnIZxUrm4jrbiipyfo385CZotrvfj86feOB0q_qSKmZ4qJApIGU0lWib4E-hFaD8UV33o7uCMemVUpL7-H0Ziv0DYDpmGA-kXxuKiegfs_Mh2Cl52qYXdO7qvupj_o575Pw7byHerODX1TQ6s5W7CEdMFlOS9tZjUpX2t_80MtSOwKjefZ5-GOotlJ5YEwecs-KKwIj-jRga10hxghJ-H2kmFm5f8ooKVzQLO6W1Zs",
    });
  };

  useEffect(() => {
    setRoomId(getRoomIdFromURL());
  }, [window.location.hash]);
  // console.log("room id", roomId);
  // console.log("players data", players);
  const { address, isConnected } = useAccount();
  const playerAddress = address;
  // console.log("add", address);
  const [playerdata, setPlayerdata] = useState("");
  useEffect(() => {
    async function getplayere() {
      const res = await getPlayerData({ playerAddress });
      // console.log("res", res);
      setPlayerdata(res);
    }
    getplayere();
  }, [address]);
  // console.log("playername", playerdata[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Are you sure you want to leave? If you leave the game the bedding amount did't fund.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };
    const handleUnload = () => {
      // Perform any cleanup or additional logic before unmounting the component

      // Navigate to another page when the component is unmounted (page reload)
      history.push("/another-page");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedData = localStorage.getItem("myData");
      // console.log("the data is :",typeof(storedData),storedData,(storedData !== null) && (storedData !== 'false') && (storedData !== 'true'))
      if (
        storedData !== null &&
        storedData !== "false" &&
        storedData !== "true "
      ) {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on component mount

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // console.log(minutes === 0,remainingSeconds < 3)
    if (minutes < 1) {
      var obj = document.getElementById("timer_con");
      if (obj) {
        obj.style.backgroundColor = "rgba(182, 47, 47, 0.99)";
        obj.style.padding = "4px 11px";
        obj.style.borderRadius = "9px";
        obj.style.fontFamily = "cursive";
        obj.style.fontWeight = "bold";
        obj.style.boxShadow = "0px 0px 20px 20px #ff000059";
        obj.style.border = "2px solid rgb(252, 38, 68)";
        obj.style.transition = "background-color 0.5s ease-in-out";

        // console.log("form redux:",someValue )
      }
      if (minutes === 0 && remainingSeconds < 1) {
        localStorage.setItem("myData", "false");
        localStorage.setItem("myData", "false");
        // console.log(localStorage.getItem("myData"),typeof(localStorage.getItem("myData")))
        // console.log("game over")
        handleButtonClick();
        // localStorage.setItem('myObject', JSON.stringify(players));
        // navigate("/result");
      }
    }
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 p-4 flex z-10 gap-4">
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            top: "11%",
            position: "fixed",
          }}
        >
          <p
            id="timer_con"
            style={{
              backgroundColor: "#75b0feab",
              padding: "4px 11px",
              borderRadius: "9px",
              fontFamily: "cursive",
              fontWeight: "bold",
              border: "2px solid #2682fc",
            }}
          >
            Time: {formatTime(timer)}
          </p>

          <button type="button" onClick={createRoomId}>
            create Room Id
          </button>
          <button type="button" onClick={createAccessToken}>
            create Access Token
          </button>

          <button type="button" onClick={handleJoinRoom}>
            join Room
          </button>

          <button
            type="button"
            onClick={async () => {
              await enableAudio();
            }}
          >
            Enable Audio
          </button>
        </div>

        {players.map((player) => (
          <div
            key={player.id}
            className={`bg-opacity-60 backdrop-blur-sm flex items-center rounded-lg gap-2 p-2 min-w-[140px]`}
            style={{ backgroundColor: "#75B0FE" }}
          >
            <img
              src={player.state.profile?.photo || ""}
              className="w-10 h-10 border-2 rounded-full"
              style={{
                borderColor: player.state.profile?.color,
              }}
            />
            <div className="flex-grow">
              <h2 className={`font-bold text-sm`}>
                {player.state.profile.name ? playerdata[0] : "Loading..."}
              </h2>

              <div className="flex text-sm items-center gap-4">
                <p>🔫 {player.state.kills}</p>
                <p>💀 {player.state.deaths}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="fixed top-4 right-4 z-10 text-white"
        onClick={() => {
          // toggle fullscreen
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      </button>
    </>
  );
};
