import { Link } from "react-router";
import "../pages/TodolistPage.css";

export default function HomePage() {
  return (
    <div className="container text-center">
      <h2>Home</h2>
      <p className="text-muted">หน้าแรก — เลือกไปยังหน้าอื่น ๆ ได้จากที่นี่</p>

      <div className="d-flex flex-column align-items-center gap-2 mt-4">
        <Link className="btn buttoncol btnhover" to="/my/todolistpage">
          ไปหน้า Todo List
        </Link>
      </div>
    </div>
  );
}