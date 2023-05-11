import Link from "next/link";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => (
    <Link href={href} className='mt-12 text-md font-medium text-white bg-transparent border border-zinc-400 rounded-md px-4 py-2 hover:opacity-75'>
        {children}
    </Link>
)

export default ButtonLink;