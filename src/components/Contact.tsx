import React, { useState } from "react";
import * as nodemailer from "nodemailer";
export default function Contact() {
  const [data, setData] = useState({
    service: process.env.EMAIL_SERVICE,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await console.log(name, email, phonenumber);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-2">Kapcsolat</h1>
      <p className="mb-5">Lépjen velem kapcsolatba!</p>
      <form className="my-auto">
        <input
          type="text"
          placeholder="Név"
          id="name"
          className="border-b-2 border-b-gray-500 p-2 focus:border-b-sky-600 focus:outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <br />
        <input
          type="email"
          placeholder="E-Mail cím"
          id="email"
          className="border-b-2 border-b-gray-500 p-2 focus:border-b-sky-600 focus:outline-none mt-5"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <br />
        <input
          type="text"
          placeholder="Telefonszám"
          id="phonenumber"
          className="border-b-2 border-b-gray-500 p-2 focus:border-b-sky-600 focus:outline-none mt-5"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhonenumber(e.target.value)
          }
        />
        <br />
        <button
          onClick={() => sendEmail}
          className="mt-5 bg-green-500 pr-10 pl-10 pt-2 pb-2 rounded-full text-white"
        >
          Elküldés
        </button>
      </form>
    </div>
  );
}
