import "./task.css";

export function Taskcard({ready}) {

 return (
    <div className="card">
      <h1 className={ready? "bg-green": "bg-red"}>Mi primer tarea</h1>
	     <p> Tarea completada </p>
    </div>
  );
}