import   React                                  from "react";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import { Container                            } from "@chakra-ui/react";
import { Counter                              } from "./pages/counter";
import { Login                                } from "./pages/login";
import { StartPage                            } from "./pages/startPage";
import { Forschung                            } from "./pages/forschung";


const router = createBrowserRouter([
  { path: "/",          element: <StartPage />,  },
  { path: "/counter",   element: <Counter />,  },
  { path: "/login",     element: <Login />,  },
  { path: "/forschung", element: <Forschung />,  },
]);


function App() {return ( <Container> <RouterProvider router={router} /> </Container> ) }

export default App;
