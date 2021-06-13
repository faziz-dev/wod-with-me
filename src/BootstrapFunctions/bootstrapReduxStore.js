import { Provider } from "react-redux";
import { store } from "../Store";

export const bootstrapReduxStore = (App) => {
  return <Provider store={store}><App/></Provider>;
};
