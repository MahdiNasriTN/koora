import { useEffect } from "react";
import gsap from 'gsap';

import logo from "../Images/logo.png";
import "./headd.css";

function Head() {
  return (
    <div className="navbar">
		<div class="navbarContent">
			<div class="titleAndForm">
				<h1 class="WebSitetitle">Takwira</h1>
				<div class="search-form_DIV">
					<form class="search-form">
						<input placeholder="Enter a keyword to start a Search" class="search-form_input" type="search" />
						<button class="search-form_button" type="submit">Search</button>
					</form>
				</div>
			</div>
			<div class="optionsDiv">
				<div class="AllOptions">
					<div class="firstOptionsSection">
						<div class="option">Our Sports</div>
						<div class="option">Our Stadiums</div>
						<div class="option">Our Teams</div>
					</div>
					<div class="secondOptionsSection">
						<div class="option">Sign In</div>
						<div class="option lastOption">Sign Up</div>
					</div>
				</div>
			</div>
		</div>
    </div>
	
  );
}

export default Head;
