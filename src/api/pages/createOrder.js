// pages/api/createOrder.js
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { amount, name, description } = req.body;
            const options = {
                amount: amount * 100, // Convert to paise
                currency: 'INR',
                receipt: 'receipt#1'
            };

            const order = await razorpay.orders.create(options);

            res.status(200).json({
                success: true,
                order_id: order.id,
                amount: options.amount,
                key_id: process.env.RAZORPAY_ID_KEY,
                product_name: name,
                description: description,
                contact: '1234567890',
                name: 'trafyai',
                email: 'in.trafyai@gmail.com'
            });
        } catch (error) {
            console.error('Error creating Razorpay order:', error);
            res.status(500).json({ success: false, msg: 'Something went wrong!' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
