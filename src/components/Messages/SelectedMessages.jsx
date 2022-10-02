import React from "react";
import AddMessage from "./AddMessage";
import MessagesList from "./MessagesList";

const SelectedMessages = (props) => {
	return (
		<React.Fragment>
			<MessagesList
				selectedMessages={props.selectedMessages}
				currentUserId={props.currentUserId}
				targetUserId={props.targetUserId}
				userLocale={props.profile.userLocale}
				targetUserFullName={props.targetUserFullName}
			/>
			<AddMessage
				newMessage={props.newMessage}
				addMessage={props.addMessage}
				updateMessage={props.updateMessage}
			/>
		</React.Fragment>
	);
};

export default SelectedMessages;
