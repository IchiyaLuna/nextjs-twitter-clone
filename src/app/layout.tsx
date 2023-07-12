// Styles
import './globals.css';
// Metadata
export const metadata = {
    title: 'Twitter - Clone',
    description: 'Twitter clone project',
};
// Layout
const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
};
// Export
export default RootLayout;
