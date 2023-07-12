import './globals.css';

export const metadata = {
    title: 'Twitter - Clone',
    description: 'Twitter clone project',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>
                <div>
                    <header>header</header>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
