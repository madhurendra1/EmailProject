import { MdRefresh } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const getDate = (data) => {
    let date = new Date(data);
    let temp = date.toDateString().split(" ");
    return `${temp[1]} ${temp[2]}`;
};

// const resetList = async(token) =>{
//     try{
//       const res = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/reset`,{
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": 'application/json'
//         },
//       })
//       return res;
//     }catch(err){
//       console.log("data not fetched")
//     }
// }

export const Inbox = ({ emails, colorMode }) => {
    const navigate = useNavigate();

    const handleClick = (threadId) => {
        navigate(`/onebox/${threadId}`);
    };

    return (
        <div className={`w-1/5 border-r p-3 ${colorMode === "light" ? "border-gray-300 bg-white text-black" : "border-gray-700 bg-black text-white"}`}>
            {/* top section */}
            <div className="flex justify-between items-center pb-2">
                <div className={`flex flex-col gap-2 items-center space-x-2 ${colorMode === "light" ? "bg-white" : "bg-black"}`}>
                    <select className={`text-blue-500 text-xl ${colorMode === "light" ? "bg-white" : "bg-black"}`}>
                        <option value="all_inbox">All Inbox(s)</option>
                    </select>
                    <span className={`text-gray-500 text-sm ${colorMode === "light" ? "dark:text-gray-400" : ""}`}>
                        <span className="font-semibold" style={{ color: colorMode === "light" ? "#3b4045" : "white" }}>
                            25/25
                        </span>{" "}
                        Inboxes selected
                    </span>
                </div>
                <div className="w-8 h-8 flex justify-center items-center rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <MdRefresh />
                </div>
            </div>

            {/* mid section */}
            <div className="space-y-2">
                <div className="px-2 py-1">
                    <div className={`flex items-center p-2 border ${colorMode === "light" ? "border-gray-200" : "border-gray-700"} rounded-xl`}>
                        <div className="px-2">
                            <CiSearch className="text-gray-700 h-6 w-6" />
                        </div>
                        <input
                            className={`w-full bg-transparent focus:outline-none ${colorMode === "light" ? "text-black" : "text-white"}`}
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 w-1/2">
                        <span className={`px-2 py-1 rounded ${colorMode === "light" ? "bg-white" : "bg-black"} text-blue-500`}>
                            26
                        </span>
                        <span className={`text-sm ${colorMode === "light" ? "text-gray-700" : "text-white"}`}>
                            New Replies
                        </span>
                    </div>
                    <select className={`text-sm ${colorMode === "light" ? "text-gray-700 bg-white"  : "text-white bg-black"} focus:outline-none`}>
                        <option value="newest">Newest</option>
                    </select>
                </div>

                {/* Bottom section */}
                <div className={`border-t ${colorMode === "light" ? "border-gray-300" : "border-gray-700"}`}>
                    {emails &&
                        emails.map((item, i) => (
                            <div
                                key={i}
                                className={`flex flex-col justify-center border-b ${colorMode === "light" ? "border-gray-300" : "border-gray-700"} py-3 cursor-pointer`}
                                onClick={() => handleClick(item.threadId)}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className={`text-${colorMode === "light" ? "gray-700" : "white"} font-semibold`}>
                                        {item.fromEmail}
                                    </span>
                                    <span className={`text-xs ${colorMode === "light" ? "text-gray-500" : "text-gray-400"}`}>
                                        {getDate(item.sentAt)}
                                    </span>
                                </div>
                                <div className={`font-normal text-sm ${colorMode === "light" ? "text-gray-900" : "text-white"}`}>
                                    {item.subject}
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <button className={`text-xs px-2 py-1 rounded bg-green-300 text-green-700`}>
                                        Interested
                                    </button>
                                    <button className={`text-xs px-2 py-1 rounded ${colorMode === "light" ? "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white" : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white"}`}>
                                        Campaign Name
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
