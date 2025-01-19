import BoardsList from "../components/BoardsList";
import "./styles.css";

const data = {
  todo: [
    {
      id: 1,
      task: "Buy groceries",
      dueDate: "2025-01-21",
      priority: "Medium",
    },
    {
      id: 2,
      task: "Finish reading book",
      dueDate: "2025-01-23",
      priority: "Low",
    },
  ],
  working: [
    {
      id: 3,
      task: "Develop new feature for app",
      dueDate: "2025-01-25",
      priority: "High",
    },
    {
      id: 4,
      task: "Prepare for client meeting",
      dueDate: "2025-01-24",
      priority: "High",
    },
  ],
  completed: [
    {
      id: 5,
      task: "Submit project proposal",
      completedDate: "2025-01-18",
    },
    {
      id: 6,
      task: "Clean the house",
      completedDate: "2025-01-19",
    },
  ],
};

export default function App() {
  return (
    <div className="App">
      <BoardsList data={data} />
    </div>
  );
}
