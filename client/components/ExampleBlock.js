import React, { Children, Component } from "react";
import Radium from "radium";
import { Alerts, Alert, Section, PropTable, Highlight, Translation } from "../components"
import { isEqual, isEmpty } from "lodash";
import reactElementToJSXString from '../../lib/react-element-to-jsx-string';

const styles = {
  base: {
    width: "100%"
  }
}

const defaultUIImportPath = "/imports/plugins/core/ui/client/components"
const repoUrl = "https://github.com/reactioncommerce/reaction/tree/master"

class ExampleBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      exampleProps: this.getComponentPropObject(props.componentProps)
    }
  }

  getComponentPropObject(componentProps) {
    const props = {}

    if (Array.isArray(componentProps)) {
      componentProps.forEach((prop) => {
        if (prop.control && isEmpty(prop.control.value) === false) {
          props[prop.name] = prop.control.value
        }
      })
    }

    return props
  }

  componentWillReceiveProps(nextProps) {
    if (isEqual(nextProps, this.props) === false) {
      this.setState({
        exampleProps: this.getComponentPropObject(nextProps.componentProps)
      })
    }
  }

  handlePropChange = (value, name) => {
    const exampleProps = {
      ...this.state.exampleProps || {}
    }

    exampleProps[name] = value

    this.setState({
      exampleProps
    })
  }

  renderTitle() {
    if (this.props.title) {
      return (
        <h3><Translation defaultValue={this.props.title} i18nKey={this.props.i18nKeytitle} /></h3>
      )
    }

    return null;
  }

  renderImport() {
    let importText = this.props.importStatement;
    let importSource;

    if (typeof this.props.importStatement === "object") {
      const { named, path, source } = this.props.importStatement;
      const namedImports = named.join(", ");
      importSource = (
        <span> - <a href={`${repoUrl}${source}`} target="_blank">{"View on Github"}</a></span>
      )

      if (path) {
        importText = `import { ${namedImports} } from "/imports/plugins/${path}";`;
      } else {
        importText = `import { ${namedImports} } from "${defaultUIImportPath}";`;
      }
    } else if (typeof this.props.importStatement === "string") {
      importText = thishis.props.importStatement
    }

    if (importText) {
      /*

       */
      return (
        <div>
          <div className="sg-import-heading">{"Import"}{importSource}</div>
          <div className="sg-import-block">
            <Highlight type="text">
              {importText}
            </Highlight>
          </div>
        </div>
      );
    }

    return null;
  }

  render() {

    const singleChild = Children.only(this.props.children)
    let fakeComponent
    let exampleComponent = React.cloneElement(singleChild, {
      ...this.state.exampleProps
    })

    if (this.props.wrapperComponent) {
      exampleComponent = React.cloneElement(this.props.wrapperComponent, {
        children: exampleComponent
      })
    }

    if (this.props.fakeComponent) {
      fakeComponent = React.cloneElement(this.props.fakeComponent, {
        ...this.state.exampleProps
      })
    }

    return (
      <div>
        {this.renderTitle()}
        {this.renderImport()}
        <div className="sg-import-heading">{"Example"}</div>
        <div className="sg-example-block" style={styles.base}>
          <Highlight>
            {fakeComponent || exampleComponent}
          </Highlight>
          <div className="sg-example-component">
            {exampleComponent}
          </div>
        </div>


        <PropTable
          componentProps={this.props.componentProps}
          exampleProps={this.state.exampleProps}
          onPropChange={this.handlePropChange}
        />
      </div>

    )
  }
}

export default Radium(ExampleBlock);
