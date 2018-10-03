let messages = [];
let id = 0;

module.exports = {
  getMessages: (req, res, next) => {
    res.status(200).json(messages);
  },

  postMessages: (req, res, next) => {
    messages.push({ id: id, text: req.body.text, time: req.body.time });
    id++;
    res.status(200).json(messages);
  },

  putMessages: (req, res, next) => {
    console.log(req.body);

    let updateId = req.params.id;
    let messageId = messages.findIndex(message => {
      console.log(updateId == message.id);
      return message.id == updateId;
    });
    messages.splice(messageId, 1);
    messages.push({
      id: parseInt(updateId),
      text: req.body.text,
      time: req.body.time
    });
    res.status(200).json(messages);
  },

  //   deleteMessage: (req, res, next) => {
  //     let deleteId = req.params.id;
  //     messages.map((message, i) => {
  //       if (message.id === parseInt(deleteId)) {
  //         messages.splice(i, 1);
  //         res.status(200).send(messages);
  //       }
  //     });
  //   }
  deleteMessages: (req, res, next) => {
    let deleteId = req.params.id;
    messageId = messages.findIndex(message => message.id == deleteId);
    messages.splice(messageId, 1);
    res.status(200).send(messages);
  }
};
