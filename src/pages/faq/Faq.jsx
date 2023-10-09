const Faq = () => {
    return (
        <div className="py-4 lg:py-8">
          <div className=" bg-pink-200 flex flex-col justify-center items-center min-h-screen ">
      
      <section className="bg-pink-100 w-4/5 px-6 my-10 pb-8 pt-10 rounded-lg md:flex justify-between ">
        <div className="lg:w-2/6 py-2">
          <p className="text-lg md:text-xl font-semibold ">
            Frequently Asked Questions ?
          </p>
        </div>
        <div className="lg:w-3/4">
          <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              How do I book your event management services?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-xs pt-3 text-justify">
              To book our event management services, you can get in touch with us through our websites contact form or give us a call. We will schedule a consultation to discuss your event requirements and provide you with a customized plan.
            </p>
          </details>
          <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              What types of events do you specialize in?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-xs pt-3 text-justify">
              We specialize in a wide range of events, including weddings, birthday parties, engagement ceremonies,baby shower,retirement party, and more. Our experienced team is ready to make your event memorable.
            </p>
          </details>
          <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Can I customize event packages to fit my budget?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-xs pt-3 text-justify">
              Yes, we offer flexible event packages that can be tailored to your specific budget and requirements. During our consultation, we will discuss your budget and work with you to create a personalized package that meets your needs while staying within your budget constraints.
            </p>
          </details>
          <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              What are your payment options?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-xs pt-3 text-justify">
              We accept a variety of payment options, including credit/debit cards, bank transfers, and online payment platforms. Our goal is to make the payment process convenient for you.
            </p>
          </details>
          <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Do you provide event planning consultations?
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-xs pt-3 text-justify">
              Yes, we offer event planning consultations to discuss your event ideas, requirements, and expectations. During the consultation, we will provide you with insights and recommendations to create a memorable event.
            </p>
          </details>
         
        </div>
      </section>
    
    </div>
        </div>
    );
};

export default Faq;