import React from "react";


// adapted from https://www.w3schools.com/react/react_forms.asp
class PopupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        diet: '',
        people_served: 4,
        budget: 100,
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      if (nam === "people_served" || nam === "budget") {
        if (!Number(val)) {
          alert("Input must be a number");
        }
      }
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form action="/" method = "get" class = "offset-s3 col s6" id = "search">
            <label htmlFor = "header-search">
                <span className = "hidden"> </span>
            </label>
              <h6>What are your dietary restrictions?</h6><br/>
              <div class = "row">
                <button class = "col s3 offset-s1">Vegan</button>
                <button class = "col s3 offset-s1">Vegetarian</button>
                <button class = "col s3 offset-s1">Gluten Free</button><br/>
              </div>
              <h6>How many people are you serving?</h6><br/>
                <input 
                type = "text"
                id = "header-search"
                placeholder = "Type in a number for people you are serving"
                name= "people_served" />
              <h6>What are your cost restrictions?</h6><br/>
                <input 
                type = "text"
                id = "header-search"
                placeholder = "Type in a maximum number for cost in dollars"
                name= "budget" />
              <div class = "row">
                <form action="./recommendations">
                    <button class = "col s3 offset-s5" >Confirm preferences</button>
                </form>
              </div>
          </form>
      );
    }
  }

export default PopupForm;