import React from "react";

const Call = () => {
    return (
        <>
        <section className=" w-full p-4 flex flex-col justify-start items-start">
        <h5> برای برقراری ارتباط میتوانید از راه های زیر اقدام کنید</h5>
            <a href="https://wa.me/989017499608">
                <i className="fa fa-whatsapp text-4xl text-green-700 py-4"></i>
            </a>
            <a href="https://t.me/spr0021">
                <i className="fa fa-telegram text-4xl text-blue-500 py-4"></i>
            </a>
            <a href="https://www.linkedin.com/in/saber-pourrahimi-534795192/">
                <i className="fa fa-linkedin text-4xl text-blue-700 py-4"></i>
            </a>
            </section>
        </>
    );
};

export default Call;
