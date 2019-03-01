import React from "react";
import App, { Container } from "next/app";
// redux config
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore } from "~/lib/Redux";
// apollo config
import { ApolloProvider } from "react-apollo";
import { createClient } from "~/lib/Apollo";
// material ui config
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import { getPageContext } from "~/lib/Material";
// i18next config
import { appWithTranslation } from "~/lib/I18next";
class HMSApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <ApolloProvider client={createClient}>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </ApolloProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}
export default withRedux(createStore)(appWithTranslation(HMSApp));
