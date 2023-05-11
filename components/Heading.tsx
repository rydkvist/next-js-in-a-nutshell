type HeadingProps = {
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <h1 className="text-3xl text-gray-200 mb-6 font-semibold text-center">{children}</h1>
    )
}

export default Heading;