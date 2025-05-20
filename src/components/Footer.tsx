import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,  
} from "flowbite-react";

import {  BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "@/images/logo.svg"
import {IframeMap} from "@/components/IframeMap"

export const FooterComponent = () => {
  return (
    <Footer container className="flex flex-col gap-6 lg:flex-row" >
      <div className="w-full  lg:w-1/2 overflow-hidden">
        <IframeMap />
      </div>
      <div className="w-full lg:w-1/2 text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src={logo}
            alt="Logo Los Cenizaros"            
          />
          <FooterLinkGroup>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/menu">Menú</FooterLink>
            <FooterLink href="/hosting">Hospedaje</FooterLink>
            <FooterLink href="/contact">Contáctenos</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
          <FooterCopyright href="#" by="Los Cenizaros" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
};