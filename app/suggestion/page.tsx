import react from "react";
import nodemailer from "nodemailer";
import SubmitButton from "./submitbutton";
import Footer from "@homepage/Footer";

export default function Suggestion() {
  async function Submit(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);
    if (data.bot) return;
    var email = process.env.GOOGLE_EMAIL;
    var password = process.env.GOOGLE_PASSWORD;

    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });
    var mailOptions = {
      from: email,
      to: email,
      subject: "Suggestion",
      text:
        "Reference: " +
        data.reference +
        "\n" +
        "Category: " +
        data.category +
        "\n" +
        "Suggestion: " +
        data.suggestion,
    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        alert("Error occurred while sending email");
      } else {
        console.log("Email sent: " + info.response);
        alert("Thank you for your submission");

      }
    });
  }
  return (
    <div>
      <div className="hero bg-base-300 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Make a Suggestion</h1>
            <p className="py-6">
              Thank you for taking an interest in this project. We appreciate
              your feedback and will definitely look into your suggestion. We
              will work on adding it to the library as soon as possible.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" action={Submit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reference</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Daniel 3:1-25"
                  className="input input-bordered"
                  required
                  name="reference"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Faithfulness, Divine Intervention"
                  className="input input-bordered"
                  name="category"
                />
              </div>
              <div className="form-control hidden">
                <label className="label">
                  <span className="label-text">test</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Faithfulness, Divine Intervention"
                  className="input input-bordered"
                  name="bot"
                />
              </div>
              <div className="form-control mt-6">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
