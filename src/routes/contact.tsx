import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { Email } from "@/utils/emailType";
import { useSendEmail } from "@/hooks/useSendEmail";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

type Formtype = {
  interest: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: Formtype = {
  interest: "hospedaje",
  name: "",
  email: "",
  subject: "",
  message: "",
};

function RouteComponent() {
  const [formData, setFormData] = useState<Formtype>(initialState);
  const [isSendEmail, setIsSendEmail] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleInterestChange(value: string) {
    setFormData((prevData) => {
      return {
        ...prevData,
        interest: value,
      };
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // loscenizarosdp@gmail.com
    const dataToSend: Omit<Email, "to"> = {
      from: "Los Cenizaros <loscenizaros@qr.xtremeart.net>",
      subject: `${formData.subject}`,
      html: `<p>Mi nombre es: ${formData.name}, mi correo es ${formData.email}</p> <p>Estoy interesado en: ${formData.interest} </p>
      ${formData.message}
      <p>`,
    };
    try {
      setIsSendEmail(true);
      const response = await useSendEmail(
        "https://api.xtremeart.net/api/send",
        dataToSend,
      );

      if (response.ok) {
        setFormData(initialState);
        toast.success(
          "Correo enviado... Le responderemos lo más pronto posible, muchas gracias!",
          {
            position: "bottom-center",
          },
        );
      } else {
        toast.error("Error en los datos!", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      toast.error("Error en los datos!", {
        position: "bottom-center",
      });
    } finally {
      setIsSendEmail(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="max-w-6xl max-lg:max-w-3xl mx-auto bg-white">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
          <div>
            <h1 className="text-4xl font-semibold text-green-500 mt-6">
              Contáctanos
            </h1>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
              Es un gusto atenderles, tenemos el espacio ideal para tus
              vacaciones o eventos especiales.
            </p>

            <ul className="mt-12 space-y-4">
              <li className="flex items-center flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#ccc"
                  viewBox="0 0 482.6 482.6"
                  className="w-5 h-5"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  ></path>
                </svg>
                <a href="tel:+50660560060" className="text-green-500 text-base">
                  +506 6056 0060
                </a>
              </li>
              <li className="flex items-center flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#ccc"
                  viewBox="0 0 368.16 368.16"
                  className="w-5 h-5"
                >
                  <path
                    d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                    data-original="#000000"
                  ></path>
                </svg>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Balneario y restaurante los Cenizaros tivives"
                  className="text-green-500 text-base w-80"
                >
                  Calle a playa Tivives, 50 mts sur del vado, frente a propiedad
                  de ANDE. , Caldera, Costa Rica
                </a>
              </li>
            </ul>

            <ul className="flex mt-12 space-x-4">
              <li className="bg-green-500 hover:bg-green-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.facebook.com/Cenizaros">
                  <BsFacebook className="text-white" />
                </a>
              </li>

              <li className="bg-green-500 hover:bg-green-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/balneario_los_cenizaros/">
                  <BsInstagram className="text-white" />
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-sm font-semibold text-slate-900">
              Estoy interesado en sus servicios de:
            </p>
            <form
              id="infoForm"
              className="mt-3 space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center flex-wrap gap-3 mt-2">
                <div className="flex flex-row">
                  <input
                    type="radio"
                    name="interest"
                    id="hospedaje"
                    value="hospedaje"
                    className="peer hidden"
                    checked={formData.interest === "hospedaje"}
                    onChange={() => handleInterestChange("hospedaje")}
                  />
                  <label
                    htmlFor="hospedaje"
                    className="block cursor-pointer select-none rounded-xl p-3 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white uppercase"
                  >
                    Hospedaje
                  </label>
                </div>

                <div className="flex flex-row">
                  <input
                    type="radio"
                    name="interest"
                    id="eventos"
                    value="eventos"
                    className="peer hidden"
                    checked={formData.interest === "eventos"}
                    onChange={() => handleInterestChange("eventos")}
                  />
                  <label
                    htmlFor="eventos"
                    className="block cursor-pointer select-none rounded-xl p-3 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white uppercase"
                  >
                    Eventos
                  </label>
                </div>
              </div>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full rounded-lg py-3 px-4 text-slate-900 text-sm outline-0 bg-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg py-3 px-4 text-slate-900 text-sm outline-0 bg-white"
                required
              />
              <input
                type="text"
                placeholder="Asunto"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg py-3 px-4 text-slate-900 text-sm outline-0 bg-white"
                required
              />
              <textarea
                placeholder="Mensaje"
                id="message"
                name="message"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg px-4 text-slate-900 text-sm pt-3 outline-0 bg-white"
                required
              ></textarea>

              <button
                type="submit"
                form="infoForm"
                value="Submit"
                className="text-white bg-green-500 hover:bg-green-800 tracking-wide rounded-lg text-sm font-medium px-4 py-3 flex items-center justify-center w-full cursor-pointer hover:bg-green-800 focus:ring-4 focus:ring-green-300 !mt-2"
              >
                {isSendEmail ? (
                  <>
                    <Spinner
                      color="success"
                      aria-label="Cargando elementos"
                      size="sm"
                      className="mr-2"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#fff"
                      className="mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
