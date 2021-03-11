import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MusicApp from "C:/Users/shrey/FreightApp/components/Music.js";
const API = "10.0.2.2:8080";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  state = {
    user: {},
    error: "",
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("C:/Users/shrey/FreightApp/assets/bg.jpg"),
    ]);

    await Promise.all([...imageAssets]);
  }

  // componentDidMount() {
  //   const getData = async () => {
  //     try {
  //       console.log("storage on mount");
  //       const jsonValue = await AsyncStorage.getItem("@storage_Key");
  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //     } catch (e) {
  //       // error reading value
  //     }
  //   };
  //   if (getData) {
  //     this.persistUser(getData);
  //   }
  // }

  // persistUser = (token) => {
  //   console.log('persist')
  //   fetch(API + "/profile", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.username) {
  //         const { username, id } = data;
  //         this.setState({
  //           user: {
  //             username,
  //             id,
  //           },
  //         });
  //       }
  //     });
  // };

  handleLoginOrSignup = (e, userInfo) => {
    console.log("wru");
    if (userInfo.login === true) {
      this.handleLogin(e, userInfo);
    } else {
      this.handleSignup(e, userInfo);
    }
  };

  handleLogin = (e, userInfo) => {
    e.preventDefault();
    console.log("yoyoyoyoyoy");
    fetch("http://10.0.2.2:8080" + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => this.handleAuthResponse(data))
      .catch(console.log("did not work"));
  };

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    console.log("signup");
    fetch("http://10.0.2.2:8080" + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.handleAuthResponse(data);
      })
      .catch(console.log);
  };

  handleAuthResponse = (data) => {
    console.log("auth");
    console.log(data);
    if (data.user) {
      //   // const { username, id, token } = data;
      this.setState({
        user: data.user,
        error: null,
      });

      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@storage_Key", jsonValue).then(() =>
            console.log("AsyncStorage completed")
          );
          console.log("user",this.state.user)
          this.props.getNav(this.state.user)
          this.props.routerprops.navigation.navigate("HomeMap",{users:this.props.users,user:this.state.user})
        } catch (e) {
          // saving error
          console.log(jsonValue, "erorr");
        }
      };
      storeData(data.jwt);
    } else if (data.error) {
      console.log("Err");
      this.setState({
        error: data.error,
      });
    }
  };

  render() {
    console.log(this.state.user)
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <MusicApp handleLoginOrSignup={this.handleLoginOrSignup} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
