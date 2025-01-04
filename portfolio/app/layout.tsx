import './globals.css';

export const metadata = {
  title: 'Merveille',
  description: 'Fullstack Developer and Analyst Programmer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background dark:bg-darkBackground text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
