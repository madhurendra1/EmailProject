import { Details } from "./Details";
import { Inbox } from "./Inbox";
import { EmailDetail } from "./EmailDetail";
import { NoMail } from "./NoMail";
import { useColorMode } from "@chakra-ui/react";  // Assuming "theme" is where you import useColorMode

export const Content = ({ data, contentName }) => {
    const { colorMode } = useColorMode();

    return (
        <div className={`h-screen ${colorMode === "light" ? "bg-white" : "bg-black"}`}>
            {(contentName === 'Mail' || contentName === 'Inbox') ? (
                <div className="flex h-full">
                    <Inbox emails={data} colorMode={colorMode} />
                    <div className={`w-3/5 ${colorMode === "light" ? "bg-white" : "bg-black"}`}
                    >
                        <EmailDetail />
                    </div>
                    <Details data={data} />
                </div>
            ) : (
                <NoMail />
            )}
        </div>
    );
};
