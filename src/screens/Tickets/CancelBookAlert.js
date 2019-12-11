import React, { Component } from "react";
import { Text, View, ScrollView, StatusBar } from "react-native";
import { Header, Button, Left, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import { Actions } from "react-native-router-flux";

export default class CancelBookAlert extends Component {
  render() {
    return (
      <View style={UtilStyles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View
          style={{
            backgroundColor: "white",
            alignItems: "flex-end",
            marginTop: 20
          }}
        >
          <Icon
            size={25}
            style={{
              width: 30,
              height: 30,
              margin: 6,
              color: Color.yellow_psm,
              marginTop: 10,
              marginLeft: 20
            }}
            name="md-close"
            onPress={() => Actions.pop()}
          />
        </View>
        <View>
          <Icon2
            size={100}
            style={{
              color: Color.yellow_psm,
              alignSelf: "center",
              marginTop: 50,
              marginBottom: 30
            }}
            name="exclamation"
            onPress={() => Actions.pop()}
          />
          <Text
            style={[
              UtilStyles.standardTextWithIcon,
              {
                fontSize: 25,
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: 10
              }
            ]}
          >
            Are You Sure
          </Text>
          <Text style={[UtilStyles.standardText, { alignSelf: "center" }]}>
            Your book will give to someone else
          </Text>
          <Text style={[UtilStyles.standardText, { alignSelf: "center" }]}>
            and will not be safe any where in the
          </Text>
          <Text style={[UtilStyles.standardText, { alignSelf: "center" }]}>
            app.
          </Text>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <View style={{ flex: 0.5 }} />
            <View style={{ flex: 1 }}>
              <Button
                style={UtilStyles.buttonFillWidthYellow}
                onPress={() => Actions.MyPurchase({ text: "success" })}
              >
                <Left style={{ flex: 0.5 }} />
                <Body style={{ flex: 2, alignItems: "center" }}>
                  <Text style={UtilStyles.buttonTextBlack}>Yes</Text>
                </Body>
                <Right style={{ flex: 1, alignItems: "center" }}>
                  <View style={UtilStyles.circleWhiteOnButton}>
                    <Icon
                      size={20}
                      style={{
                        color: "black"
                      }}
                      name="ios-arrow-forward"
                    />
                  </View>
                </Right>
              </Button>
            </View>
            <View style={{ flex: 0.5 }} />
          </View>
        </View>
      </View>
    );
  }
}
