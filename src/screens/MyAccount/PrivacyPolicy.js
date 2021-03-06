import React, { Component } from "react";
import {
  Container,
  Content,
  Left,
  Right,
  Text,
  Footer,
  Card,
  Button,
  Body,
  List,
  ListItem
} from "native-base";
import { View, Image, FlatList, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
import ModalHeader from "../Cart/ModalHeader";
import WebHtmlView from "react-native-webhtmlview";
import axios from "axios";

class PrivacyPolicy extends Component {
  constructor() {
    super();
    this.state = {
      terms: ""
    };
  }

  componentDidMount() {
    this.onSubmitPress();
  }

  onSubmitPress() {
    axios
      .get("https://stubapp.com/api/" + "terms")
      .then(response => {
        console.log("terms response", response.data[0].content);
        this.setState({ terms: response.data[0].content });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container style={{ alignItems: "center" }}>
        <ModalHeader
          modal_title="Privacy Policy"
          toggleModal={this.props.toggleModal}
        />
        <Content style={{ width: "100%", padding: 10 }} padder>
          <WebHtmlView
            source={{
              html: this.state.terms
            }}
            innerCSS=' @import url("https://fonts.googleapis.com/css?family=Lato"); body { padding: 10; font-size: 12; font-family: "Lato", sans-serif; text-align: justify }'
          />
        </Content>
      </Container>
    );
  }
}
export default PrivacyPolicy;
