import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  Button
} from "flowbite-react";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
// import logo from "@/images/logo.svg";
import { IframeMap } from "@/components/IframeMap";

export const FooterComponent = () => {
  return (
    <Footer container className="flex flex-col gap-6 lg:flex-row rounded-none">
      <div className="w-full  lg:w-1/2 overflow-hidden">
        <IframeMap />
      </div>
      <div className="w-full lg:w-1/2 text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between lg:flex-col lg:items-start">
           <div className="flex flex-row justify-between items-center lg:justify-start lg:gap-6 mb-4">
             <FooterBrand
            href="https://flowbite.com"
            src="images/logo.svg"
            alt="Logo Los Cenizaros"
               className="mb-0"
          />
         
            <Button
              className="px-3"
              color="light"
              onClick={() => {
                  window.open("https://wa.me/50660560060");
              }}
            >
              <SiWhatsapp className="mr-2 h-5 w-5" />
              6056-0060
            </Button>
          </div>
          <FooterLinkGroup>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/menu">Menú</FooterLink>
            <FooterLink href="/hosting">Hospedaje</FooterLink>
            <FooterLink href="/contact">Contáctenos</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div className="w-full flex flex-row items-center justify-between">
          <FooterCopyright href="#" by="Los Cenizaros" year={2025} />
          <div className="flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.facebook.com/Cenizaros"
              icon={BsFacebook}
            />
            <FooterIcon
              href="https://www.instagram.com/balneario_los_cenizaros/"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};
