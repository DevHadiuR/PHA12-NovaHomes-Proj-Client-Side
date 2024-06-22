import { useParams } from "react-router-dom";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const stripePropmise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const UserPayment = () => {
  const { id } = useParams();

  return (
    <section>
       <Helmet>
        <title>NovaHomes | Payment Page For User</title>
      </Helmet>
      <>
        <DynamicTitleDesc
          title={"Secure Payment"}
          subTitle={
            "Complete your property purchase by making a secure payment. Review the details of your offer and proceed with payment through Stripe or other available methods. Once the payment is successful, the property status will be updated to 'bought' and your transaction ID will be displayed for your records."
          }
        />
      </>

      <div className="border-2 border-amber-300 rounded-2xl px-5 py-10 bg-white w-[95%] md:w-[80%] mx-auto mb-10">
        <Elements stripe={stripePropmise}>
          <CheckOutForm id={id} />
        </Elements>
      </div>
    </section>
  );
};

export default UserPayment;
