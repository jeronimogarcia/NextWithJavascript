import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={'vercelLogo'}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={'center'}>
        <Image
          className={'logo'}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={'thirteen'}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={'grid'}>
        <Link href="/about" className={'card'} rel="noopener noreferrer">
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Instantly go to About page</p>
        </Link>

        <Link href="/contact" className={'card'} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Contact <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Instantly go to Contact page</p>
        </Link>
      </div>
    </MainLayout>
  );
}
