import Input from '../Input/Input'

export default () => {
    return (
        <div className="mt-20 max-w-xl mx-8 sm:mx-auto">
            <div className="text-4xl text-center font-semibold mb-12">
                Contact Us
            </div>
            <form className="space-y-4">
                <div className="space-y-3 sm:flex sm:space-x-3 sm:space-y-0">
                    <div className="space-y-2">
                        <label className="block text-gray-600" for="first-name">
                            First name
                        </label>
                        <Input
                            className="w-full"
                            id="first-name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-gray-600" for="last-name">
                            Last name
                        </label>
                        <Input
                            className="w-full"
                            id="last-name"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600" for="email">
                        Email
                    </label>
                    <Input
                        className="w-full"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600" for="number">
                        Phone Number
                    </label>
                    <Input
                        className="w-full"
                        type="number"
                        id="number"
                        placeholder="+1 (555) 487-6543"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-gray-600" for="message">
                        Message
                    </label>
                    <textarea id="message" className="outline-none border p-2.5 rounded-md w-full h-36 focus:border-indigo-500">
                    </textarea>
                </div>
                <div>
                    <button className="py-3 w-full text-white bg-indigo-600 outline-none rounded-md">
                        Sumbit
                    </button>
                </div>
            </form>
        </div>
    )
}