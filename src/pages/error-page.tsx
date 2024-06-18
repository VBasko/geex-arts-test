import Container from "@mui/material/Container";
import {
  ErrorResponse,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    const errorResponse = error as ErrorResponse;
    errorMessage = errorResponse.statusText || errorResponse.data.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <main>
      <Container sx={{ paddingY: 3 }}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </Container>
    </main>
  );
};

export default ErrorPage;
