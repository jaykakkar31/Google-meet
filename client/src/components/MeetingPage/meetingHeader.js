import  { useEffect, useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//use for time
import moment from "moment";


function MeetingHeader({ setMessenger, setMessageAlert,messageAlert }) {
	const formatDate = () => {
		return moment().format("LT");
	};

	const [currentTime, setCurrentTime] = useState(() => {
		formatDate();
	});
	useEffect(() => {
		setInterval(() => setCurrentTime(formatDate()), 1000);
		console.log(currentTime);
	}, []);

	
	return (
		<div>
			<div class="frame-header">
				<div class="header-items icon-block">
					<PeopleIcon />
				</div>
				<div
					class="header-items "
					onClick={() => {
						setMessenger(true);
						setMessageAlert({
							alert: false,
							isPopup: false,
							payload: {},
						});
					}}
				>
					<ChatBubbleIcon />

				{messageAlert.alert &&	<span className="alert-icon"></span>}
				</div>
				<div class="header-items date-block">{currentTime}</div>
				<div class="header-items icon-block">
					<AccountCircleIcon />
				</div>
			</div>
		</div>
	);
}

export default MeetingHeader;
