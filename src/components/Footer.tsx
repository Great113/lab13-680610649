import { type FooterProps } from "../libs/Footer";
import "../pages/TodolistPage.css";
export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <footer className="align-self-end  text-center w-100 ">
      <p className="text-white p-4 m-0 bgcolor-footer">
        Copyright © {year} {fullName} {studentId}
      </p>
    </footer>
  );
}