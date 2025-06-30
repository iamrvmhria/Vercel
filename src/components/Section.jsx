import React from "react";

const Section = ({ imageUrl, caption, isFirst }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: isFirst ? "100px 1rem 0" : "0 1rem",
        backgroundColor: "#fefae0 ",
        boxSizing: "border-box",
      }}
    >
      <img
        src={imageUrl}
        alt="Background"
        style={{
          height: "70%",
          width: "50%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
      <p
        style={{
          fontSize: "1.5rem",
          color: "white",
          textAlign: "center",
        }}
      >
        {caption}
      </p>
    </div>
  );
};

export default Section;
