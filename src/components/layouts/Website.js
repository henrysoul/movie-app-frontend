import { TopNav } from "../partials/nav/TopNav";
export const Website = (props) => {
  return (
    <>
      <TopNav />
      <div style={{ marginTop: "5rem" }}>{props.children}</div>
    </>
  );
};
