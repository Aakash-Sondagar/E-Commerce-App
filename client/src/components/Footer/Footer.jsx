import React from "react";
import { Link } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="mx-52 mt-24 mb-5">
      <div className="flex gap-12">
        <div className="flex flex-col justify-between gap-3 text-justify text-sm text-gray-500">
          <div className="text-lg font-medium text-gray-600">Categories</div>
          <div>Men</div>
          <div>Women</div>
          <div>Children</div>
          <div>New Arrivals</div>
        </div>
        <div className="flex flex-col justify-between gap-3 text-justify text-sm text-gray-500">
          <div className="text-lg font-medium text-gray-600">Links</div>
          <div>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div>
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div>
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
          <div>Cart</div>
        </div>
        <div className="flex flex-col gap-3 text-justify text-sm">
          <div className="text-lg font-medium text-gray-600">About</div>
          <div className="text-gray-500">
            This e-commerce application is a project built for educational
            purposes. It utilizes{" "}
            <a className="font-semibold" href="https://react.dev/">
              React
            </a>
            ,{" "}
            <a className="font-semibold" href="https://strapi.io/">
              Strapi
            </a>{" "}
            for content management, and{" "}
            <a className="font-semibold" href="https://stripe.com/in">
              Stripe
            </a>{" "}
            for secure payments.
          </div>
        </div>
        <div className="flex flex-col gap-3 text-justify text-sm">
          <div className="text-lg font-medium text-gray-600">Contact</div>
          <div className="text-gray-500">
            Let's connect! I'm always eager to discuss new projects, collaborate
            on interesting ideas, or simply chat about technology. Feel free to
            reach out to me via
            <br />
            <a
              href="mailto:aakashsondar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon
                className="cursor-pointer mr-1 mt-1 h-4 w-4"
                fontSize="large"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-sondagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                className="cursor-pointer mr-1 mt-1 h-4 w-4 "
                fontSize="large"
              />
            </a>
            <a
              href="https://github.com/Aakash-Sondagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                className="cursor-pointer	mx-1 mt-1 h-4 w-4"
                fontSize="large"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-12">
        <div className="flex items-center">
          <div className="text-blue-500 font-bold text-2xl">Retail Therapy</div>
          <div className="ml-5 text-xs text-gray-500">
            © Copyright 2024. All Rights Reserved
          </div>
        </div>
        <div>
          <img className="h-12" src="/img/payment.png" alt="Payment Options" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
