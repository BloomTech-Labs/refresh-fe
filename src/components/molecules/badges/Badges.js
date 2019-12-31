import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

/*
 * => The current context value is determined by prop,
 * => value of the nearest <MyContext.Provider> above the caller in the tree.
 * => Remember, the argument for useContext must be the context object itself:
 * => Correct: useContext(UserContext)
 * => Incorrect: useContext(UserContext.Consumer)
 * => Incorrect: useContext(UserContext.Provider)
 * => ! The component that calls useContext will always be re-rendered when the context value changes.
 * => If re-rendering a component is expensive, you can optimize it by memorizing
 * => source: https://en.reactjs.org/docs/hooks-reference.html#usecontext
 */

const Badge = ({ ...props }) => {
  const activeUser = useContext(UserContext);
  console.log("props/context/badges", activeUser);

  return (
    <>
      <div>{activeUser.display_name}</div>
    </>
  );
};

export default Badge;
