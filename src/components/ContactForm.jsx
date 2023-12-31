/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const sendMessage = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Nimai",
          from_email: formData.email,
          to_email: "nimai.kraus@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setTimeout(() => {
          setCurrentAnimation("idle");
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  const isButtonDisabled = () =>
    formData.email === "" ||
    formData.name === "" ||
    formData.message === "" ||
    isLoading;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">
          Get in{' '}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Touch
          </span>
        </h1>

        <form
          // ref={formRef}
          onSubmit={sendMessage}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={isButtonDisabled}
            className="btn font-semibold"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? (
              "Sending..."
            ) : (
              <span className="flex justify-center items-center gap-2">
                Send message
                <span className="material-symbols-outlined">send</span>
              </span>
            )}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          {/* <Suspense fallback={<Loader />}> */}
          <Fox
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.629, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
          {/* </Suspense> */}
        </Canvas>
      </div>
    </section>
  );
};

export default ContactForm;
