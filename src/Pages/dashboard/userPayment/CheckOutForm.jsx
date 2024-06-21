import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [err, setErr] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  console.log(id);

  const { data: offeredPropertyById = {}, refetch } = useQuery({
    enabled: !!id,
    queryKey: ["offeredPropertyById", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/offeredPropertyById/${id}`);
      return res.data;
    },
    onError: (err) => {
      console.error("Error fetching property:", err);
    },
  });

  const price = offeredPropertyById.offerPrice;
  console.log("the main price :", price);
  useEffect(() => {
    if (price && !isNaN(price)) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          console.log("client secret :", res.data.clientSecret);
          setClientSecret(res.data?.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setErr(error.message);
    } else {
      console.log(paymentMethod);
      setErr("");
    }

    const { paymentIntent, error: confirmPayError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymus",
            email: user?.email || "anonymus",
          },
        },
      });

    if (confirmPayError) {
      console.log("payment confirm error :", confirmPayError);
    } else {
      console.log("payment confirm success :", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const paymentData = {
          transactionId: paymentIntent.id,
          buyerEmail: user?.email,
          buyerName: user?.displayName,
          propertyTitle: offeredPropertyById.propertyTitle,
          propertyLocation: offeredPropertyById.propertyLocation,
          soldPrice: price,
          paymentStatus: "Bought",
          propertyId: offeredPropertyById.propertyId,
          offeredPropertyById: offeredPropertyById._id,
          agentEmail: offeredPropertyById.agentEmail,
        };

        const res = await axiosPublic.post("/allPayments", paymentData);
        refetch();
        console.log(res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Thank You for Purchasing Our Property!",
            showClass: {
              popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
            },
            hideClass: {
              popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
            },
          });
          navigate("/dashboard/userPropertyBought");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-xl text-red-500 mt-3">{err}</p>
      {transactionId && (
        <p className="text-green-500 text-xl mt-5">
          Your successfull transactionId : {transactionId}
        </p>
      )}
      <div className="flex justify-end mr-5 mt-5">
        <Button
          size="sm"
          className="text-base"
          type="submit"
          disabled={!stripe || !clientSecret}
          color="amber"
        >
          PAY
        </Button>
      </div>
    </form>
  );
};

export default CheckOutForm;
