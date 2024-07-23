const run = require('../geminiApi');
const Message = require('../models/Message');

const addMessage = async (req, res) => {
  const { name, issue, message } = req.body;
  console.log(req.body);

  try {
    const newMessage = new Message({
      name,
      issue,
      message,
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const sendingGemini = async (req, res) => {
  try {
      const { prompt } = req.body;
      const result = await run(prompt);
      res.json({ response: result });
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addMessage,sendingGemini };
