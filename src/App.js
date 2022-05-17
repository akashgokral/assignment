import "./App.css"
import bg from "./image2.png"

function App() {
  return (
    <>
      <div className="container">

        <div className="container__left">
          <div className="container__left__img"> <img src={bg} alt="background-image" />
            <div className="container__left__content">
              <p>Choose a date range</p>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut repellat, quos labore </span></div>
          </div>
        </div>

        <div className="container__right">
          <form action="" className="form">
            <h1>Create an account</h1>
            <p>Your email address</p>
            <input type="text" required />
            <p>Your password</p>
            <input type="password" required />
            <p>Confirm your password</p>
            <input type="password" required />
            <p>Your full name</p>
            <input type="text" required />
            <p>Your phone number</p>
            <input type="number" required />
            <div className="terms"> <input type="checkbox" /> I read and agree Terms and Conditions</div>
            <button>Create an account</button>
          </form>
        </div>

      </div>


    </>
  );
}

export default App;
