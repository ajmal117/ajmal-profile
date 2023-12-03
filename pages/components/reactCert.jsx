import Link from "next/link";
import React from "react";
import Image from "next/image";
import reactPic from "../../public/reactPic.png";

function ReactCert() {
  return (
    <>
      <div className="my-2 mb-8 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <span className="border border-red-300 p-1 px-2 font-semibold rounded-md  my-4 hover:bg-slate-500 hover:text-slate-100 text-slate-500 float-right">
          <Link href="/" passHref >
            <a>Home Page</a>
          </Link>
        </span>
        <div className="">
          <Image src={reactPic} priority alt="react certificate" />
        </div>
        <div>
          <button className="p-1 text-red-500 rounded-md border-2 border-red-700 cursor-pointer hover:bg-gray-300">
            <a href="/reactFile.pdf" download={"React_certificate"}>
              Download Certificate
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ReactCert;
