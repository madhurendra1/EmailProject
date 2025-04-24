import { useState } from "react";
import axios from 'axios';
import { useColorMode, useToast } from "@chakra-ui/react";

const postData = async (threadId, data, token) => {
    try {
        const res = await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

const iniState = {
    "toName": "Mitrajit",
    "to": "",
    "from": "",
    "fromName": "Mitrajit",
    "subject": "",
    "body": "",
    "references": [
        "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
        "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
        "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
        "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
    ],
    "inReplyTo": "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
};

export const ReplyPopup = ({ threadId, token, showreplyBox }) => {
    const [data, setData] = useState(iniState);
    const [showReplyBox, setShowReplyBox] = useState(showreplyBox);
    
    const toast = useToast();
    const { colorMode } = useColorMode();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = () => {
        if (data.to && data.from) {
            postData(threadId, data, token)
                .then(res => {
                    console.log(res);
                    setData(iniState);
                    toast({
                        title: "Reply successful",
                        status: 'success',
                        isClosable: true
                    });
                })
                .catch(err => {
                    console.log(err);
                    toast({
                        title: err.message,
                        status: 'error',
                        isClosable: true
                    });
                });
        } else {
            toast({
                title: "Please fill in both To and From fields",
                status: 'error',
                isClosable: true
            });
        }
    };

    return (
        <div className="relative">
            <button
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white py-2 px-4 rounded-lg fixed left-1/4 bottom-7"
                onClick={() => setShowReplyBox(!showReplyBox)}
            >
                Reply
            </button>
            {showReplyBox && (
                <div className={`fixed bottom-20 left-1/4 ${colorMode === 'light' ? 'text-gray-800 border-gray-300 bg-white' : 'text-gray-200 border-gray-600 bg-gray-800'} border bg-white font-semibold border rounded-lg w-1/2 h-[62%]`}>
                    <div className={`text-black h-11 font-semibold rounded-t-lg ${colorMode === 'light' ? 'border-gray-300 bg-grey-200 text-black' : 'bg-gray-700 border-gray-900 text-white'} p-3`} >
                        Reply
                    </div>
                    <div className={`p-4 h-[78%] ${colorMode === 'light' ? 'border-gray-300 bg-grey-200 text-black' : 'bg-gray-700 border-gray-900 text-grey-100'}`}>
                        <input
                            type="email"
                            name="to"
                            value={data.to}
                            onChange={handleChange}
                            className= {`border-b ${colorMode === 'light' ? 'border-gray-300 bg-grey-200 text-black' : 'bg-gray-700 border-gray-900 text-grey-100 '} focus:outline-none w-full py-2 px-4 bg-transparent`}
                            placeholder="to: jeane@icloud.com"
                        />
                        <input
                            type="email"
                            name="from"
                            value={data.from}
                            onChange={handleChange}
                            className= {`border-b ${colorMode === 'light' ? 'border-gray-300 bg-grey-200 text-black' : 'bg-gray-700 border-gray-900 text-grey-100 '} focus:outline-none w-full py-2 px-4 bg-transparent`}
                            placeholder="from: peter@reachinbox.com"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={data.subject}
                            onChange={handleChange}
                            className={`focus:outline-none w-full py-2 px-4 bg-transparent ${colorMode === 'light' ? 'text-black' : 'text-grey-100 '}`}
                            placeholder="Warmup Welcome"
                        />
                        <textarea
                            name="body"
                            value={data.body}
                            onChange={handleChange}
                            className= {`resize-none h-4/6 border ${colorMode === 'light' ? 'border-gray-300 bg-grey-200 text-black' : 'bg-gray-700 border-gray-900 text-grey-100 '} focus:outline-none w-full py-2 px-4 bg-transparent`}
                            placeholder="Hi Jeanne,"
                        />
                    </div>
                    <div className={`flex gap-5 items-center border-t border-gray-300 dark:border-gray-600 p-2 ${colorMode === 'light' ? 'border-gray-300 bg-grey-200 ' : 'bg-gray-700 border-gray-900 '} rounded-b-lg`}>
                        <button
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white py-2 px-4 rounded-lg font-semibold"
                        >
                            Send
                        </button>
                        <button className="text-gray-700 dark:text-gray-400">
                            Variables
                        </button>
                        <button className="text-gray-700 dark:text-gray-400">
                            Preview Emails
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
