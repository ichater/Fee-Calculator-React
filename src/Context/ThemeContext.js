import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    FundName: "MLC Wholesale Horizon 6 Share Portfolio",
    APIR: "MLC0397AU",
    NabOwned: "#",
    MER: 1.06
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
