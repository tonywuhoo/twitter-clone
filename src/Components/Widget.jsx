import React from "react";
import "./Widget.css";
import Footer from "./Footer";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
	return (
		<div className="widgets">
			<Footer />
			<div className="widgets__input">
				<input placeholder="Search Twitter" type="text" />
			</div>

			<div className="widgets__widgetContainer">
				<h2>Top $hills</h2>

				<TwitterTweetEmbed tweetId={"1595780526656262148"} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="pkedrosky"
					options={{ height: 400 }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
