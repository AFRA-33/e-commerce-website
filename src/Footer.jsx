import Table from "react-bootstrap/Table";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ResponsiveExample() {
  return (
    <>
      <h4>We are always here to help you!</h4>
      <p>Reach out to us through any of these support channels</p>
      <Table responsive>
        <thead>
          <tr>
            {/* <th>#</th> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <th key={index}>Cosmetics</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>1</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Hair cuts</td>
            ))}
          </tr>
          <tr>
            {/* <td>2</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Skin care </td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Jewelery</td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Make up</td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Fragnanace</td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Sports</td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Home Decor</td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Electronics</td>
            ))}
          </tr>
          <tr>
            {/* <td>3</td> */}
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>Outdoor Play</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px",
        }}
      >
        <div>
          <h6>SHOP ON THE GO</h6>
          <img src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" />
          <img src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" />
        </div>
        <div>
          <h6>CONNECT WITH US</h6>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div style={{ display: "flex",justifyContent:"space-between" }}>
        <div>
          <p>@2023.noon.All Right Reserves</p>
        </div>
        <div>
          <img
            src="https://z.nooncdn.com/s/app/com/noon/images/mastercard-color.svg"
            className="p-1"
          />
          {/* <img src="https://z.nooncdn.com/s/app/com/noon/images/visa-color-v.png"/> */}
          <img
            src="https://z.nooncdn.com/s/app/com/noon/images/cash-color.svg"
            className="p-1"
          />
          <img
            src="https://z.nooncdn.com/s/app/com/noon/images/amex-color.svg"
            className="p-1"
          />
        </div>
        <div style={{ display: "flex",  justifyContent:"space-between"}}>
          <p style={{marginLeft:'20px'}}>Term of Use</p>
          <p style={{marginLeft:'20px'}}>Term of Sell</p>
          <p style={{marginLeft:'20px'}}>Privacy Policy</p>
          <p style={{marginLeft:'20px'}}>Career</p>
          <p style={{marginLeft:'20px'}}>Privacy Policy</p>
          <p style={{marginLeft:'20px'}}>Career</p>
        </div>
      </div>
    </>
  );
}

export default ResponsiveExample;
