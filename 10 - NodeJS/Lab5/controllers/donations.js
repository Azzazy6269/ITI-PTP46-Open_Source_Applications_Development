const donationService = require("../services/donations");
const APIError = require('../utils/APIError');

const createDonation = async (req, res) => {
    const { amount } = req.body;
    console.log(`amount : ${amount}`);

    try {
        const response = await donationService.createPaymentSessionFromProvider(amount);
        const session = response.data.session;
        const donationData = {
            sessionId: session._id,
            orderId: session.paymentParams.order,
            amount: session.paymentParams.amount,
            sessionURL: session.sessionUrl
        }
        const donation = await donationService.createDonation(donationData);
        res.status(200).json({
            message: "Donation Link created successfully",
            Data: {
                sessionURL: donation.sessionURL,
            }
        });
    } catch (error) {
        if (error.response) {
            console.log("KASHIER ERROR DATA:", error.response.data);
        } else {
            console.log("INTERNAL ERROR:", error.message);
        }
        return res.status(503).json({ message: "Service unavailable" });
    }
    /*catch (error) {
            throw new APIError("service unavailable", 503);
        } */

};

const webhook = async (req, res) => {
    const { data, event } = req.body;
    const kashierSignature = req.header('x-kashier-signature');
    const isValid = donationService.handelWebhook(data, kashierSignature);
    if (!isValid) {
        throw new APIError("invalid Signature", 400)
    }
    await donationService.updateDonationStatus(req.body);

    res.status(200).json({
        message: "webhook received successfully"
    });
};


module.exports = { createDonation, webhook };