import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/favicon.ico" width={40} height={40} alt="Minimal UI Logo" />
    </Link>
  );
};

export default Logo;
