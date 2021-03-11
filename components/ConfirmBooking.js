import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Button,
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import haversine from "haversine";

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class AnimatedMarkers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      driver_lat: LATITUDE,
      driver_lng: LONGITUDE,
      latitude: LATITUDE,
      status: true,
      longitude: LONGITUDE,
      routeCoordinates: [],
      driverCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),
    };
  }

  componentDidMount() {
    const { coordinate } = this.state;

    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude,
        };
        //console.log(newCoordinate);
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker.animateMarkerToCoordinate(newCoordinate, 500);
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  componentDidUpdate() {
    fetch(
      "https://radiant-meadow-46440.herokuapp.com/users/" +
        `${this.props.user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: this.state.latitude,
          longitude: this.state.longitude,
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        // console.log("driverdata",data)
        let d = data.filter((dr) => dr.id === this.props.driver.id);
        let assigned_driver = d[0];
        //console.log("d",d)
        // console.log(d[0].name,"dname")
        //console.log("drive me", this.props.driver);
        // console.log(d[0].latitude,"dlat")
        // console.log(d[0].latitude,"dlng")
        // console.log("before",this.state.driverCoordinates)
        if (
          this.state.driver_lat != assigned_driver.latitude ||
          this.state.driver_lng != assigned_driver.longitude
        ) {
          console.log(
            this.state.driverCoordinates,
            "this.state.driverCoordinates"
          );
          newdriverCoordinates = this.state.driverCoordinates.concat([
            {
              latitude: parseFloat(assigned_driver.latitude),
              longitude: parseFloat(assigned_driver.longitude),
            },
          ]);
          console.log(newdriverCoordinates, "newdriverCoordinates");
          this.setState({
            driver_lat: assigned_driver.latitude,
            driver_lng: assigned_driver.longitude,
            driverCoordinates: newdriverCoordinates,
          });
        }
        //  console.log("after",this.state.driverCoordinates)
      });
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  calcDistance = (newLatLng) => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  removeButton = () => {
    this.setState({ status: false });
  };

  render() {
    //console.log("routecoord", this.state.routeCoordinates, "end here");
    console.log("drivercoord", this.state.driverCoordinates, "drivercoord end");
    return (
      <View style={styles.container}>
        {this.state.status && (
          <Button title="yo" onPress={() => this.removeButton} />
        )}
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline
            coordinates={this.state.routeCoordinates}
            strokeWidth={5}
            strokeColors={"black"}
          />
          <Polyline
            coordinates={this.state.driverCoordinates}
            strokeWidth={15}
            strokeColor={"yellow"}
          />
          <Marker.Animated
            ref={(marker) => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

export default AnimatedMarkers;
