import { RoutingManager } from "../Routes";

export const bootstrapRoutingManager = (App) => {
  return (
    <RoutingManager>
      <App />
    </RoutingManager>
  );
};
