import React from "react";
import { Container, SidePanel } from "./Dashboard.style";

export interface DashboardInterface {

}

const Dashboard: React.FC<DashboardInterface> = () => {
  return (<>
    <Container>
      <SidePanel></SidePanel>
    </Container>
  </>)
};

export default Dashboard;