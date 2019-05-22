import React from "react";
import QRious from "qrious";

const Qrcode = props => {
  const code = QRcodeGenerator(props.url);
  return <img src={code} alt="qr code" />;
};

function QRcodeGenerator(url) {
  return new QRious({
    background: "rgb(255, 255, 255)",
    foreground: "rgb(10, 0, 12)",
    level: "L",
    size: 300,
    value: url
  }).toDataURL();
}

export default Qrcode;
