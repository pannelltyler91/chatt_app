import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined} from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const _handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0){
     sendMessage(creds, chatId, { text });
    }
    setValue("");
  };

  const _handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: '' });
  };
 

  return (
    <div>
      <form className="message-form" onSubmit={_handleSubmit}>
        <input
          className="message-input"
          placeholder="Send a message..."
          value={value}
          onChange={_handleChange}
          onSubmit={_handleSubmit}
        ></input>
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined title='Upload image' className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: "none" }}
          onChange={_handleUpload.bind(this)}
        ></input>
        <button title='Send'type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
          
      </form>
    </div>
  );
};

export default MessageForm;
