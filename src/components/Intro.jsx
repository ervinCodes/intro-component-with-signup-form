import { React } from "react";
import { useState } from "react";

export default function Intro() {
  // create state variable for error messages
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [invalidEmailError, setInvalidEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // create handleErrors function
  function handleSubmit(e) {
    e.preventDefault();
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstNameInput === "") {
      setFirstNameError("First Name cannot be empty");
    } else {
      setFirstNameError("") // reset error
    }

    if (lastNameInput === "") {
      setLastNameError("Last Name cannot be empty");
    } else {
      setLastNameError(""); // reset error
    }
    
    if (emailInput === "") {
      setEmailError("Email cannot be empty");
      setInvalidEmailError("");
    } else if (!emailInput.match(emailRegex)) {
      setInvalidEmailError("Looks like this is not an email");
      setEmailError("");
      setEmailInput("")
    } else {
      setEmailError(""); // Reset error state
      setInvalidEmailError(""); // Reset error state
    }
    
    if (passwordInput === "") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }
  }

  return (
    <section className="h-full w-full bg-coral-pink font-poppins">
      <div className='bg-[url("../images/bg-intro-mobile.png")] bg-no-repeat bg-cover bg-center h-full w-100'>
        <div className="px-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-full">
          {/* First Column */}
          <div className="lg:w-1/2 lg:pl-96 lg:pr-24">
            <div className="text-white text-center lg:text-left px-10 lg:px-0 text-2xl lg:text-5xl pt-16 font-semibold">
              Learn to code by watching others
            </div>
            <p className="text-white text-center lg:text-left leading-7 text-base tracking-wider lg:tracking-widest font-medium">
              See how experienced developers solve problems in real-time. Watching
              scripted tutorials is great, but understanding how developers think
              is invaluable.
            </p>
          </div>
          {/* Second Column */}
          <div className="lg:w-1/2 lg:pr-72">
              <div className="signup-info-card bg-ultra-violet mt-12 text-center py-1 px-16 rounded-xl">
              <p className="text-white">
                <span className="font-bold leading-8 tracking-wide">
                  Try it free 7 days
                </span>{" "}
                then $20/mo. thereafter
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="signup-card bg-white mt-5 flex flex-col justify-center items-center rounded-xl py-5 px-8 gap-3"
            >
              <input
                value={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
                type="text"
                id="first-name"
                placeholder={firstNameError ? "" : "First Name"}
                className={`w-full p-3 border rounded-lg font-semibold ${
                  firstNameError ? "border-red-500" : "border-slate-200"
                }`}
              />
              {firstNameError && (
                <div className="ml-auto relative">
                  <p className="m-0 text-xs text-red-600">{firstNameError}</p>
                  <svg
                    className="absolute  right-0 bottom-9"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
              <input
                onChange={(e) => setLastNameInput(e.target.value)}
                type="text"
                placeholder={lastNameError ? "" : "Last Name"}
                id="last-name"
                className={`w-full p-3 ${
                  lastNameError ? "border-red-600" : "border-slate-200"
                } border text-slate
                -100 rounded-lg font-semibold`}
              />
              {lastNameError && (
                <div className="ml-auto relative">
                  <p className="m-0 text-xs text-red-600">{lastNameError}</p>
                  <svg
                    className="absolute  right-0 bottom-9"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
              {/* Email */}
              {
                invalidEmailError ? (
                  <>
                  <div className="w-full pr-6 gap-3">
                    <input
                    onChange={(e) => setEmailInput(e.target.value)}
                    type="text"
                    placeholder={invalidEmailError ? "email@example/com" : "Email Address"}
                    id="email"
                    className={`w-full p-3 ${
                      invalidEmailError ? "border-red-600" : "border-slate-200"
                    } border text-slate
                    -100 rounded-lg font-semibold ${invalidEmailError && "placeholder:text-red-600"}`}
                    />
                  </div>
                  <div className="ml-auto relative">
                      <p className="m-0 text-xs text-red-600 text-right">{invalidEmailError}</p>
                      <svg
                      className="absolute right-0 bottom-9"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                      </svg>
                    </div>
                  </>
                  
                ) : (
                  <input
                  onChange={(e) => setEmailInput(e.target.value)}
                  type="text"
                  placeholder={emailError ? "" : "Email Address"}
                  id="email"
                  className={`w-full p-3 ${
                    emailError ? "border-red-600" : "border-slate-200"
                  } border text-slate
                  -100 rounded-lg font-semibold`}
                  />
                )
              }
              {emailError && (
                <div className="ml-auto relative">
                  <p className="m-0 text-xs text-red-600">{emailError}</p>
                  <svg
                    className="absolute right-0 bottom-9"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
              {/* Password */}
              <input
                onChange={(e) => setPasswordInput(e.target.value)}
                type="password"
                placeholder={passwordError ? "" : "Password"}
                className={`w-full p-3 ${
                  passwordError ? "border-red-600" : "border-slate-200"
                } border text-slate
                -100 rounded-lg font-semibold`}
              />
              {passwordError && (
                <div className="ml-auto relative">
                  <p className="m-0 text-xs text-red-600">{passwordError}</p>
                  <svg
                    className="absolute  right-0 bottom-9"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}

              <button
                type="submit"
                className="bg-emerald px-10 py-4 border-0 rounded text-white w-full"
              >
                CLAIM YOUR FREE TRIAL
              </button>
              <p className="text-gray-300 text-xs text-center m-0">
                By clicking the button, you are agreeing to our{" "}
                <span className="text-coral-pink font-semibold">
                  Terms and Services
                </span>
              </p>
            </form>
          </div>
          

          
        </div>
      </div>
    </section>
  );
}
