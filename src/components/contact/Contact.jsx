import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    console.log(name,email,message)
    
    if(name && email && message){
      toast.success("Successfully sent the message")
      e.target.reset()
    }
    
  }
    return (
        <div className="mt-12 mx-5 pb-4 lg:mx-0 ">
    
      <section className=" body-font relative bg-pink-200 rounded-md shadow-md">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
            Have questions or need assistance with planning your event? Feel
              free to get in touch with us! Whether it's a wedding, corporate
              gathering, or any special occasion, our dedicated team is here to
              help you create a memorable experience. Use the form below to send
              us a message, and we'll respond as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label  className="text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-pink-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="text-sm text-gray-600"
                  >
                    Email
                    </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-pink-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    
                    className="text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-pink-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button  type="submit" className="flex mx-auto text-white  border-0 py-2 px-20 focus:outline-none bg-pink-800 rounded text-lg">
                  Send
                </button>
              </div>
             
             
             
            </div>
          </form>
        </div>
      </section>
   

        </div>
    );
};

export default Contact;