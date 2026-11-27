import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { BsCloudArrowUp } from "react-icons/bs";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";
import Tooltip from "./components/Tooltip";
import Toast from "./components/Toast";
import Button from "./components/Button/Button";

const colors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";

function App() {
  const [showToast, setShowToast] = useState(false);
  const closeToast = useCallback(() => setShowToast(false), []);

  return (
    <div className="page">
      <h2>Badges</h2>
      <div className="row">
        {colors.map((c) => (
          <Badge key={c} color={c}>
            Badge
          </Badge>
        ))}
      </div>
      <div className="row">
        {colors.map((c) => (
          <Badge key={c} color={c} shape="pill">
            Badge
          </Badge>
        ))}
      </div>

      <h2>Banners</h2>
      <div className="grid-2">
        <div className="stack">
          <Banner variant="success" title="Congratulations!">
            {lorem}
          </Banner>
          <Banner variant="warning" title="Attention">
            {lorem}
          </Banner>
          <Banner
            variant="error"
            title="There is a problem with your application"
          >
            {lorem}
          </Banner>
          <Banner variant="neutral" title="Update available">
            {lorem}
          </Banner>
        </div>
        <div className="stack">
          <Banner variant="success" title="Congratulations!" />
          <Banner variant="warning" title="Attention" />
          <Banner
            variant="error"
            title="There is a problem with your application"
          />
          <Banner variant="neutral" title="Update available" />
        </div>
      </div>

      <h2>Cards</h2>
      <div className="grid-2">
        <Card icon={<BsCloudArrowUp />} title="Easy Deployment">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </Card>
      </div>

      <h2>Testimonials</h2>
      <Testimonial
        image="https://randomuser.me/api/portraits/women/68.jpg"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
        name="May Andersons"
        role="Workcation, CTO"
      />
      <Testimonial
        logo={<strong>Workcation</strong>}
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptatas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        name="May Andersons"
        role="Workcation, CTO"
      />

      <h2>Tooltips</h2>
      <div className="grid-2">
        {["gray", "blue", "pink", "green"].map((c) => (
          <React.Fragment key={c}>
            <Tooltip color={c} variant="bold" title="Archive notes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
              tenetur.
            </Tooltip>
            <Tooltip color={c} variant="light" title="Archive notes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
              tenetur.
            </Tooltip>
          </React.Fragment>
        ))}
      </div>

      <h2>Toast Popups</h2>
      <div className="grid-2">
        <Toast variant="success" title="Success">
          Your work has been saved
        </Toast>
        <Toast variant="warning" title="Warning">
          A network error was detected
        </Toast>
        <Toast variant="information" title="Information">
          Please read updated information
        </Toast>
        <Toast variant="error" title="Error">
          Please re-save your work again
        </Toast>
      </div>
      <Button onClick={() => setShowToast(true)}>
        Show auto-dismiss toast
      </Button>
      {showToast && (
        <div className="toast-container">
          <Toast
            variant="success"
            title="Success"
            duration={3000}
            onClose={closeToast}
          >
            Your work has been saved
          </Toast>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
