import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div
      className="text-center h-screen w-screen flex items-center justify-center relative"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="bg-black w-screen h-40 flex items-center justify-center relative">
        <img
          className="w-16 md-20 lg:w-24 bg-white rounded-full mr-7 md:mr-12 "
          src="/Assets/logo.png"
          alt="spotify logo"
        />
        <h1
          className="text-4xl lg:text-9xl md:text-7xl  uppercase font-bold"
          style={{
            color: "#1ed760"
          }}
        >
          spotify
        </h1>

        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="absolute top-auto w-20 h-20 bg-transparent right-10 cursor-pointer"
          >
            <ChevronDoubleRightIcon
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="w-20 h-20 animate-pulse"
              style={{ color: "#1ed760" }}
            />
          </div>
        ))}
      </div>
      <footer
        className="absolute bottom-0 w-96 h-16 bg-gray-300 rounded-t-md"
        style={{
          textAlign: "center",
          display: "flex",
          marginTop: "1rem",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <a
          href="https://github.com/Ajay-056/Spotify-Clone-NextJS-12"
          target="_blank noreferrer"
        >
          <Image src="/Assets/github.png" alt="github" height={40} width={40} />
        </a>
        <a href="https://www.twitter.com/balaajay19" target="_blank noreferrer">
          <Image
            src="/Assets/twitter.png"
            alt="twitter"
            height={40}
            width={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ajay-krishna-065a1a162"
          target="_blank noreferrer"
        >
          <Image
            src="/Assets/linkedin.png"
            alt="linkedin"
            height={40}
            width={40}
          />
        </a>
      </footer>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}
