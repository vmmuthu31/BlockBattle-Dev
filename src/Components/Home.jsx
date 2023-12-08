import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Home() {
  const connection = useSelector((state) => state.connection);

  console.log("Provider:", connection?.provider);
  console.log("Address:", connection?.address);

  const navigateTo = useNavigate();

  return (
    <main className="bg-[url('https://blogger.googleusercontent.com/img/a/AVvXsEjsm98HqLPQ8EgS09Z71aY1mZ8ncQ3OlEvZsIaJGD2oE32ADUweoWL-J6GaF4VMUyLbVdmJ1wnaXyXAp9GKrtlC8Fbm-tQxn8wAF4vMt_98gph8bWvQ5M0FoF2Rd0LV8NQIN7ZkuLLvWb_0tjl-ZP33VChrjMZHB5OQVyiDH34nI1nZRXuRwB4kyGRcOn8')]   bg-contain bg-no-repeat text-white min-h-screen">
      <div className="bg-black min-h-screen ">
        <Navbar />
        <div className="pt-28">
          <div className="text-center font-bold pt-5 md:pt-10 font-serif  text-xl   md:text-9xl">
            <p>
              Un<span className="text-[#9FC610]">l</span>eash
              <span className="text-[#9FC610]"> t</span>he fut
              <span className="text-[#9FC610]">u</span>re{" "}
            </p>
            <div className="flex justify-center">
              <div className="flex mt-8 justify-center">
                <p className=" border-2 border-[#9FC610] text-black text-sm md:px-2  rounded-full">
                  .
                </p>
                <p className="border-t-2 mt-3 w-5  md:w-80   border-[#9FC610]  "></p>
              </div>
              <p className="md:text-4xl text-md md:mt-0 mt-2 text-[#9FC610] pt-5 font-serif md:ml-12">
                join us
              </p>
            </div>
            <div className="mt-5 flex justify-center space-x-4">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhwm8wvo0d75uUK7qADGTsYREvEE0E2CH7XYM-_6INqEfIfO-OxsXx_yst9etVWcY36h1RHLlP6oOa7Krub-3DxH8aShC8VVJiQ0wPXAVzYhF5UJQx9KLpXseRf2vBoN9R5Id3NqQyMypTORnKPRwOKdh3zWZ2IxmoswxZNLDxN_GAuIw7j1hhv780HU-A"
                alt=""
                className="h-14 w-auto md:h-auto"
              />
              <div className="flex flex-col space-y-2">
                <p>
                  o<span className="text-[#9FC610]">f</span> Ga
                  <span className="text-[#9FC610]">m</span>ing
                </p>
                <div className="">
                  <button className="border-2 md:w-60 rounded-full border-l-8 py-2 px-3 border-[#9FC610] text-xl md:text-4xl">
                    Play Now!!
                  </button>
                </div>
              </div>
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEh1dHNAY4W4MI43iyLovJU2odsRcgAhYdF0ZoBmhqVtABSGzoWKTTBtEZwvp3GdUvQsXm-SVPuknlqo1zE_soRClWu_CbJsrcisWU_fR_d8c-Jb8EWneLBPmcz4PUHXT0kvgV5c1kGF34HB_sSX3IUuFB9RaM9ipUjr5F0CkxTm-_av64iI9mT8RWMCNio"
                alt=""
                className="w-auto h-10 md:h-32"
              />
            </div>
          </div>
          <div className="flex justify-end md:mx-10">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
              className="md:h-24 h-10 w-auto"
              alt=""
            />
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEiuisYlXkkqkbbXoNz1Kx4O4nJ1W0dA9SieLrKYPlh9voP6DGSKQIvoeHosvTGbfn7IhQunm3HSabAKnRiu7F72H6gMommymE2LMqty5jtVgaRbW7sRXn2Ki8AyB2-sIKw0Fct7iE4-ygFyWVv1QaJHjkyepM1rtLoN9h5AvumypZMyrXwId80tqCCAwm0"
              alt=""
              className="md:h-12 h-8 mt-5 md:mt-16 w-auto"
            />
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjqPuMLzaPaHpJ5DKseyJbTjXVqAD1h8cwbkV9HCEb00rGSuzzAxhWqCqO-uI7ODczHqPBz0M2kb4K4kkvpR316wUSyAYFTFQh4-yGq9e4J5vjhOiz32VvLR2r_DGbL8nC1-3BseboiyB9TgDEoOTZQ1gBPmuNpA6BGoAzydjviNW0DoH7T0WCxSvp5Y40"
              alt=""
              className="md:h-8 md:mt-8 h-4 w-auto"
            />
          </div>
        </div>
        <div className="flex flex-col  md:flex-row md:space-x-16 mx-5 md:mx-32 mt-20">
          <div className="flex  md:space-x-8 border-2 border-r-4 border-b-8 border-[#9FC610] px-5 md:px-20 py-5 rounded-xl md:rounded-full">
            <div>
              <img
                className="h-10 mt-2 w-auto"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEh_NpbSDHBIVFDgZE-VWSiX42DtF5GzpuITVjjy87N3dA8kt6ArW33EPHRYkUihwJ55LCafxqtqk2dJpdl8VWNxdPngmVcXJFBAu40SixVoBUYAGwi7-WlAiFlUtNEdWjk_F1njLpI8_pZ-oNoAuaqVDy00g5dcsp5ySyjlAdKeSpDulCyB50EKWgw9oe4"
                alt=""
              />
            </div>
            <div>
              <p className="text-xl ">
                Game <br /> Features
              </p>
              <p className="  my-5 text-[#A2A2A2] text-md md:w-[600px]">
                Experience intense multiplayer battles, climb leaderboards for
                exclusive NFT rewards, and enjoy lifelike graphics powered by
                blockchain technology. Enter custom rooms, strategize, and
                dominate countdown-driven challenges for unparalleled gaming
                excitement.
              </p>
            </div>
            <div>
              <div className="bg-[#9FC610] rounded-full p-2 mt-12">
                <MdArrowOutward className="text-6xl rounded-full border-2 border-black text-black bg-[#9FC610]" />
              </div>
            </div>
          </div>
          <div className="border-2 mt-5 md:mt-5 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
              alt=""
              className="md:h-12 h-8 w-auto"
            />
            <p className="md:text-xl text-sm text-center">
              Blockchain
              <br />
              Powered
              <br />
              Realism
            </p>
          </div>
        </div>
        <div className="flex md:flex-row space-y-5 md:space-y-0 flex-col mx-5 md:mx-0 justify-center  md:space-x-20">
          <div className="  md:mt-24">
            <div className="border-2 mt-3 md:mt-0 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
                alt=""
                className="md:h-12 h-8 w-auto"
              />
              <p className="md:text-xl text-sm text-center">
                Blockchain
                <br />
                Powered
                <br />
                Realism
              </p>
            </div>
          </div>
          <div className="md:mt-16">
            <div className="border-2 mt-3 md:mt-0 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
                alt=""
                className="md:h-12 h-8 w-auto"
              />
              <p className="md:text-xl text-sm text-center">
                Blockchain
                <br />
                Powered
                <br />
                Realism
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 mt-3 md:mt-0 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
                alt=""
                className="md:h-12 h-8 w-auto"
              />
              <p className="md:text-xl text-sm text-center">
                Blockchain
                <br />
                Powered
                <br />
                Realism
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-end mx-10">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhdS7NEVBdqV9dSYUdLiCChJOWMfy-dxrfvKavSeO88mN8Y96u4fuNg92oMMALzAVEjZ1d8IGCGrbsFMbZVrx32FWwRAX5Klfqqk31khwDBhxJCQNf4wXrTapTwptYWM24zT7hkvbOwIoYlN3g98h4cP-xkR75IKFyUA4Y8YihmaGlmsT0jNGWy-QZnHro"
            alt=""
            className="md:h-auto h-12"
          />
        </div>
        <div className="flex  mx-16 md:mx-40 space-x-4 items-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEh_NpbSDHBIVFDgZE-VWSiX42DtF5GzpuITVjjy87N3dA8kt6ArW33EPHRYkUihwJ55LCafxqtqk2dJpdl8VWNxdPngmVcXJFBAu40SixVoBUYAGwi7-WlAiFlUtNEdWjk_F1njLpI8_pZ-oNoAuaqVDy00g5dcsp5ySyjlAdKeSpDulCyB50EKWgw9oe4"
            alt=""
            className=""
          />
          <p className="md:text-4xl text-xl font-bold">How it Works?</p>
        </div>
        <div className="flex mx-10 md:mx-0 md:flex-row flex-col mt-10 justify-center space-x-3">
          <div className="mt-2 ">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Choose Your
                <br />
                Warrior
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10    w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEiz1_JHsBBvn0d_TTfRIoQnYXnMhSs3-eU7VNTmKAyPVK7dfExGbgOUAg633Luur0IwSHgOeQLDoEMftbk_qUezmySwUZh-vogXRcDK2qS6e0PTSAUReO4L2WeIcT8t1PkPpd8bvLlQn8HOW_pkNzLH6ckJ8-8R3SV8n0NU8lQUmNvb8JCvsrve3U5vXBk"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEj44BtkfqscsWU3UbBd9c6Xtg3s1AZFQZN-VsunaOU07PldkT5bLDYs0C4g68E6FiqiVP2dh8DKlkiL-kGl-9rfwLYDwJwhgJ9LDXcFWhwP794UHac7dkm2BZLyZJ9wVCUi6xSKIkE3GZKCvm6CX7AduqN0ZsiGPXXsdz6BwLskuhyYeuxQjj6kCMqaHmo"
            className="w-auto md:block hidden h-32 mt-5 md:mt-20"
            alt=""
          />
          <div className="md:mt-28 mt-5">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Enter the
                <br />
                Battle Arena
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgcsuxugFu9AbGKvZrQ00CAxIkj6mQqH6aEBbRnzyKmAZx_WMhRlNIRvL_rBDQImRpYQNG2Rb8xF2LO1OsGVdn5wVnUdok5I8uQwX-Q2h09Z-E87JuMDF85OmQ36HrjTU2gNHH8r54mffcOa3cMUuvRGnmmVF_9lJXl5YaVScTUE9E-e2AzQJ84iNqvcc8"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiBXT2oHi-Kt9ocRHkHLvq7gxxfKgR4Ayp4UqDVj-nm-YYbV6fj8LRzoy4nrTuofZ2R-gW49Q9d_4QoE4JcrVRsDJZE6kHol2oqiNNgn-hS9aswHudgtVIqBl_6S9hz_gCaWzlf2VI73yFD0HAnn7r2eQoJ1AiKNrsSufUS4QDmhJscFuuH29Ue9FK68Vw"
            className="w-20 h-24 md:block hidden "
            alt=""
          />
          <div className="md:mt-0 mt-5">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Countdown
                <br />
                to Chaos
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgM5oinAQ_UE6Rcmfl2dDMRc-g65R8bNUn0oZrAqGXxombtAkz8qomvTEP-qX5G4om99zF1AbjTcAQT6jO-iDDpa4saCQmCcZ2TB1XTwxI-Yu3uc0c9ia8fN6VsZFwDkKClaYYcFldegCFeCMqEvEHUISfwWjrBLJP-a3E1sXswP_KD7gx570VcEtIGmEA"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiSKOMVa9qV_1KCRR2qdT-oKjqOQkcqaOeOaUzXkDKGIpQ9RNul1JkpjuFhID8bcBK39QXNEu-B2diXcC9a5BHH2Uva_EbUccSDcZ2fk6tZQ2n0x7lXhVSfwYc2ELby7_YMnoxZChWup_zDuXH6OxF3tNEvHrAhhCGcp8_-qD_z3PkzPB6F3O4AsfDmBWo"
            alt=""
            className="md:block hidden"
          />
        </div>
        <div className="flex  md:flex-row flex-col mt-10 md:mt-0 md:mx-52   justify-between space-x-3">
          <img
            className="h-60  w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi3r82ZGR4zoDRFFTVKnylk8xMoij_iirupnCQoWjJO-btuNQ6xZa7tDjBG89ExvCxmWKyT0WiQwlrLxLph2MipBiwh9Rx5v6OYnmgF8AS7JuF6FK4rYdF2R-HQdCJSO8TD7yQMVsNC0C_nUuOwZUV5NwYTN0NLGFJPYew2_vZCIMg-pCVRHNa2ymeGlKg"
            alt=""
          />

          <div className="flex md:flex-row flex-col space-x-2">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjyDVfmTYIC0QbectXKUlUtiwHfbiHCpua1AtVStBbs_GIXgAH4CqoSSR3EE5OMTzlLKa59XRn_1UcKjzNzCIvrAPS67GNRsFsVOpCMf2GCvZeeC4-hb7MgIZfWg9-iavxYhCAMccO-JnQfjReH7Iwo60k0951mtvIXafcccONCQWo1Xuf3PdYXstZx7LQ"
              className="h-60 w-auto md:block hidden"
              alt=""
            />
            <div>
              <div className="border-2 mx-10 md:mx-0 mt-5 md:mt-0 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
                <p className="text-xl text-center">
                  Battle for
                  <br />
                  Supremacy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  md:flex-row  items-center flex-col mx-5 md:mx-60   justify-between">
          <div className="md:mr-20">
            <a href="/lobby">
              <button className="border-2 w-60 mt-5 rounded-full border-l-8 py-2 px-3 border-[#9FC610] text-3xl">
                Play Now!!
              </button>
            </a>
          </div>
          <div>
            <div className="border- mt-5 md:mt-0 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Claim Your
                <br />
                NFT Prize
              </p>
              <div>
                <img
                  className="h-10 absolute mt-10   w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhCtP1iRRYCTIV8JZqseg-gQh63_qgz2hjvVe-zgkXe-42f7-QfkL7FwbLv_HQtBFAGpVU5gu98sfo7cGsmPKJTUX9pbv3r6Uu8fGZkjhXuFEUy-SEB6xiP7rjUOWMSJKbmh6-2XVYW53TxcF7ffnkgZcmvtNI4jBL8djH9XaRwxvzgbpsMlG1FxIzJauI"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjvDs5X51vKMddkwvsJ5HNXVk6mFVbw4aCp0dnbgywKvlplU_8xK5WI_XRaQ7Nt6qvhADqa15PfpenLsObkOkXUie9pEYQiAVJq6NziJFgzHnF2cGIRorJ8XiSg9YPdu0cEuxvDhVdl0hvco-U81mTzZjF0rZfCcQcjL2nsms7fGQG9XIrcKyXrJ8qqg9E"
              className="md:ml-20 mt-20"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#9FC610] mt-20 py-3">.</div>
      </div>
    </main>
  );
}
