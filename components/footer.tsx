import Image from "next/image";

function Footer() {
  return (
    <div className="absolute botton-0 flex flex-col lg:flex-row justify-end pt-8 mt-12 pb-4  items-center dark:border-t-zinc-800 border-t-zinc-200 border-t">
      {/* <div className="flex flex-col lg:flex-row justify-end lg:justify-between pt-32 pb-4  items-center">
              <p>Built with&nbsp;: &nbsp;</p>
              <div className="flex gap-4">
                  <Image alt="" src={'/favicon.png'} width={40} height={40} className="h-4 w-4"/>
                  <Image alt="" src={'/vercel.svg'} width={40} height={40} className="h-4 w-4"/>
              </div>
          </div> */}

      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        ©️ Copyright for design belongs to Victor Eke
      </p>
    </div>
  );
}

export default Footer;
