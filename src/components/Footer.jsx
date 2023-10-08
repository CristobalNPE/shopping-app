import { LuTwitter, LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-10 border-t-1 bg-foreground px-8 py-14  text-background  light  sm:gap-36 md:grid-cols-3 ">
      <div className="flex h-full  flex-col  ">
        <div className="flex  grow flex-col ">
          <h1 className="mb-5 text-xl  font-bold ">Shopper&#39;s Choice</h1>
          <p className="text-ellipsis text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, debitis.
          </p>
        </div>
        <p className="text-sm">
          &copy; 2023 Cristobal Pulgar Estay.
          <br /> All rights reserved.
        </p>
      </div>

      <div className="">
        <h1 className="mb-5 text-xl  font-bold">About us</h1>
        <p className="text-ellipsis text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni
          sapiente asperiores, mollitia laborum, error, assumenda nostrum
          dignissimos sint hic omnis! Commodi doloribus placeat voluptate
          excepturi. Laudantium vero minima molestias est nihil voluptates eum
          non laboriosam.
        </p>
      </div>

      <div className="flex w-full flex-col  ">
        <h1 className="mb-5 text-xl  font-bold">Social Media</h1>
        <div className="flex flex-col gap-3">
          <h4 className="flex cursor-pointer items-center gap-2 text-lg">
            <LuTwitter className="text-2xl " />
            Twitter
          </h4>
          <h4 className="flex cursor-pointer items-center gap-2 text-lg">
            <LuFacebook className="text-2xl " />
            Facebook
          </h4>
          <h4 className="flex cursor-pointer items-center gap-2 text-lg">
            <LuInstagram className="text-2xl " />
            Instagram
          </h4>
          <h4 className="flex cursor-pointer items-center gap-2 text-lg">
            <LuYoutube className="text-2xl " />
            Youtube
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
