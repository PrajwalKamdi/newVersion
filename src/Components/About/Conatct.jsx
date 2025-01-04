import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0748669f-2928-4939-89dc-1e36229b5534");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="rounded-xl p-5 md:p-10 bg-[#121214]">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <h3 className="text-xl md:text-3xl">Feel Free To Contact</h3>
        <input
          type="text"
          name=""
          placeholder="Name"
          className="border placeholder:text-sm md:placeholder:text-[16px]  focus:outline-none focus:placeholder:text-gray-700 focus:bg-white focus:text-black  duration-500 md:px-5  shadow-md shadow-gray-800 p-2 bg-transparent rounded-md text-gray-200"
          required
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="border placeholder:text-sm md:placeholder:text-[16px]  focus:outline-none focus:placeholder:text-gray-700 focus:bg-white focus:text-black md:px-5  shadow-md shadow-gray-800 p-2 bg-transparent rounded-md text-gray-200"
        />
        <textarea
          name="message"
          placeholder="Write Your Message Here"
          className="border placeholder:text-sm focus:outline-none md:px-5 md:placeholder:text-[16px]  focus:placeholder:text-gray-700 focus:bg-white focus:text-black shadow-md shadow-gray-800 p-2 bg-transparent rounded-md text-gray-200"
          required
        ></textarea>

        <button
          type="submit"
          className="border placeholder:text-sm  px-5 w-full hover:shadow-md hover:shadow-gray-500 p-2 bg-transparent rounded-md text-gray-200"
        >
          Send
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
