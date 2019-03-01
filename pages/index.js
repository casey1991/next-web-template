import { withNamespaces, nameSpaces } from "~/lib/I18next";
class HomePage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: [nameSpaces.Common, nameSpaces.Header]
    };
  }
  render() {
    return <div>Home Page</div>;
  }
}
export default withNamespaces([nameSpaces.Common, nameSpaces.Header])(HomePage);
