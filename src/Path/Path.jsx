import { createBrowserRouter } from "react-router-dom";
import { TasksF} from "../TasksF/TasksF"
import App from "../App";

export const Path = createBrowserRouter([
{
  path: '/',
  element: <App/>
},
{
  path: '/Tasks-Finalizadas',
  element: <TasksF/>
}

])