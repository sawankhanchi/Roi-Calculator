import "./App.css";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function App() {
  return (
    <>
      <div className="calculator">
        <div className="main-heading">
          <h1>ROI Calculator</h1>
          <span
            style={{
              marginTop: "30px",
              fontSize: "22px",
              color: "lightslategrey",
            }}
          >
            X
          </span>
        </div>
        <div className="container-one">
          <form>
            <input type="radio" name="cake" value="cake" />
            CAKE
            <label style={{ marginLeft: "22px" }}>
              <Toggle icons={false} className="custom-classname" />
              <span>USD</span>
            </label>
          </form>
        </div>
        <input type="text" value="0.000 USD" />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <span className="container-two">$1000</span>
            <span className="container-two">$100</span>
          </div>
          <div>
            <h4>- Cake 0.00</h4>
          </div>
        </div>

        <div>
          <h3>Timeframe</h3>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span
            className="container-three"
            style={{ backgroundColor: "#ffc300" }}
          >
            1 Day
          </span>
          <span className="container-three">7 Days</span>
          <span className="container-three">30 Days</span>
          <span className="container-three">1 Year</span>
          <span className="container-three">5 Year</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Enable Accerlerated APY</h2>
          <span style={{ marginTop: "20px" }}>
            <Toggle icons={false} className="custom-classname" />
          </span>
        </div>

        <div>
          <h3>Select Tier</h3>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span
            className="container-three"
            style={{ backgroundColor: "#ffc300" }}
          >
            Tier 1
          </span>
          <span className="container-three">Tier 2</span>
          <span className="container-three">Tier 3</span>
          <span className="container-three">Tier 4</span>
          <span className="container-three">Tier 5</span>
        </div>

        <div>
          <p>ROI at Current Rates</p>
        </div>

        <input type="text" value="0.000 USD" />
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            color: "lightslategrey",
            fontWeight: "bold",
            marginTop: "5px",
          }}
        >
          <span>- 0.000 CAKE + 0.000000 DON</span>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span style={{ fontWeight: "bold" }}>Hide Details</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>APY</h2>
                <span style={{ marginTop: "20px", color: "#ffc300" }}>
                  9.0 %
                </span>
              </div>
              <AccordionItemPanel>
                <ul style={{ fontWeight: "bold", color: "lightslategrey" }}>
                  <li>Calculated based on current rate</li>
                  <li>
                    All figures are estimates provided for your convinence only,{" "}
                    and by no means represent guaranteed returns.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default App;
