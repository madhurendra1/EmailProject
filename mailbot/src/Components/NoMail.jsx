import no_mail from "../Images/No_Mail.png";

export const NoMail = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-3/5 mt-20 text-center">
                <img className="w-2/5 mx-auto" src={no_mail} alt="No messages" />
                <div className="mt-12">
                    <h1 className="text-3xl font-semibold text-black dark:text-white">It's the beginning of a legendary sales pipeline</h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">When you have inbound emails, you'll see them here.</p>
                </div>
            </div>
        </div>
    );
};
