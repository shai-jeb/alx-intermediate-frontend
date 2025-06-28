interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "California",
};

// Create studentsList array
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JS
const table: HTMLTableElement = document.createElement("table");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

// Loop through studentsList and create rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);


