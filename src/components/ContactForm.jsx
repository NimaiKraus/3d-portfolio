import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    emailjs.send()
    try {
      const message = await client.sendAsync({
        text: `${formData.name} ti ha contattato dicendo: ${formData.message}`,
        from: formData.email,
        to: 'nimai.kraus@gmail.com',
        subject: 'email from portfolio site',
      });
      console.log(message);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  

  const isButtonDisabled = () =>
    formData.email === "" ||
    formData.name === "" ||
    formData.message === "" ||
    isLoading;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center gap-3 md:flex-row bg-[url('./src/assets/images/sky_bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="min-w-[40%] max-w-[70%] flex flex-col bg-[#ddeaff99] backdrop-blur-[9px] p-3 rounded-lg">
        <span className="font-bold text-2xl">Let me a message</span>

        <form className="flex flex-col gap-2 mt-4" action="">
          <label className="font-semibold mt-1">Name</label>
          <input
            className="p-2 rounded-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Jonh"
          />
          <label className="font-semibold mt-1">Email</label>
          <input
            className="p-2 rounded-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Jonh@gmail.com"
          />
          <label className="font-semibold mt-1">Message</label>
          <textarea
            className="p-2 rounded-md"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Let me know how can I help you!"
          />

          <button
            className="bg-slate-700 text-white font-semibold p-3 rounded-lg w-fit mx-auto translate-y-5 hover:bg-slate-900 transition"
            type="submit"
            disabled={isButtonDisabled()}
            onClick={sendMessage}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <h1>awweeee</h1>
    </section>
  );
};

export default ContactForm;
