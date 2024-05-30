import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    full?: boolean;
}

const Button = ({ type, title, full }: ButtonProps) => {
    return (
        <button className="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <label className=" text-white colobold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    )
}

export default Button