import { googleSans } from './fonts';
import './globals.scss';
import { Header } from './Header';

import 'antd/dist/antd.variable.min.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={googleSans.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
