type TextProps = {
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
    return (
        <p className='text-center text-white-400 font-medium leading-8 mb-8'>{children}</p>
    )
}

export default Text;