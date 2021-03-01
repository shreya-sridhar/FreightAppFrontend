import StarRating from 'react-native-star-rating';
// import { yellow100 } from "react-native-paper/lib/typescript/styles/colors";

class GeneralStarExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        fullStarColor={'gold'}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default GeneralStarExample

