import { useColorMode } from "@chakra-ui/react";
import emailImg from "../Images/email.png";
import sendImg from "../Images/send.png";
import { HiOutlineMailOpen } from "react-icons/hi";

const user = {
    "Name": "Orlando",
    "Contact No": "+54-9062827869",
    "Email Id": "orlando@gmail.com",
    "LinkedIn": "linkedin.com/in/timvadde",
    "Company Name": "Reachinbox"
};

export const Details = () => {
    const { colorMode } = useColorMode();

    return (
        <div className={`w-1/4 bg-${colorMode === "light" ? "white" : "black"} border-l border-solid border-${colorMode === "light" ? "gray-200" : "gray-700"} pt-4`}>
            <div className={`bg-${colorMode === "light" ? "white" : "black"} p-2 mb-4`}>
                <h2 className={`font-semibold py-2 ${colorMode === "light" ? "text-gray-700 bg-gray-300" : "text-white bg-gray-700"} rounded-xl text-left pl-4`}>Lead Details</h2>
                <div className="space-y-4 mt-4 p-4">
                    {Object.entries(user).map(([key, value]) => (
                        <div key={key} className={`flex justify-between text-${colorMode === "light" ? "gray-600" : "gray-400"}`}>
                            <span>{key}</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`bg-${colorMode === "light" ? "white" : "black"} rounded-lg p-2`}>
            <h2 className={`font-semibold text-left pl-4 py-2 ${colorMode === "light" ? "text-gray-700 bg-gray-300" : "text-white bg-gray-700"} rounded-xl w-full`}>Activities</h2>
                <div className="h-4/5 space-y-4 my-2 p-5 px-7 flex flex-col justify-around" >
                    <h3 className="text-left">Campaign Name</h3>
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center justify-between">
                            <div className={`flex items-center space-x-2 space-y-2 text-${colorMode === "light" ? "gray-700" : "white"}`}>
                                <div className={`w-9 h-9 rounded-full border border-${colorMode === "light" ? "gray-200" : "gray-600"} flex items-center justify-center`}>
                                    <img src={emailImg} alt="Email" />
                                </div>
                                <div className="text-left">
                                    <span>Step {step}: Email</span>
                                    <div className="flex text-left items-center space-x-1">
                                        <img src={sendImg} alt="Send" className="w-4 h-4" />
                                        {step ===1 &&(
                                            <span>Sent 3rd, Feb</span>
                                        )}
                                        {step !== 1 && (
                                            <div className={`w-0.5 h-4 bg-${colorMode === "light" ? "gray-200" : "gray-600"}`}></div>
                                        )}
                                        {step !== 1 && (
                                            <HiOutlineMailOpen className={`text-yellow-400 w-6 h-6`} />
                                            
                                        )}
                                        {step !== 1 &&(
                                            <span>Read 3rd, Feb</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
