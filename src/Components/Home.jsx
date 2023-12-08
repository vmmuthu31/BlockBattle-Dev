import React from "react";
import profile from "../../public/assets/profile.png";
import homedop from "../../public/assets/homedop.png";
import homebg from "../../public/assets/homebg.png";
import diamond from "../../public/assets/diamond.png";
import coin from "../../public/assets/coin.png";
import map from "../../public/assets/map.png";
import shop from "../../public/assets/shop.png";
import award from "../../public/assets/award.png";
import packagebox from "../../public/assets/packagebox.png";
import message from "../../public/assets/message.png";
import Link from "next/link";

import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Lobby() {
  const gltf = useLoader(GLTFLoader, "./models/Character_Soldier.gltf");

  return (
    <>
      <div className="bg-[url('https://blogger.googleusercontent.com/img/a/AVvXsEhnD6k83f7VLrtmGoYKcqJk_lSnWZwgDl-Fgz3RTsKgatlb276B0QhB3xi_mEl7jsRIVgUxASTVenCDoqXju-Q2YfCi__LT70OcLJjYgbl8AE1tcqPdHGYCUgzUuUI5DN5J9hQBHSVyb9AA_BZSwfaZXL-RxvvIRtqT3P0jsV1YzD_rb62S9reTOCxg24k')] min-h-screen  bg-no-repeat bg-cover">
        <div className="flex items-center space-x-11 text-white text-xl mx-20 py-8">
          <div className="flex homeprofilebg px-3 py-2 items-center space-x-3">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEilxD0f-Y5qYnr3AA8xT_tvMlR7ru7Yl1zxozlEzg-C5oJqOStwAR8OxsgItoWC112TQTgCt4_xylJDmr4v_Z_A3MDUy22L6CAI_Cvw_FnicYCcoXScwCt41T-xiWNZ8JQJyfbXNdygsgY9TxXvH-Yqdg0vqpeMrakh78RxXj5BAT4XwW1a3KsQVhexzog"
              className="h-12 w-auto"
              alt=""
            />
            <p>Prashantexe</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEispplhVXS52zWgstszpWTDQTrJ7FpVpnN4YjBilPRJ0hmtf0FGRI1-JoXko1x1mIG4Gi7ADUF3Yl9lu5JlsLRFnGUcPJnJzStlHom3K63Wu2QcL-nsJoMq2V66FcenoK7MbQVn_9vg1_8E1Q25wDoQJb2AGKiq4JGDYyknSKoXzYQFFR8LEhpX-R13ad4"
              alt=""
              className="h-8 w-auto"
            />
            <p>415</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEie2DZwyszxtLdkqYknRhqV0hDa85fb4knhn16GCCa3HO6AB_BHA19-BnWKl5qzuE8oOJ_WVifNg1FdY05UTucSiz36llzpSqUBjYbOriIDtaQV9iLJe0eMs455RVi3wkImTId7l0BqdOamXFulz7jivdeEiXqlhfItGYU-7iDuUgSBWA1PweMDY341yFM"
              alt=""
              className="h-8 w-auto"
            />
            <p>98 +</p>
          </div>
        </div>
        <div className="flex  text-white text-2xl font-semibold  justify-between mx-20">
          <div>
            <div className="homebox mt-20 px-16 py-10">
              <div className="flex items-center space-x-5">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhwze50sr7c42qWHWl1ZtWP-h91tRw96mnDxbST2rhMGENwxAH4LRxTWod417CEaB4xQfPVZ-0-kB1XCD2BDn1hwqxTPxNK6Z_Dz8F7Fo8hDjazJX_zXr458VZUPjdzdih1xheqz4yJg7oXTEQizG8q-8vC2B69RhKN4WOO6XS0AvvMhgGSGkq64aSJ3dQ"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/optstore">Store</Link>
                </p>
              </div>
              <div className="flex items-center my-5 space-x-5">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgn6Znvl2a2HObGhEoqPyeJymSTwEqIxV8f7IIQK3sCnu7oyYtZCkSg4XB-SRkV7NaxN7OVjliWj7gsOcc9VFmULUPaex4K3A1oEWf6wNsLfa8y9CcwLEdA52Dh-Hl2OnevhWJVJlI7CAMUpnWT97KEO42TfPhAxgHi7umyV4vGcVoO_XTnyxpNyJasnPg"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/optstore">Luck Royale</Link>
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEj9mP_S5zrE05iA7nZDHHKPCR4xSdtSRPtzr9tu1TMRYbTkG9wNiCq_Ri20Nna07x-B775iuyjcJBplvhELJglNv426Q-hq-SVkXOhxSDrBLoROEbIAxMzxcUSWOaNF5lpgFBf35PUWkcEoyFN-rhZnwh9o4Q8ply2YLZrxTbmzr_zobAF7jEPIIunNH9s"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/Guns">Vault</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="root2">
            <Canvas camera={{ fov: 75, position: [0, 1, 5] }} shadows>
              <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
              <primitive object={gltf.scene} position={[0, 1, 0]} castShadow />
              <OrbitControls target={[0, 1, 0]} />
            </Canvas>
          </div>
          <div className="mt-56 ">
            <div className="flex mapbox px-6 py-3 items-center space-x-5">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhJ85zCrUSpRV7cSOt5Y1VeibTq8106ipzp_Ow_LZxxFvl2BDdUTpR0N5LVWnfhcA8DjymoCzOOgAl_3P4kpI9QXB2MJBEm6DP1n6kbleCpf_8IY_uaucIZpKyAwZjNJd9XzG2GRbyyqMhX5FKrNeKg1UAj0WLoxEA8b9hKg-eXqJi7IralLJYl8fnj2Uk"
                alt=""
                className="h-8 w-auto"
              />
              <p>Select Map</p>
            </div>
            <div className="">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhLX30N2aeEQt2Iv9xNfAUagS2HOylDbudaDn_uyM3NvtggvfRsS1vtFPFNdsTGoXFrloA-dYaXtJDkztDAc-hxIzsHhI_XcZycIV0Az6fTR8jxGWl2lgd8PQPpLaoZ3KWgTubfv9-x2RfEyqM7mmBq3SoytIX0AH8jKNFgKEw7UeENmC4fERXuwnaA9JA"
                className="h-40 w-auto"
                alt=""
              />
              <div className="absolute   top-[525px]">
                <p className="text-center  bg-black bg-opacity-40 py-2 px-[90px]">
                  Bermuda
                </p>
              </div>
            </div>
            <div className="flex justify-between mx-2 items-center mt-3">
              <p className="px-3 text-lg hover:text-black hover:bg-[#9FC610]  py-1 border border-[#9FC610] rounded-xl text-[#9FC610]">
                5 min
              </p>
              <p className="px-3 text-lg hover:text-black hover:bg-[#9FC610]  py-1 border border-[#9FC610] rounded-xl text-[#9FC610]">
                10 min
              </p>
              <p className="px-3 text-lg hover:text-black hover:bg-[#9FC610]  py-1 border border-[#9FC610] rounded-xl text-[#9FC610]">
                {" "}
                15 min
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/game">
                <button className="playbtm px-10 font-semibold  py-2 mt-5 text-xl text-black ">
                  Play!!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
