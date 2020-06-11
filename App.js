import React from "react";
import { Text, View, Button, Vibration, Platform } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export default class AppContainer extends React.Component {
  sendPushNotification = async () => {
    let t = new Date().getTime() + 5000; // Right now, it goes off after 5 seconds of pressing the button
    const schedulingOptions = {
      time: t, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
      // repeat: "minute",
    };
    const message = {
      // sound: "default",
      title: "Hey There",
      body: "Hey there. This message is for you!",
      data: { data: "goes here" },
      _displayInForeground: true,
    };

    Notifications.scheduleLocalNotificationAsync(message, schedulingOptions);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button
          title={"Press to Send Notification"}
          onPress={() => this.sendPushNotification()}
        />
      </View>
    );
  }
}
