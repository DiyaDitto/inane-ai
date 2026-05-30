import AppRoutes from "./routes/AppRoutes";
import PageWrapper from "./components/common/PageWrapper";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
    </>
  );
}

export default App;