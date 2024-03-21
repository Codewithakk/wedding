const Contact = require('../model/contact');

// Controller to handle storing contact information
exports.storeContactInfo = async (req, res) => {
    try {
        const { name, email, phoneNumber, message } = req.body;
        const contact = new Contact({ name, email, phoneNumber, message });
        await contact.save();
        res.status(201).json({ message: 'Contact information stored successfully.' });
    } catch (error) {
        console.error('Error storing contact information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to handle reading contact information
exports.getContactInfo = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching contact information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
