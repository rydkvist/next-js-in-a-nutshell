import Link from "next/link";

type StyledLinkProps = {
    href: string;
    children: React.ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children }) => (
    <Link
        href={href}
        className={'inline-flex items-center text-lg font-medium hover:text-primary-400 hover:underline hover:text-cyan-400 p-1 mb-1'}
    >
        {children}
    </Link>
);

export default StyledLink;