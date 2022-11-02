import logo from "./logo.svg";
import "./App.css";
import { tab } from "@testing-library/user-event/dist/tab";

function App() {
  const firstName = "Hello World";
  const obj = { message: "Welcome to Expertiso" };
  const data = ["we", "are", "united"];
  const list = [
    { name: "HelloWorld1" },
    { name: "HelloWorld2" },
    { name: "HelloWorld3" },
  ];
  const complex = [
    { company: "Company", jobs: ["Jobs"] },
    { company: "XYZ", jobs: ["JavaScript", "React"] },
    { company: "ABC", jobs: ["Angular", "Ionic"] },
  ];
  return (
    <div class="center">
      <p>
        <b>Task No: 1 </b>
        {firstName}
      </p>

      <p>
        <b>Task No: 2 </b>
        {obj.message}
      </p>

      <p>
        <b>Task No: 3</b> In separate tags without using map method (Use
        individual index number)
      </p>
      <div class="head">
        <h2 style={{ display: "inline" }}>{data[0] + " "}</h2>
        <h3 style={{ display: "inline" }}>{data[1] + " "}</h3>
        <h4 style={{ display: "inline" }}>{data[2] + " "}</h4>
      </div>

      <p>
        <b>Task No: 3 </b>In Same tags using map method
      </p>
      {data.map((item) => {
        return <h4 style={{ display: "inline" }}>{item + " "}</h4>;
      })}

      <p>
        <b>Task No: 4</b> In separate tags without using map method (Use
        individual index number)
      </p>
      <div class="head">
        <h2 style={{ display: "inline" }}>{list[0].name + " "}</h2>
        <h3 style={{ display: "inline" }}>{list[1].name + " "}</h3>
        <h4 style={{ display: "inline" }}>{list[2].name + " "}</h4>
      </div>
      <p>
        <b>Task No: 4 </b>In Same tags using map method
      </p>
      {list.map((item, index) => {
        return (
          <p style={{ display: "inline" }}>
            <b>{index + 1})</b>
            {`${item.name} `}
          </p>
        );
      })}

      <p>
        <b>Task No: 5 </b>Without using map Method
      </p>
      <table class="tab">
        <tr>
          <th>Company</th>
          <th>Jobs</th>
        </tr>
        <tr>
          <td>{complex[1].company}</td>
          <td>{complex[1].jobs[0] + " " + complex[1].jobs[1]}</td>
        </tr>
        <tr>
          <td>{complex[2].company}</td>
          <td>{complex[2].jobs[0] + " " + complex[2].jobs[1]}</td>
        </tr>
      </table>
      <p>
        <b>Task No: 5 </b>Using map Method
      </p>
      {complex.map((item) => {
        return (
          <table>
            <tr>
              <td>{item.company}</td>
              <td>{item.jobs.join(" ")}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
