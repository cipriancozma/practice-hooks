import "./App.css";
// import FetchingDataWithReactQuery from "./FetchingDataWithReactQuery";
// import MainPage from "./context/MainPage";
import EffectTutorial from "./hooks/EffectTutorial";
// import InterviewQ from './InterviewQ';
// import Promises from './Promises';
// import ReducerTutorial from './ReducerTutorial';
// import StateTutorial from './StateTutorial';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: true,
  //     },
  //   },
  // });
  return (
    <div className="App">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      <EffectTutorial />
      {/* <QueryClientProvider client={queryClient}>
        <FetchingDataWithReactQuery />
      </QueryClientProvider> */}

      {/* <MainPage /> */}
      {/* <Promises /> */}
      {/* <InterviewQ /> */}
    </div>
  );
}

export default App;
