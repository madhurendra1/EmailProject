import { useColorMode } from "@chakra-ui/react";
import { FiMoon } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className={`w-full border border-solid ${colorMode === 'light' ? 'border-gray-300 bg-white' : 'border-gray-900 bg-gray-900'} py-6 px-8 flex justify-between items-center`}>
            <h1 className={`text-lg font-semibold ${colorMode === 'light' ? 'text-gray-700' : 'text-white'}`}>Onebox</h1>
            <div className="flex justify-between gap-5">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="change-theme"
                        className="hidden"
                        onChange={toggleColorMode}
                        checked={colorMode === 'dark'}
                    />
                    <label htmlFor="change-theme" className={`mr-6 flex items-center justify-between ${colorMode === 'dark' ? 'bg-black' : 'bg-gray-200'} border border-solid ${colorMode === 'dark' ? 'border-gray-800' : 'border-gray-300'} rounded-full p-1 px-3 py-2 cursor-pointer`}>
                        {(colorMode === 'dark') ? (
                            <>
                                <BsCircleFill className="w-4 h-4 text-white-300 mr-1" />
                                <MdOutlineWbSunny className="w-4 h-4 ml-1 text-yellow-400" />
                            </>
                        ) : (
                            <>
                                <FiMoon className="w-4 h-4 text-yellow-400 mr-1" />
                                <BsCircleFill className="w-4 h-4 ml-1 text-white" />
                            </>
                        )}
                    </label>
                </div>

                <select className={`border border-solid rounded px-4 py-2 ${colorMode === 'light' ? 'bg-gray-200' : 'bg-gray-800'} border-gray-300 focus:outline-none`}>
                    <option value="tims_workspace">Tim's Workspace</option>
                </select>
            </div>
        </div>
    );
};
