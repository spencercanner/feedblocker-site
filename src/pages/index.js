import * as React from "react";

// styles
const pageStyles = {
  backgroundColor: "#F3F2EE",
  height: "100vh",
  width: "100vw",
};

const headingStyles = {
  fontWeight: 500,
  color: "#fff",
  fontFamily: "Railway, sans-serif",
};

const subheadingStyles = {
  fontWeight: 600,
  fontFamily: "Railway, sans-serif",
};

const topBarStyles = {
  height: "80px",
  backgroundColor: "#0A66C2",
  width: "100%",
  display: "flex",
  alignItems: "center",
};

const iconStyles = {
  height: "80%",
  width: "auto",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap"
        rel="stylesheet"
      ></link>
      <div style={topBarStyles}>
        <svg
          style={iconStyles}
          width="328"
          height="328"
          viewBox="0 0 328 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="328" height="328" rx="10" fill="#0A66C2" />
          <circle
            cx="164"
            cy="164"
            r="110.5"
            stroke="#FF4646"
            stroke-width="25"
          />
          <rect
            x="77.5278"
            y="57.6484"
            width="172.945"
            height="218.667"
            rx="5"
            fill="white"
          />
          <circle cx="90.4487" cy="78.5211" r="4.9697" stroke="black" />
          <circle cx="106.352" cy="78.521" r="4.9697" stroke="black" />
          <circle cx="122.255" cy="78.521" r="4.9697" stroke="black" />
          <rect
            x="133.188"
            y="73.5513"
            width="111.321"
            height="9.93939"
            rx="3"
            stroke="black"
          />
          <line
            x1="77.5278"
            y1="98.8937"
            x2="250.473"
            y2="98.8937"
            stroke="black"
          />
          <rect
            x="89.9551"
            y="111.821"
            width="20.8667"
            height="140.139"
            rx="4.5"
            fill="#F3F2EE"
            stroke="black"
          />
          <rect
            x="217.179"
            y="111.821"
            width="20.8667"
            height="140.139"
            rx="4.5"
            fill="#F3F2EE"
            stroke="black"
          />
          <rect
            x="131.701"
            y="111.821"
            width="64.6"
            height="18.8788"
            rx="2.5"
            fill="#F3F2EE"
            stroke="black"
          />
          <path
            d="M131.201 155.009C134.587 149.779 136.485 151.156 139.871 155.009C143.595 160.759 145.683 159.968 149.407 155.009C152.158 150.19 153.991 149.364 158.366 155.009C162.276 159.876 164.218 159.645 167.325 155.009C170.521 149.944 172.572 150.268 176.572 155.009C181.079 160.311 182.946 159.376 185.82 155.009C189.298 149.793 191.718 149.888 196.801 155.009"
            stroke="black"
          />
          <path
            d="M131.201 186.815C134.587 181.586 136.485 182.962 139.871 186.815C143.595 192.565 145.683 191.774 149.407 186.815C152.158 181.996 153.991 181.17 158.366 186.815C162.276 191.682 164.218 191.451 167.325 186.815C170.521 181.75 172.572 182.074 176.572 186.815C181.079 192.117 182.946 191.182 185.82 186.815C189.298 181.599 191.718 181.694 196.801 186.815"
            stroke="black"
          />
          <path
            d="M131.201 222.596C134.587 217.367 136.485 218.744 139.871 222.596C143.595 228.347 145.683 227.555 149.407 222.596C152.158 217.777 153.991 216.952 158.366 222.596C162.276 227.463 164.218 227.233 167.325 222.596C170.521 217.532 172.572 217.856 176.572 222.596C181.079 227.899 182.946 226.964 185.82 222.596C189.298 217.381 191.718 217.476 196.801 222.596"
            stroke="black"
          />
          <mask id="path-15-inside-1" fill="white">
            <path d="M275.498 112.065C289.272 141.636 290.735 175.467 279.565 206.117C268.394 236.767 245.506 261.724 215.935 275.498C186.364 289.272 152.533 290.735 121.883 279.565C91.2334 268.394 66.2765 245.506 52.5024 215.935L164 164L275.498 112.065Z" />
          </mask>
          <path
            d="M275.498 112.065C289.272 141.636 290.735 175.467 279.565 206.117C268.394 236.767 245.506 261.724 215.935 275.498C186.364 289.272 152.533 290.735 121.883 279.565C91.2334 268.394 66.2765 245.506 52.5024 215.935L164 164L275.498 112.065Z"
            stroke="#FF4646"
            stroke-width="50"
            mask="url(#path-15-inside-1)"
          />
        </svg>
        <h1 style={headingStyles}>Feedblocker</h1>
      </div>
      <h2 style={subheadingStyles}>Reduce distractions</h2>
    </main>
  );
};

export default IndexPage;
