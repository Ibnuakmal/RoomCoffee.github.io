const axios = require("axios");

const midtransServerKey = process.env.MIDTRANS_SERVER_KEY;

axios
  .post(
    "https://api.sandbox.midtrans.com/v2/charge",
    {
      payment_type: "bank_transfer",
      transaction_details: {
        order_id: "order-id-" + Math.round(new Date().getTime() / 1000),
        gross_amount: 10000,
      },
      bank_transfer: {
        bank: "bca",
      },
    },
    {
      headers: {
        Authorization: `Basic ${Buffer.from(midtransServerKey + ":").toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.response.data);
  });
