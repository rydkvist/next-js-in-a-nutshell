import { FC } from "react";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            <section className="flex flex-col items-center min-h-screen p-24">
                {children}
            </section>
        </main>
    )
}

export default Layout;