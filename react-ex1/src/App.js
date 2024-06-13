import "./App.css";
import Box from "./components/Box";
//<Box /> -- components

function App() {
  const name = "제목입니다.";
  const list = ["홍길동", "강감찬", "이순신"];
  return (
    <div className="first" style={{ color: "orange" }}>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <Box
        name="놀부"
        num={1}
        image="https://cdn.pixabay.com/photo/2023/07/07/15/57/ai-generated-8112934_1280.png"
      />
      <Box
        name="흥부"
        num={2}
        image="https://cdn.pixabay.com/photo/2023/07/07/16/27/ai-generated-8113016_1280.png"
      />
      <Box
        name="제비"
        num={3}
        image="https://cdn.pixabay.com/photo/2023/08/25/18/19/skyline-8213466_1280.jpg"
      />
    </div>
  );
}

export default App;
