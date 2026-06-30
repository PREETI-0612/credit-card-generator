import "../App.css";

import { useState } from "react";

import { FaUser, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { MdScore } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
function Card() {
    const [UserName, setUserName] = useState("");
    const [UserAge, setAge] = useState("");
    const [UserCibil, setCibil] = useState("");
    const [UserCardDigit, setCardDigit] = useState("");
    const [UserIncome, setIncome] = useState("");
    const [Result, setResult] = useState("");
    const [Card, setCard] = useState(false);

    function Validaition() {
        const NameValue = UserName;
        const AgeValue = parseInt(UserAge);
        const CibilValue = parseInt(UserCibil);
        const DigitValue = parseInt(UserCardDigit);
        const IncomeValue = parseInt(UserIncome);

        if (
            NameValue === "" ||
            isNaN(AgeValue) ||
            isNaN(CibilValue) ||
            isNaN(DigitValue) ||
            isNaN(IncomeValue)
        ) {
            setResult("Please fill all fields");
        }
        else if (AgeValue < 18 || AgeValue > 55) {
            setResult("Not Eligible. Age must be 18 or above and less than 55");
        }
        else if (CibilValue < 700 || CibilValue > 900) {
            setResult("Not Eligible. Cibil must be greater than 700 and lower than 900");
        }
        else if (IncomeValue < 25000) {
            setResult("Not Eligible. Monthly Income must be greater than 25000rs");
        }
        else if (UserCardDigit.length !== 4) {
            setResult("Not Eligible. Card last four digit must be 4 digits");
        }
        else {
            setCard(true);
        }
    }

    function Reset() {
        setCard(false);
        setUserName("");
        setAge("");
        setIncome("");
        setCibil("")
        setCardDigit("")
        setResult("")

    }

    return (
        <>

            {!Card && (
                <div className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-black flex flex-col items-center justify-center p-6">

                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-extrabold text-white">
                            Credit Card Generator
                        </h1>

                        <p className="text-gray-400 mt-3 text-lg">
                            Check your eligibility and generate your virtual credit card instantly.
                        </p>
                    </div>

                    {/* Form */}

                    <div className="w-full max-w-md rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

                        <div className="mb-8">
                            <h1 className="text-4xl font-bold tracking-wide text-white">
                                Apply for Card
                            </h1>

                            <p className="text-gray-400 mt-3 text-sm">
                                Enter your details to continue
                            </p>
                        </div>

                        <div className="space-y-4">

                            <input
                                value={UserName}
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                            />

                            <div className="grid grid-cols-2 gap-4">

                                <input
                                    value={UserAge}
                                    onChange={(e) => setAge(e.target.value)}
                                    type="number"
                                    placeholder="Age"
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                                />

                                <input
                                    value={UserIncome}
                                    onChange={(e) => setIncome(e.target.value)}
                                    type="number"
                                    placeholder="Income"
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                                />

                            </div>

                            <input
                                value={UserCibil}
                                onChange={(e) => setCibil(e.target.value)}
                                type="number"
                                placeholder="CIBIL Score"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                            />

                            <input
                                value={UserCardDigit}
                                onChange={(e) => setCardDigit(e.target.value)}
                                type="text"
                                maxLength={4}
                                placeholder="Last 4 Digits"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                            />

                            {Result && (
                                <div className="text-red-400 text-sm">
                                    {Result}
                                </div>
                            )}

                            <button
                                onClick={Validaition}
                                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                            >
                                Generate Card
                            </button>

                        </div>

                    </div>

                </div>
            )}
            {/* creadit card */}

            {Card && (
                <>
                    <div className="w-full flex justify-center">
                        <a href="#" className="my-12 mx-2 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <div className="w-[480px] h-[320px] rounded-[28px] bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white p-8 shadow-[0_25px_80px_rgba(6,182,212,0.15)] border border-cyan-400/20 relative overflow-hidden">
                                <div className="flex flex-col gap-6">

                                    <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

                                    <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>


                                    <div className="flex justify-between items-center">

                                        <div>
                                            <p className="text-sm uppercase tracking-[2px] text-gray-400">
                                                Premium Banking
                                            </p>

                                            <h2 className="text-m font-bold mt-1">
                                                BANK OF INDIA
                                            </h2>
                                        </div>

                                        <div className="text-2xl">
                                            <FaWifi className="text-3xl rotate-90 text-white/70" />
                                        </div>


                                    </div>
                                    <div className="mt-4 w-16 h-12 rounded-xl bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-lg"></div>

                                    <div className="text-xlfont-semibold tracking-[4px] text-white">
                                        0210 8820 1150 {UserCardDigit}
                                    </div>

                                    <div className="flex justify-between">
                                        <div>
                                            <div className="text-xs opacity-40">CARD HOLDER</div>
                                            <div>{UserName}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs opacity-40">EXPIRES</div>
                                            <div>29/08</div>
                                            <div className="text-xl font-extrabold italic tracking-widest text-white/80 mt-1">
                                                VISA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                    </div>

                    <div className="block flex items-center justify-center">
                        <button
                            onClick={Reset}
                            className="px-8 py-3 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                        >
                            Regenerate
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default Card;
