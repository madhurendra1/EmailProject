import { FaHome, FaSearch, FaEnvelope, FaList } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import whitelogo from "../Images/whiteLogo.png";
import blacklogo from "../Images/blackLogo.png";
import { useColorMode } from "@chakra-ui/react";

const listItems = [
    { name: "Home", icon: FaHome },
    { name: "PersonSearch", icon: FaSearch },
    { name: "Mail", icon: FaEnvelope },
    { name: "Inbox", icon: FaInbox },
    { name: "List", icon: FaList },
    { name: "send", icon: IoIosSend }
];

export const Sidebar = ({ contentName, setContentName }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleContentName = (name) => {
        setContentName(name);
    }

    return (
        <div className={`w-16 min-h-screen flex flex-col border-r border-solid ${colorMode === 'light' ? 'border-gray-300' : 'border-gray-700'} p-1`}>
            <div className="w-16 h-16 rounded-md">
                <div className="w-16 h-16 flex items-center justify-center">
                    <img src={colorMode === 'light' ? blacklogo : whitelogo} alt="logo" className="w-10 h-8 rounded-md" />
                </div>
            </div>

            <div className="w-16 flex-grow">
                <div className="w-16 flex flex-col justify-center items-center gap-8 p-4">
                    {listItems.map((item, i) => (
                        <div key={i}>
                            <item.icon
                                className={`w-8 h-8 cursor-pointer ${colorMode === 'light' ? 'text-gray-500' : 'text-gray-400'}`}
                                onClick={() => handleContentName(item.name)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-16 p-2">
                <div className="w-8 h-8 rounded-full bg-green-700 flex justify-center items-center fixed bottom-4" onClick={toggleColorMode}>
                    <p className="text-white">AC</p>
                </div>
            </div>
        </div>
    );
}
